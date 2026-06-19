// ===== Student Roster (loaded from Excel) =====
// Students are managed in data/students.xlsx
// Columns: 課程 (Course) | 學號 (Student No) | 姓名 (Name) | 暱稱 (Nickname) | 密碼 (Password)

let studentRoster = {};

async function loadStudentRoster() {
  try {
    const res = await fetch("data/students.xlsx");
    const buf = await res.arrayBuffer();
    const wb = XLSX.read(buf, { type: "array" });
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
    console.warn("Failed to load students.xlsx, using empty roster:", err);
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
      courses: ["course1", "course2", "course3", "course4", "course5"],
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
