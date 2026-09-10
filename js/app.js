// ===== Security Utilities =====
const _SESSION_SECRET = crypto.getRandomValues(new Uint8Array(32));

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + "_teaching_salt_2026");
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function _signSession(obj) {
  const enc = new TextEncoder();
  const key = await crypto.subtle.importKey("raw", _SESSION_SECRET, { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(JSON.stringify(obj)));
  return Array.from(new Uint8Array(sig)).map(b => b.toString(16).padStart(2, "0")).join("");
}

async function _verifySession(obj, sig) {
  const expected = await _signSession(obj);
  return expected === sig;
}

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ===== Login rate limiting =====
const _loginAttempts = {};
function _checkRateLimit(username) {
  const now = Date.now();
  const record = _loginAttempts[username];
  if (!record) return true;
  if (record.lockedUntil && now < record.lockedUntil) return false;
  if (record.lockedUntil && now >= record.lockedUntil) {
    delete _loginAttempts[username];
    return true;
  }
  return true;
}
function _recordFailedLogin(username) {
  const now = Date.now();
  if (!_loginAttempts[username]) _loginAttempts[username] = { count: 0, first: now };
  _loginAttempts[username].count++;
  if (_loginAttempts[username].count >= 5) {
    _loginAttempts[username].lockedUntil = now + 60000;
  }
}

// ===== State =====
let _sessionSig = null;
let currentUser = null;
let users = JSON.parse(localStorage.getItem("users")) || {};
let hwSubmissions = JSON.parse(localStorage.getItem("hwSubmissions")) || {};

// ===== Navigation =====
function showSection(id) {
  // Block non-supervisors from admin (with session signature check)
  if (id === "admin") {
    users = JSON.parse(localStorage.getItem("users")) || {};
    if (!currentUser || !_sessionSig || users[currentUser.username]?.role !== "supervisor") return;
    _verifySession(currentUser, _sessionSig).then(valid => {
      if (!valid) { doLogout(); return; }
    });
    setTimeout(() => renderAdminStudents(), 50);
  }

  document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
  const section = document.getElementById(id);
  if (section) section.classList.add("active");

  document.querySelectorAll(".nav-links a").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("data-section") === id);
  });

  // Close mobile menu
  document.querySelector(".nav-links")?.classList.remove("open");
}

document.addEventListener("DOMContentLoaded", async () => {
  // Nav clicks
  document.querySelectorAll("[data-section]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      showSection(el.getAttribute("data-section"));
    });
  });

  // Hamburger
  document.querySelector(".hamburger")?.addEventListener("click", () => {
    document.querySelector(".nav-links")?.classList.toggle("open");
  });

  // Lang toggle
  document.getElementById("langToggle")?.addEventListener("click", toggleLang);

  // Init (async for password hashing)
  if (typeof initStudentAccounts === "function") await initStudentAccounts();
  users = JSON.parse(localStorage.getItem("users")) || {};
  setLang(currentLang);
  updateAuthUI();
  showSection("home");
});

// ===== Auth =====
function updateAuthUI() {
  const loginBtn = document.getElementById("navLoginBtn");
  const userInfo = document.getElementById("navUserInfo");
  const userName = document.getElementById("navUserName");

  if (currentUser) {
    loginBtn.style.display = "none";
    userInfo.style.display = "flex";
    const userRecord = users[currentUser.username];
    userName.textContent = (userRecord && userRecord.name) ? userRecord.name : currentUser.username;
  } else {
    loginBtn.style.display = "inline-flex";
    userInfo.style.display = "none";
  }
  updateProtectedSections();
}

function updateProtectedSections() {
  const loggedIn = currentUser && _sessionSig;
  document.querySelectorAll(".login-required-box").forEach((box) => {
    box.style.display = loggedIn ? "none" : "block";
  });
  document.querySelectorAll(".protected-content").forEach((el) => {
    el.style.display = loggedIn ? "block" : "none";
  });

  // Show/hide admin nav
  const adminNav = document.getElementById("navAdminItem");
  users = JSON.parse(localStorage.getItem("users")) || {};
  const isSupervisor = loggedIn && users[currentUser.username]?.role === "supervisor";
  if (adminNav) {
    adminNav.style.display = isSupervisor ? "block" : "none";
  }
}

function openLoginModal() {
  document.getElementById("loginModal").classList.add("open");
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("changePwdForm").style.display = "none";
  // Clear all form fields
  document.querySelectorAll("#loginModal input").forEach((input) => (input.value = ""));
  clearFormErrors();
}

function closeLoginModal() {
  document.getElementById("loginModal").classList.remove("open");
  clearFormErrors();
}

function clearFormErrors() {
  document.querySelectorAll(".form-error").forEach((e) => (e.style.display = "none"));
}

function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
  document.getElementById("changePwdForm").style.display = "none";
  clearFormErrors();
}

function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("changePwdForm").style.display = "none";
  clearFormErrors();
}

function showChangePwdForm() {
  document.getElementById("loginModal").classList.add("open");
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("changePwdForm").style.display = "block";
  clearFormErrors();
}

async function doChangePwd() {
  const oldPwd = document.getElementById("changePwdOld").value;
  const newPwd = document.getElementById("changePwdNew").value;
  const confirmPwd = document.getElementById("changePwdConfirm").value;
  const errEl = document.getElementById("changePwdError");

  if (!oldPwd || !newPwd || !confirmPwd) return;

  if (newPwd !== confirmPwd) {
    errEl.style.display = "block";
    errEl.textContent = t("change_pwd_mismatch");
    return;
  }

  const username = currentUser.username;
  const hashedOld = await hashPassword(oldPwd);
  if (users[username].password !== hashedOld) {
    errEl.style.display = "block";
    errEl.textContent = t("change_pwd_wrong");
    return;
  }

  users[username].password = await hashPassword(newPwd);
  users[username].defaultPwd = false;
  localStorage.setItem("users", JSON.stringify(users));
  closeLoginModal();
  showToast(t("change_pwd_success"), "success");
  // Clear form fields
  document.getElementById("changePwdOld").value = "";
  document.getElementById("changePwdNew").value = "";
  document.getElementById("changePwdConfirm").value = "";
}

async function doLogin() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) return;

  if (!_checkRateLimit(username)) {
    document.getElementById("loginError").style.display = "block";
    document.getElementById("loginError").textContent =
      currentLang === "zh" ? "登入嘗試過多，請 1 分鐘後再試" : "Too many attempts. Try again in 1 minute.";
    return;
  }

  // Reload users in case initStudentAccounts updated them
  users = JSON.parse(localStorage.getItem("users")) || {};

  const hashedInput = await hashPassword(password);
  if (users[username] && users[username].password === hashedInput) {
    currentUser = { username, role: users[username].role };
    _sessionSig = await _signSession(currentUser);
    delete _loginAttempts[username];
    closeLoginModal();
    updateAuthUI();
    showToast(t("login_success"), "success");
  } else {
    _recordFailedLogin(username);
    document.getElementById("loginError").style.display = "block";
    document.getElementById("loginError").textContent = t("login_error");
  }
}

async function doRegister() {
  // 訪客註冊暫時停用
  showToast("訪客註冊功能暫時停用 / Registration is temporarily disabled", "error");
  return;

  const name = document.getElementById("regName").value.trim();
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;

  if (!name || !username || !password) return;

  if (users[username]) {
    document.getElementById("regError").style.display = "block";
    document.getElementById("regError").textContent = t("register_exists");
    return;
  }

  const hashedPwd = await hashPassword(password);
  users[username] = { password: hashedPwd, role: "friend", name: name };
  localStorage.setItem("users", JSON.stringify(users));
  showToast(t("register_success"), "success");
  showLoginForm();
  document.getElementById("loginUsername").value = username;
}

function doLogout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
  // Clear login form fields
  const loginUser = document.getElementById("loginUsername");
  const loginPwd = document.getElementById("loginPassword");
  if (loginUser) loginUser.value = "";
  if (loginPwd) loginPwd.value = "";
  updateAuthUI();
  showSection("home");
}

// ===== Toast =====
function showToast(msg, type = "success") {
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = msg;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// ===== Resources =====
function renderResources() {
  const container = document.getElementById("resourceList");
  if (!container) return;
  container.innerHTML = "";

  resourceData.forEach((cat) => {
    if (cat.items.length === 0 && !cat.folderUrl) return;

    const catDiv = document.createElement("div");
    catDiv.className = "resource-category";
    catDiv.innerHTML = `<h3>${t(cat.category)}</h3>`;

    if (cat.folderUrl) {
      const folderBtn = document.createElement("div");
      folderBtn.style.cssText = "margin-bottom:1rem;";
      folderBtn.innerHTML = `
        <a href="${cat.folderUrl}" target="_blank" class="resource-folder-btn">
          📁 ${currentLang === "zh" ? "開啟 Google Drive 資料夾（下載所有教材）" : "Open Google Drive Folder (Download All)"}
        </a>`;
      catDiv.appendChild(folderBtn);
    }

    if (cat.items.length > 0) {
      const list = document.createElement("div");
      list.className = "resource-list";

      cat.items.forEach((item) => {
        const name = currentLang === "zh" ? item.name_zh : item.name_en;
        const desc = currentLang === "zh" ? item.desc_zh : item.desc_en;
        const icon = item.name_zh.includes("程式") || item.name_zh.includes("code") ? "💻" : "PDF";
        list.innerHTML += `
          <a href="${escapeHtml(item.url)}" target="_blank" class="resource-item">
            <div class="resource-icon">${icon}</div>
            <div class="resource-details">
              <h4>${escapeHtml(name)}</h4>
              <p>${escapeHtml(desc)}</p>
            </div>
          </a>`;
      });

      catDiv.appendChild(list);
    }

    container.appendChild(catDiv);
  });
}

// ===== App Downloads =====
function renderApps() {
  const grid = document.getElementById("appGrid");
  if (!grid) return;

  const esc = escapeHtml;
  grid.innerHTML = appData
    .map((app) => {
      const desc = currentLang === "zh" ? app.desc_zh : app.desc_en;
      const tags = currentLang === "zh" ? app.tags_zh : app.tags_en;
      return `
      <div class="app-card">
        <div class="app-card-header">
          <div class="app-card-icon">${app.icon}</div>
          <div>
            <h3>${esc(app.name)}</h3>
            <span class="app-format-badge">${esc(app.format)} — ${esc(app.size)}</span>
          </div>
        </div>
        <div class="app-card-body">
          <p>${esc(desc)}</p>
          <div class="app-tags">
            ${tags.map((tag) => `<span class="app-tag">${esc(tag)}</span>`).join("")}
          </div>
          <div class="app-actions">
            <a href="${esc(app.driveUrl)}" target="_blank" class="app-btn app-btn-download"
               onclick="window.open(this.href,'_blank');return false;">
              ⬇ ${t("apps_download")}
            </a>
            <a href="${esc(app.github)}" target="_blank" class="app-btn app-btn-github"
               onclick="window.open(this.href,'_blank');return false;">
              ⚙ ${t("apps_github")}
            </a>
          </div>
        </div>
      </div>`;
    })
    .join("");
}

// ===== Videos =====
// Videos now handled by youtube.js

// ===== Quiz =====
let quizState = { course: null, current: 0, answers: [], submitted: false };

function selectQuizCourse(courseKey) {
  quizState = { course: courseKey, current: 0, answers: [], submitted: false };
  document.querySelectorAll(".quiz-course-btn").forEach((btn) => {
    btn.classList.toggle("selected", btn.getAttribute("data-course") === courseKey);
  });
  renderQuiz();
}

function renderQuiz() {
  const area = document.getElementById("quizArea");
  const resultBox = document.getElementById("quizResult");
  if (!area) return;

  if (!quizState.course) {
    area.style.display = "none";
    return;
  }

  if (quizState.submitted) {
    area.style.display = "none";
    resultBox.style.display = "block";
    showQuizResult();
    return;
  }

  resultBox.style.display = "none";
  area.style.display = "block";

  const questions = quizData[quizState.course][currentLang] || quizData[quizState.course]["zh"];
  const q = questions[quizState.current];
  const total = questions.length;
  const idx = quizState.current;

  const progressText = t("quiz_q_of").replace("{0}", idx + 1).replace("{1}", total);
  const progressPct = ((idx + 1) / total) * 100;

  document.getElementById("quizProgressText").textContent = progressText;
  document.getElementById("quizProgressFill").style.width = progressPct + "%";

  document.getElementById("quizQuestion").textContent = q.q;

  const optionsEl = document.getElementById("quizOptions");
  optionsEl.innerHTML = q.options
    .map(
      (opt, i) => `
    <label class="quiz-option ${quizState.answers[idx] === i ? "selected" : ""}">
      <input type="radio" name="quizOpt" value="${i}"
        ${quizState.answers[idx] === i ? "checked" : ""}
        onchange="quizState.answers[${idx}]=${i}; renderQuiz();">
      ${opt}
    </label>`
    )
    .join("");

  document.getElementById("quizPrevBtn").style.visibility = idx > 0 ? "visible" : "hidden";
  const nextBtn = document.getElementById("quizNextBtn");
  if (idx === total - 1) {
    nextBtn.textContent = t("quiz_submit");
    nextBtn.onclick = submitQuiz;
  } else {
    nextBtn.textContent = t("quiz_next");
    nextBtn.onclick = () => { quizState.current++; renderQuiz(); };
  }
}

function quizPrev() {
  if (quizState.current > 0) { quizState.current--; renderQuiz(); }
}

async function _hashRecord(obj) {
  const copy = Object.assign({}, obj);
  delete copy.checksum;
  const str = JSON.stringify(copy) + "_grade_integrity_2026";
  const hash = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(str));
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}

function _getAnswerKey() {
  if (!window._cachedQK) window._cachedQK = _dqk();
  return window._cachedQK;
}

function _getAnswer(course, lang, index) {
  const key = _getAnswerKey();
  const answers = key[course]?.[lang] || key[course]?.["zh"];
  return answers ? answers[index] : -1;
}

async function submitQuiz() {
  quizState.submitted = true;

  if (currentUser) {
    const questions = quizData[quizState.course][currentLang] || quizData[quizState.course]["zh"];
    const lang = quizData[quizState.course][currentLang] ? currentLang : "zh";
    let correct = 0;
    questions.forEach((q, i) => { if (quizState.answers[i] === _getAnswer(quizState.course, lang, i)) correct++; });
    const pct = Math.round((correct / questions.length) * 100);

    let quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    const record = {
      userId: currentUser.username,
      course: quizState.course,
      score: pct,
      correct: correct,
      total: questions.length,
      date: new Date().toISOString(),
    };
    record.checksum = await _hashRecord(record);
    quizResults.push(record);
    localStorage.setItem("quizResults", JSON.stringify(quizResults));
  }

  renderQuiz();
}

function showQuizResult() {
  const questions = quizData[quizState.course][currentLang] || quizData[quizState.course]["zh"];
  const lang = quizData[quizState.course][currentLang] ? currentLang : "zh";
  let correct = 0;
  questions.forEach((q, i) => { if (quizState.answers[i] === _getAnswer(quizState.course, lang, i)) correct++; });
  const pct = Math.round((correct / questions.length) * 100);

  document.getElementById("quizScoreNum").textContent = pct + "%";
  document.getElementById("quizCorrectCount").textContent = `${t("quiz_correct")}：${correct} / ${questions.length}`;
}

function retryQuiz() {
  quizState = { course: quizState.course, current: 0, answers: [], submitted: false };
  document.getElementById("quizResult").style.display = "none";
  renderQuiz();
}

// ===== Homework =====
function renderHomework() {
  const sel = document.getElementById("hwCourseSelect");
  const list = document.getElementById("hwList");
  if (!sel || !list) return;

  const courseKey = sel.value;
  if (!courseKey || !homeworkData[courseKey]) {
    list.innerHTML = `<p style="text-align:center;color:var(--text-light);">${t("hw_no_hw")}</p>`;
    return;
  }

  const hws = homeworkData[courseKey][currentLang] || homeworkData[courseKey]["zh"];

  const downloadOnly = courseKey === "course6";
  const driveFolder = "https://drive.google.com/drive/folders/1To3GNKdfZ4DYrsv5JedZeOfdZbK-4pjF?usp=sharing";

  list.innerHTML = hws
    .map((hw) => {
      if (downloadOnly) {
        return `
      <div class="hw-card">
        <div class="hw-card-header" onclick="this.nextElementSibling.classList.toggle('open')" style="cursor:pointer;">
          <h4>${hw.title}</h4>
          <a href="${driveFolder}" target="_blank" rel="noopener" class="btn btn-primary" onclick="event.stopPropagation();" style="font-size:0.8rem;padding:0.3rem 0.8rem;white-space:nowrap;">
            📥 ${currentLang === "zh" ? "下載作業" : "Download"}
          </a>
        </div>
        <div class="hw-card-body">
          <div class="hw-desc">${hw.desc}</div>
        </div>
      </div>`;
      }

      const sub = hwSubmissions[hw.id];
      let statusClass = "pending";
      let statusText = t("hw_status_pending");
      if (sub) {
        statusClass = sub.graded ? "graded" : "submitted";
        statusText = sub.graded ? t("hw_status_graded") : t("hw_status_submitted");
      }
      const isOverdue = new Date(hw.due) < new Date() && !sub;
      if (isOverdue) { statusClass = "late"; statusText = t("hw_status_late"); }

      return `
      <div class="hw-card">
        <div class="hw-card-header" onclick="this.nextElementSibling.classList.toggle('open')">
          <h4>${hw.title}</h4>
          <span class="hw-status-badge ${statusClass}">${statusText}</span>
        </div>
        <div class="hw-card-body">
          <div class="hw-meta">
            <span>${t("hw_due")}：${hw.due}</span>
            ${sub && sub.graded ? `<span>${t("hw_score")}：${sub.score}/100</span>` : ""}
          </div>
          <div class="hw-desc">${hw.desc}</div>
          ${!sub ? `
          <div class="hw-upload-area" onclick="document.getElementById('file-${hw.id}').click()">
            <div style="font-size:2rem;margin-bottom:0.5rem;">📄</div>
            <p>${t("hw_upload")}</p>
            <input type="file" id="file-${hw.id}" onchange="uploadHW('${hw.id}', this)">
          </div>` : `<p style="color:var(--success);font-weight:600;">✓ ${t("hw_status_submitted")}: ${sub.filename}</p>`}
        </div>
      </div>`;
    })
    .join("");
}

function uploadHW(hwId, input) {
  if (!input.files.length || !currentUser) return;
  const file = input.files[0];
  // Use hwId_userId as key to support multiple students
  const subKey = `${hwId}_${currentUser.username}`;
  hwSubmissions[subKey] = {
    filename: file.name,
    date: new Date().toISOString(),
    graded: false,
    userId: currentUser.username,
  };
  // Also keep simple key for backward compatibility with student's own view
  hwSubmissions[hwId] = hwSubmissions[subKey];
  localStorage.setItem("hwSubmissions", JSON.stringify(hwSubmissions));
  showToast(t("hw_status_submitted") + "！", "success");
  renderHomework();
}

// ===== Language Change Callback =====
function onLanguageChange() {
  renderResources();
  renderApps();
  renderVideoFilters();
  renderVideoGrid();
  renderHomework();
  renderCourseTopics();
  renderResearchTags();
  if (quizState.course && !quizState.submitted) renderQuiz();
  updateAuthUI();
  // Refresh admin panels if visible
  if (currentUser && users[currentUser.username]?.role === "supervisor") {
    renderAdminStudents();
  }
}

function renderCourseTopics() {
  for (let i = 1; i <= 6; i++) {
    const el = document.getElementById(`course${i}Topics`);
    if (!el) continue;
    const topics = t(`course${i}_topics`).split(",");
    el.innerHTML = topics.map((tp) => `<li>${tp.trim()}</li>`).join("");
  }
}

function renderResearchTags() {
  const el = document.getElementById("researchTags");
  if (!el) return;
  const items = t("about_research_items").split(/[｜|]/);
  el.innerHTML = items.map((item) => `<span class="research-tag">${item.trim()}</span>`).join("");
}

// ===== Enter key for login =====
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const loginModal = document.getElementById("loginModal");
    if (loginModal?.classList.contains("open")) {
      if (document.getElementById("loginForm")?.style.display !== "none") {
        doLogin();
      }
    }
  }
});

// ===== Admin Panel =====
function switchAdminTab(tabId) {
  document.querySelectorAll(".admin-panel").forEach((p) => (p.style.display = "none"));
  document.querySelectorAll(".admin-tab").forEach((t) => t.classList.remove("selected"));
  const panel = document.getElementById(tabId);
  if (panel) panel.style.display = "block";
  const btn = document.querySelector(`.admin-tab[data-tab="${tabId}"]`);
  if (btn) btn.classList.add("selected");

  // Render content for the active tab
  if (tabId === "admin-students") renderAdminStudents();
  if (tabId === "admin-homework") renderAdminHomework();
  if (tabId === "admin-quiz") renderAdminQuiz();
  if (tabId === "admin-accounts") renderAdminAccounts();
}

// --- Student Roster ---
let _rosterDirty = false;

function renderAdminStudents() {
  const tbody = document.getElementById("adminStudentBody");
  const countEl = document.getElementById("adminStudentCount");
  const courseFilter = document.getElementById("adminStudentCourse")?.value || "all";
  if (!tbody) return;

  users = JSON.parse(localStorage.getItem("users")) || {};
  let studentList = [];

  if (courseFilter === "all") {
    for (const courseKey of Object.keys(studentRoster)) {
      const roster = studentRoster[courseKey];
      for (const s of roster.students) {
        if (!studentList.find((x) => x.id === s.id)) {
          const courseNames = [];
          const courseKeys = [];
          for (const ck of Object.keys(studentRoster)) {
            if (studentRoster[ck].students.find((st) => st.id === s.id)) {
              courseNames.push(t(`${ck}_title`) || ck);
              courseKeys.push(ck);
            }
          }
          studentList.push({ ...s, courseNames, courseKeys });
        }
      }
    }
  } else {
    const roster = studentRoster[courseFilter];
    if (roster) {
      studentList = roster.students.map((s) => ({ ...s, courseNames: [t(`${courseFilter}_title`)], courseKeys: [courseFilter] }));
    }
  }

  if (countEl) {
    countEl.textContent = t("admin_total_students").replace("{0}", studentList.length);
  }

  tbody.innerHTML = studentList.map((s, i) => {
    const user = users[s.id];
    const pwdChanged = user && user.defaultPwd === false;
    const pwdBadge = pwdChanged
      ? `<span class="admin-badge changed">${t("admin_pwd_changed")}</span>`
      : `<span class="admin-badge default">${t("admin_pwd_default")}</span>`;
    const resetBtn = pwdChanged
      ? `<button class="admin-btn" onclick="resetStudentPwd('${escapeHtml(s.id)}','${escapeHtml(s.name)}')">${t("admin_reset_pwd")}</button> `
      : "";
    const delBtn = `<button class="admin-btn" style="color:var(--danger,#e74c3c);" onclick="deleteStudent('${escapeHtml(s.id)}','${escapeHtml(s.name)}','${escapeHtml(s.courseKeys.join(","))}')">${t("admin_roster_delete")}</button>`;
    return `<tr>
      <td>${i + 1}</td>
      <td>${escapeHtml(s.id)}</td>
      <td>${escapeHtml(s.name)}</td>
      <td>${escapeHtml(s.courseNames.join(", "))}</td>
      <td>${pwdBadge}</td>
      <td>${resetBtn}${delBtn}</td>
    </tr>`;
  }).join("");
}

function showRosterMsg(msg, type) {
  const el = document.getElementById("adminRosterMsg");
  if (!el) return;
  el.textContent = msg;
  el.style.display = "block";
  el.style.background = type === "success" ? "#d4edda" : type === "error" ? "#f8d7da" : "#cce5ff";
  el.style.color = type === "success" ? "#155724" : type === "error" ? "#721c24" : "#004085";
  setTimeout(() => { el.style.display = "none"; }, 4000);
}

function addSingleStudent() {
  const courseKey = document.getElementById("addStudentCourse").value;
  const studentId = document.getElementById("addStudentId").value.trim();
  const studentName = document.getElementById("addStudentName").value.trim();

  if (!studentId || !studentName) {
    showRosterMsg(currentLang === "zh" ? "請填入學號和姓名" : "Please enter student ID and name", "error");
    return;
  }

  if (!studentRoster[courseKey]) {
    studentRoster[courseKey] = { students: [] };
  }

  if (studentRoster[courseKey].students.find(s => s.id === studentId)) {
    showRosterMsg(currentLang === "zh" ? `學號 ${studentId} 已存在於此課程` : `Student ${studentId} already exists in this course`, "error");
    return;
  }

  studentRoster[courseKey].students.push({ id: studentId, name: studentName, nickname: "", password: studentId });
  _rosterDirty = true;

  document.getElementById("addStudentId").value = "";
  document.getElementById("addStudentName").value = "";

  showRosterMsg(currentLang === "zh" ? `已新增 ${studentName} (${studentId})` : `Added ${studentName} (${studentId})`, "success");
  renderAdminStudents();
}

function deleteStudent(studentId, studentName, courseKeysStr) {
  const courseKeys = courseKeysStr.split(",");
  const msg = currentLang === "zh"
    ? `確定要刪除 ${studentName} (${studentId}) 嗎？`
    : `Delete ${studentName} (${studentId})?`;
  if (!confirm(msg)) return;

  for (const ck of courseKeys) {
    if (studentRoster[ck]) {
      studentRoster[ck].students = studentRoster[ck].students.filter(s => s.id !== studentId);
    }
  }
  _rosterDirty = true;

  showRosterMsg(currentLang === "zh" ? `已刪除 ${studentName}` : `Deleted ${studentName}`, "success");
  renderAdminStudents();
}

function batchUploadStudents(input) {
  if (!input.files.length) return;
  const file = input.files[0];
  const reader = new FileReader();
  reader.onload = function(e) {
    const data = new Uint8Array(e.target.result);
    const wb = XLSX.read(data, { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(ws);

    let added = 0;
    let skipped = 0;
    for (const row of rows) {
      const course = String(row["課程 (Course)"] || "").trim();
      const id = String(row["學號 (Student No)"] || "").trim();
      const name = String(row["姓名 (Name)"] || "").trim();
      const nickname = String(row["暱稱 (Nickname)"] || "").trim();
      const password = String(row["密碼 (Password)"] || id).trim();
      if (!course || !id) { skipped++; continue; }

      if (!studentRoster[course]) {
        studentRoster[course] = { students: [] };
      }
      if (studentRoster[course].students.find(s => s.id === id)) {
        skipped++;
        continue;
      }
      studentRoster[course].students.push({ id, name, nickname, password });
      added++;
    }
    _rosterDirty = true;
    input.value = "";

    showRosterMsg(
      currentLang === "zh"
        ? `匯入完成：新增 ${added} 人，略過 ${skipped} 人`
        : `Import done: ${added} added, ${skipped} skipped`,
      "success"
    );
    renderAdminStudents();
  };
  reader.readAsArrayBuffer(file);
}

async function encryptRoster() {
  const header = ["課程 (Course)", "學號 (Student No)", "姓名 (Name)", "暱稱 (Nickname)", "密碼 (Password)"];
  const rows = [];
  for (const courseKey of Object.keys(studentRoster)) {
    for (const s of studentRoster[courseKey].students) {
      rows.push([courseKey, s.id, s.name, s.nickname || "", s.password || s.id]);
    }
  }
  const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
  ws["!cols"] = [{ wch: 18 }, { wch: 15 }, { wch: 12 }, { wch: 12 }, { wch: 15 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Students");
  const xlsxData = XLSX.write(wb, { type: "array", bookType: "xlsx" });

  const passphrase = "teaching_roster_key_2026";
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey("raw", enc.encode(passphrase), "PBKDF2", false, ["deriveKey"]);
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode("roster_salt"), iterations: 100000, hash: "SHA-256" },
    keyMaterial, { name: "AES-CBC", length: 256 }, false, ["encrypt"]
  );
  const iv = crypto.getRandomValues(new Uint8Array(16));
  const encrypted = await crypto.subtle.encrypt({ name: "AES-CBC", iv }, key, new Uint8Array(xlsxData));

  const payload = new Uint8Array(iv.length + encrypted.byteLength);
  payload.set(iv, 0);
  payload.set(new Uint8Array(encrypted), iv.length);

  let binary = "";
  for (let i = 0; i < payload.length; i++) binary += String.fromCharCode(payload[i]);
  return btoa(binary);
}

async function saveRosterEncrypted() {
  try {
    const base64 = await encryptRoster();
    const blob = new Blob([base64], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "roster.enc";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    _rosterDirty = false;

    showRosterMsg(
      currentLang === "zh"
        ? "roster.enc 已下載！請將檔案放入 data/ 資料夾並推送至 GitHub。"
        : "roster.enc downloaded! Place it in data/ folder and push to GitHub.",
      "success"
    );
  } catch (err) {
    console.error("Encrypt error:", err);
    showRosterMsg(currentLang === "zh" ? "加密失敗：" + err.message : "Encryption failed: " + err.message, "error");
  }
}

async function resetStudentPwd(studentId, studentName) {
  const msg = t("admin_reset_pwd_confirm").replace("{0}", `${studentName} (${studentId})`);
  if (!confirm(msg)) return;
  users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[studentId]) {
    users[studentId].password = await hashPassword(studentId);
    users[studentId].defaultPwd = true;
    localStorage.setItem("users", JSON.stringify(users));
    showToast(t("admin_reset_pwd_success"), "success");
    renderAdminStudents();
  }
}

// --- Homework Grading ---
function renderAdminHomework() {
  const container = document.getElementById("adminHwContent");
  const courseKey = document.getElementById("adminHwCourse")?.value;
  if (!container) return;

  if (!courseKey || !homeworkData[courseKey]) {
    container.innerHTML = `<p style="text-align:center;color:var(--text-light);padding:2rem;">${t("admin_hw_no_submissions")}</p>`;
    return;
  }

  hwSubmissions = JSON.parse(localStorage.getItem("hwSubmissions")) || {};
  users = JSON.parse(localStorage.getItem("users")) || {};

  const hws = homeworkData[courseKey][currentLang] || homeworkData[courseKey]["zh"];
  let html = "";

  hws.forEach((hw) => {
    // Find all submissions for this hw
    const submissions = [];
    for (const [key, sub] of Object.entries(hwSubmissions)) {
      if (key === hw.id || key.startsWith(hw.id)) {
        // key format could be hwId or hwId_userId
        const userId = sub.userId || "unknown";
        const userRecord = users[userId];
        submissions.push({
          ...sub,
          hwKey: key,
          userId,
          userName: userRecord?.name || userId,
        });
      }
    }

    html += `<div class="admin-hw-card">
      <h4>📝 ${hw.title}</h4>
      <p style="font-size:0.85rem;color:var(--text-light);margin-bottom:0.8rem;">${t("hw_due")}：${hw.due}</p>`;

    if (submissions.length === 0) {
      html += `<p style="color:var(--text-light);font-size:0.9rem;">${t("admin_hw_no_submissions")}</p>`;
    } else {
      submissions.forEach((sub) => {
        const scoreVal = sub.graded ? sub.score : "";
        html += `<div class="admin-hw-row">
          <span class="student-info">${escapeHtml(sub.userName)}</span>
          <span class="file-info">📄 ${escapeHtml(sub.filename)} &nbsp;·&nbsp; ${new Date(sub.date).toLocaleString(currentLang === "zh" ? "zh-TW" : "en-US")}</span>
          <input type="number" class="grade-input" min="0" max="100" value="${scoreVal}" placeholder="0-100" id="grade-${escapeHtml(sub.hwKey)}">
          <button class="admin-btn" onclick="gradeHomework('${escapeHtml(sub.hwKey)}', document.getElementById('grade-${escapeHtml(sub.hwKey)}').value)">${t("admin_hw_grade_btn")}</button>
        </div>`;
      });
    }

    html += `</div>`;
  });

  container.innerHTML = html;
}

function gradeHomework(hwKey, score) {
  score = parseInt(score);
  if (isNaN(score) || score < 0 || score > 100) return;
  hwSubmissions = JSON.parse(localStorage.getItem("hwSubmissions")) || {};
  if (hwSubmissions[hwKey]) {
    hwSubmissions[hwKey].graded = true;
    hwSubmissions[hwKey].score = score;
    localStorage.setItem("hwSubmissions", JSON.stringify(hwSubmissions));
    showToast(t("admin_hw_graded_success"), "success");
    renderAdminHomework();
  }
}

// --- Quiz Results ---
let quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];

function renderAdminQuiz() {
  const tbody = document.getElementById("adminQuizBody");
  const table = document.getElementById("adminQuizTable");
  const empty = document.getElementById("adminQuizEmpty");
  const courseKey = document.getElementById("adminQuizCourse")?.value;
  if (!tbody) return;

  quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];

  let filtered = courseKey
    ? quizResults.filter((r) => r.course === courseKey)
    : quizResults;

  if (filtered.length === 0) {
    table.style.display = "none";
    empty.style.display = "block";
    return;
  }

  table.style.display = "table";
  empty.style.display = "none";

  tbody.innerHTML = filtered.map((r, i) => {
    const userRecord = users[r.userId];
    const name = userRecord?.name || r.userId;
    return `<tr>
      <td>${i + 1}</td>
      <td>${escapeHtml(name)}</td>
      <td>${escapeHtml(r.userId)}</td>
      <td><strong>${r.score}%</strong> (${r.correct}/${r.total})</td>
      <td>${new Date(r.date).toLocaleString(currentLang === "zh" ? "zh-TW" : "en-US")}</td>
    </tr>`;
  }).join("");
}

// --- Account Management ---
function exportStudentsExcel() {
  users = JSON.parse(localStorage.getItem("users")) || {};
  const header = ["課程 (Course)", "學號 (Student No)", "姓名 (Name)", "暱稱 (Nickname)", "密碼 (Password)"];
  const rows = [];

  // Add students from roster first
  for (const courseKey of Object.keys(studentRoster)) {
    for (const s of studentRoster[courseKey].students) {
      rows.push([courseKey, s.id, s.name, s.nickname || "", s.password || s.id]);
    }
  }

  // Add registered visitors (not in roster)
  const rosterIds = new Set();
  for (const courseKey of Object.keys(studentRoster)) {
    for (const s of studentRoster[courseKey].students) {
      rosterIds.add(s.id);
    }
  }
  for (const [uid, u] of Object.entries(users)) {
    if (uid === "fctien") continue;
    if (rosterIds.has(uid)) continue;
    const role = u.role === "friend" ? "visitor" : u.role || "visitor";
    rows.push([role, uid, u.name || "", "", ""]);
  }

  const ws = XLSX.utils.aoa_to_sheet([header, ...rows]);
  ws["!cols"] = [{ wch: 18 }, { wch: 15 }, { wch: 12 }, { wch: 12 }, { wch: 15 }];
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Students");
  XLSX.writeFile(wb, "students.xlsx");
  showToast(currentLang === "zh" ? "名冊已匯出！" : "Roster exported!", "success");
}

function renderAdminAccounts() {
  const tbody = document.getElementById("adminAccountBody");
  if (!tbody) return;

  users = JSON.parse(localStorage.getItem("users")) || {};
  const entries = Object.entries(users).sort((a, b) => {
    const roleOrder = { supervisor: 0, student: 1, friend: 2 };
    return (roleOrder[a[1].role] || 3) - (roleOrder[b[1].role] || 3);
  });

  tbody.innerHTML = entries.map(([uid, u], i) => {
    const roleBadge = `<span class="admin-badge ${u.role || "friend"}">${u.role === "supervisor" ? "管理員" : u.role === "student" ? t("login_role_student") : t("login_role_friend")}</span>`;
    // Check if default password using flag
    const isStudent = u.role === "student";
    const pwdDefault = isStudent && u.defaultPwd !== false;
    const pwdBadge = isStudent
      ? (pwdDefault
        ? `<span class="admin-badge default">${t("admin_pwd_default")}</span>`
        : `<span class="admin-badge changed">${t("admin_pwd_changed")}</span>`)
      : "-";
    const resetBtn = isStudent && !pwdDefault
      ? `<button class="admin-btn" onclick="resetStudentPwd('${escapeHtml(uid)}','${escapeHtml(u.name || uid)}')">${t("admin_reset_pwd")}</button>`
      : "-";

    return `<tr>
      <td>${i + 1}</td>
      <td>${escapeHtml(uid)}</td>
      <td>${escapeHtml(u.name || "-")}</td>
      <td>${roleBadge}</td>
      <td>${pwdBadge}</td>
      <td>${resetBtn}</td>
    </tr>`;
  }).join("");
}
