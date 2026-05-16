// ===== State =====
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || null;
let users = JSON.parse(localStorage.getItem("users")) || {};
let hwSubmissions = JSON.parse(localStorage.getItem("hwSubmissions")) || {};

// ===== Navigation =====
function showSection(id) {
  // Block non-supervisors from admin
  if (id === "admin") {
    users = JSON.parse(localStorage.getItem("users")) || {};
    if (!currentUser || users[currentUser.username]?.role !== "supervisor") return;
    // Auto-render current tab
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

document.addEventListener("DOMContentLoaded", () => {
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

  // Init
  if (typeof initStudentAccounts === "function") initStudentAccounts();
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
  document.querySelectorAll(".login-required-box").forEach((box) => {
    box.style.display = currentUser ? "none" : "block";
  });
  document.querySelectorAll(".protected-content").forEach((el) => {
    el.style.display = currentUser ? "block" : "none";
  });

  // Show/hide admin nav
  const adminNav = document.getElementById("navAdminItem");
  users = JSON.parse(localStorage.getItem("users")) || {};
  const isSupervisor = currentUser && users[currentUser.username]?.role === "supervisor";
  if (adminNav) {
    adminNav.style.display = isSupervisor ? "block" : "none";
  }
}

function openLoginModal() {
  document.getElementById("loginModal").classList.add("open");
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
  document.getElementById("changePwdForm").style.display = "none";
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

function doChangePwd() {
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
  if (users[username].password !== oldPwd) {
    errEl.style.display = "block";
    errEl.textContent = t("change_pwd_wrong");
    return;
  }

  users[username].password = newPwd;
  localStorage.setItem("users", JSON.stringify(users));
  closeLoginModal();
  showToast(t("change_pwd_success"), "success");
  // Clear form fields
  document.getElementById("changePwdOld").value = "";
  document.getElementById("changePwdNew").value = "";
  document.getElementById("changePwdConfirm").value = "";
}

function doLogin() {
  const username = document.getElementById("loginUsername").value.trim();
  const password = document.getElementById("loginPassword").value;

  if (!username || !password) return;

  // Reload users in case initStudentAccounts updated them
  users = JSON.parse(localStorage.getItem("users")) || {};

  if (users[username] && users[username].password === password) {
    currentUser = { username, role: users[username].role };
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    closeLoginModal();
    updateAuthUI();
    showToast(t("login_success"), "success");
  } else {
    document.getElementById("loginError").style.display = "block";
    document.getElementById("loginError").textContent = t("login_error");
  }
}

function doRegister() {
  const username = document.getElementById("regUsername").value.trim();
  const password = document.getElementById("regPassword").value;

  if (!username || !password) return;

  if (users[username]) {
    document.getElementById("regError").style.display = "block";
    document.getElementById("regError").textContent = t("register_exists");
    return;
  }

  users[username] = { password, role: "friend" };
  localStorage.setItem("users", JSON.stringify(users));
  showToast(t("register_success"), "success");
  showLoginForm();
  document.getElementById("loginUsername").value = username;
}

function doLogout() {
  currentUser = null;
  localStorage.removeItem("currentUser");
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
    const catDiv = document.createElement("div");
    catDiv.className = "resource-category";
    catDiv.innerHTML = `<h3>${t(cat.category)}</h3>`;

    const list = document.createElement("div");
    list.className = "resource-list";

    cat.items.forEach((item) => {
      const name = currentLang === "zh" ? item.name_zh : item.name_en;
      const desc = currentLang === "zh" ? item.desc_zh : item.desc_en;
      list.innerHTML += `
        <a href="${item.url}" target="_blank" class="resource-item">
          <div class="resource-icon">PDF</div>
          <div class="resource-details">
            <h4>${name}</h4>
            <p>${desc}</p>
          </div>
        </a>`;
    });

    catDiv.appendChild(list);
    container.appendChild(catDiv);
  });
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

function submitQuiz() {
  quizState.submitted = true;

  // Save result for admin
  if (currentUser) {
    const questions = quizData[quizState.course][currentLang] || quizData[quizState.course]["zh"];
    let correct = 0;
    questions.forEach((q, i) => { if (quizState.answers[i] === q.answer) correct++; });
    const pct = Math.round((correct / questions.length) * 100);

    let quizResults = JSON.parse(localStorage.getItem("quizResults")) || [];
    quizResults.push({
      userId: currentUser.username,
      course: quizState.course,
      score: pct,
      correct: correct,
      total: questions.length,
      date: new Date().toISOString(),
    });
    localStorage.setItem("quizResults", JSON.stringify(quizResults));
  }

  renderQuiz();
}

function showQuizResult() {
  const questions = quizData[quizState.course][currentLang] || quizData[quizState.course]["zh"];
  let correct = 0;
  questions.forEach((q, i) => { if (quizState.answers[i] === q.answer) correct++; });
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
  list.innerHTML = hws
    .map((hw) => {
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
  for (let i = 1; i <= 4; i++) {
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
function renderAdminStudents() {
  const tbody = document.getElementById("adminStudentBody");
  const countEl = document.getElementById("adminStudentCount");
  const courseFilter = document.getElementById("adminStudentCourse")?.value || "all";
  if (!tbody) return;

  users = JSON.parse(localStorage.getItem("users")) || {};
  let studentList = [];

  if (courseFilter === "all") {
    // Collect all students from all rosters
    for (const courseKey of Object.keys(studentRoster)) {
      const roster = studentRoster[courseKey];
      for (const s of roster.students) {
        if (!studentList.find((x) => x.id === s.id)) {
          const courseNames = [];
          for (const ck of Object.keys(studentRoster)) {
            if (studentRoster[ck].students.find((st) => st.id === s.id)) {
              courseNames.push(t(`${ck}_title`) || ck);
            }
          }
          studentList.push({ ...s, courseNames });
        }
      }
    }
  } else {
    const roster = studentRoster[courseFilter];
    if (roster) {
      studentList = roster.students.map((s) => ({ ...s, courseNames: [t(`${courseFilter}_title`)] }));
    }
  }

  if (countEl) {
    countEl.textContent = t("admin_total_students").replace("{0}", studentList.length);
  }

  tbody.innerHTML = studentList.map((s, i) => {
    const user = users[s.id];
    const pwdChanged = user && user.password !== s.id;
    const pwdBadge = pwdChanged
      ? `<span class="admin-badge changed">${t("admin_pwd_changed")}</span>`
      : `<span class="admin-badge default">${t("admin_pwd_default")}</span>`;
    return `<tr>
      <td>${i + 1}</td>
      <td>${s.id}</td>
      <td>${s.name}</td>
      <td>${s.courseNames.join(", ")}</td>
      <td>${pwdBadge}</td>
      <td>${pwdChanged ? `<button class="admin-btn" onclick="resetStudentPwd('${s.id}','${s.name}')">${t("admin_reset_pwd")}</button>` : "-"}</td>
    </tr>`;
  }).join("");
}

function resetStudentPwd(studentId, studentName) {
  const msg = t("admin_reset_pwd_confirm").replace("{0}", `${studentName} (${studentId})`);
  if (!confirm(msg)) return;
  users = JSON.parse(localStorage.getItem("users")) || {};
  if (users[studentId]) {
    users[studentId].password = studentId;
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
          <span class="student-info">${sub.userName}</span>
          <span class="file-info">📄 ${sub.filename} &nbsp;·&nbsp; ${new Date(sub.date).toLocaleString(currentLang === "zh" ? "zh-TW" : "en-US")}</span>
          <input type="number" class="grade-input" min="0" max="100" value="${scoreVal}" placeholder="0-100" id="grade-${sub.hwKey}">
          <button class="admin-btn" onclick="gradeHomework('${sub.hwKey}', document.getElementById('grade-${sub.hwKey}').value)">${t("admin_hw_grade_btn")}</button>
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
      <td>${name}</td>
      <td>${r.userId}</td>
      <td><strong>${r.score}%</strong> (${r.correct}/${r.total})</td>
      <td>${new Date(r.date).toLocaleString(currentLang === "zh" ? "zh-TW" : "en-US")}</td>
    </tr>`;
  }).join("");
}

// --- Account Management ---
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
    // Check if default password
    const isStudent = u.role === "student";
    const pwdDefault = isStudent && u.password === uid;
    const pwdBadge = isStudent
      ? (pwdDefault
        ? `<span class="admin-badge default">${t("admin_pwd_default")}</span>`
        : `<span class="admin-badge changed">${t("admin_pwd_changed")}</span>`)
      : "-";
    const resetBtn = isStudent && !pwdDefault
      ? `<button class="admin-btn" onclick="resetStudentPwd('${uid}','${u.name || uid}')">${t("admin_reset_pwd")}</button>`
      : "-";

    return `<tr>
      <td>${i + 1}</td>
      <td>${uid}</td>
      <td>${u.name || "-"}</td>
      <td>${roleBadge}</td>
      <td>${pwdBadge}</td>
      <td>${resetBtn}</td>
    </tr>`;
  }).join("");
}
