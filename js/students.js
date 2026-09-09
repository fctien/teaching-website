// ===== Student Roster (loaded from encrypted file) =====
// Students are managed via tools/encrypt-roster.js
// Source: data/students.xlsx → data/roster.enc (AES-256-CBC encrypted)

let studentRoster = {};

async function decryptRoster(base64Payload) {
  const raw = Uint8Array.from(atob(base64Payload), (c) => c.charCodeAt(0));
  const iv = raw.slice(0, 16);
  const ciphertext = raw.slice(16);

  const passphrase = "teaching_roster_key_2026";
  const enc = new TextEncoder();
  const keyMaterial = await crypto.subtle.importKey(
    "raw", enc.encode(passphrase), "PBKDF2", false, ["deriveKey"]
  );
  const key = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt: enc.encode("roster_salt"), iterations: 100000, hash: "SHA-256" },
    keyMaterial, { name: "AES-CBC", length: 256 }, false, ["decrypt"]
  );
  const decrypted = await crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, ciphertext);
  return new Uint8Array(decrypted);
}

async function loadStudentRoster() {
  try {
    const res = await fetch("data/roster.enc?v=20260816");
    const payload = await res.text();
    const xlsxData = await decryptRoster(payload);
    const wb = XLSX.read(xlsxData, { type: "array" });
    const ws = wb.Sheets[wb.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(ws);

    studentRoster = {};
    for (const row of rows) {
      const course = String(row["課程 (Course)"] || "").trim();
      const id = String(row["學號 (Student No)"] || "").trim();
      const name = String(row["姓名 (Name)"] || "").trim();
      const nickname = String(row["暱稱 (Nickname)"] || "").trim();
      const password = String(row["密碼 (Password)"] || id).trim();
      if (!course || !id) continue;

      if (!studentRoster[course]) {
        studentRoster[course] = { students: [] };
      }
      studentRoster[course].students.push({ id, name, nickname, password });
    }
    return true;
  } catch (err) {
    console.warn("Failed to load roster, using empty roster:", err);
    studentRoster = {};
    return false;
  }
}

// Supervisor (admin) account — password stored as pre-computed SHA-256 hash
const supervisorAccount = {
  username: "fctien",
  passwordHash: "2b49fb3c2a81fdddf32c647c9ae036eeeed39c58e4310b82efdc3e13dbfbcae0",
  role: "supervisor",
  name: "FC Tien",
};

// Initialize student accounts into localStorage
async function initStudentAccounts() {
  await loadStudentRoster();

  let users = JSON.parse(localStorage.getItem("users")) || {};
  let added = 0;
  let needsMigration = false;

  for (const [uid, u] of Object.entries(users)) {
    if (u.password && u.password.length !== 64) {
      needsMigration = true;
      break;
    }
  }

  if (needsMigration) {
    for (const [uid, u] of Object.entries(users)) {
      if (u.password && u.password.length !== 64) {
        u.password = await hashPassword(u.password);
      }
    }
  }

  // Ensure supervisor account always exists
  if (!users[supervisorAccount.username]) {
    users[supervisorAccount.username] = {
      password: supervisorAccount.passwordHash,
      role: supervisorAccount.role,
      name: supervisorAccount.name,
      courses: ["course1", "course2", "course3", "course4", "course5", "course6"],
    };
  }

  for (const courseKey of Object.keys(studentRoster)) {
    const roster = studentRoster[courseKey];
    for (const student of roster.students) {
      const displayName = student.nickname || student.name;
      const pwd = student.password || student.id;
      if (!users[student.id]) {
        users[student.id] = {
          password: await hashPassword(pwd),
          role: "student",
          name: displayName,
          courses: [courseKey],
          defaultPwd: pwd === student.id,
        };
        added++;
      } else {
        if (!users[student.id].courses) {
          users[student.id].courses = [];
        }
        if (!users[student.id].courses.includes(courseKey)) {
          users[student.id].courses.push(courseKey);
        }
        if (student.nickname && student.nickname !== users[student.id].name) {
          users[student.id].name = displayName;
        }
      }
    }
  }

  localStorage.setItem("users", JSON.stringify(users));
  return added;
}
