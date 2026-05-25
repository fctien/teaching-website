// ===== Student Roster =====
// Each course has a list of students: { id, name }
// Student ID is used as both username and default password.
// To add more courses, just add another key with the same format.

const studentRoster = {
  course1: {
    courseName_zh: "機器視覺原理與應用",
    courseName_en: "Machine Vision Principles & Applications",
    students: [
      { id: "113378004", name: "蔡孟紘" },
      { id: "113378082", name: "徐碩襄" },
      { id: "113378083", name: "朱翊瑄" },
      { id: "114378006", name: "周冠瑋" },
      { id: "114378008", name: "王柏翔" },
      { id: "114378019", name: "鄧雅馨" },
      { id: "114378025", name: "鄭怡仙" },
      { id: "114378028", name: "范辰瑋" },
      { id: "114378033", name: "蘇煒傑" },
      { id: "114378036", name: "廖晨宇" },
      { id: "114378042", name: "李彤" },
      { id: "114378048", name: "吳鎵全" },
      { id: "114378056", name: "莊以謙" },
      { id: "114378058", name: "李亭萱" },
      { id: "114378061", name: "段瑞城" },
      { id: "114378071", name: "蔡佳妤" },
      { id: "114378075", name: "鄭宜諠" },
      { id: "114378079", name: "馮宣穎" },
      { id: "114378084", name: "劉家蓁" },
    ],
  },
  course2: {
    courseName_zh: "人工智慧導論與程式語言",
    courseName_en: "AI Introduction & Programming with Python",
    students: [
      { id: "111360137", name: "許鎧晏" },
      { id: "111370113", name: "林伯安" },
      { id: "111370136", name: "詹濬誌" },
      { id: "111370147", name: "彭志立" },
      { id: "114370201", name: "史舶杋" },
      { id: "114370202", name: "許楷欣" },
      { id: "114370203", name: "湯斯涵" },
      { id: "114370204", name: "柯芸婕" },
      { id: "114370205", name: "簡妤真" },
      { id: "114370206", name: "林辰玲" },
      { id: "114370207", name: "李予暄" },
      { id: "114370208", name: "林宥任" },
      { id: "114370209", name: "吳偵甄" },
      { id: "114370210", name: "謝采均" },
      { id: "114370211", name: "葉家妤" },
      { id: "114370212", name: "廖建宇" },
      { id: "114370213", name: "馮裕翔" },
      { id: "114370214", name: "陳思妤" },
      { id: "114370215", name: "黃宣凱" },
      { id: "114370216", name: "陳竑安" },
      { id: "114370217", name: "吳冠杰" },
      { id: "114370218", name: "林詩雅" },
      { id: "114370219", name: "卓辰" },
      { id: "114370220", name: "陳皓緯" },
      { id: "114370221", name: "涂育騰" },
      { id: "114370222", name: "楊宜哲" },
      { id: "114370223", name: "劉于瑄" },
      { id: "114370224", name: "陳冠睿" },
      { id: "114370225", name: "彭翔" },
      { id: "114370226", name: "巫紫菱" },
      { id: "114370227", name: "瞿天予" },
      { id: "114370228", name: "楊曉麗" },
      { id: "114370229", name: "邱心麗" },
      { id: "114370230", name: "何明峰" },
      { id: "114370231", name: "孫永珮" },
      { id: "114370232", name: "阮德祥" },
      { id: "114370233", name: "黃文瀚" },
      { id: "114370234", name: "賴沛畇" },
      { id: "114370235", name: "陳博楷" },
      { id: "114370236", name: "鄭劦辰" },
      { id: "114370237", name: "蔡丞恩" },
      { id: "114370238", name: "李沅瑾" },
      { id: "114370239", name: "黃定宥" },
      { id: "114370240", name: "劉予晴" },
      { id: "114370241", name: "李博宇" },
      { id: "114370242", name: "宋宜蓁" },
      { id: "114370243", name: "葉宜寬" },
      { id: "114370244", name: "鄭琇文" },
    ],
  },
};

// Supervisor (admin) account — password stored as pre-computed SHA-256 hash
// (actual password is NOT in source code)
const supervisorAccount = {
  username: "fctien",
  passwordHash: "2b49fb3c2a81fdddf32c647c9ae036eeeed39c58e4310b82efdc3e13dbfbcae0",
  role: "supervisor",
  name: "FC Tien",
};

// Initialize student accounts into localStorage
// Only adds students that don't already exist (preserves changed passwords)
// Uses SHA-256 hashing for all passwords
async function initStudentAccounts() {
  let users = JSON.parse(localStorage.getItem("users")) || {};
  let added = 0;
  let needsMigration = false;

  // Check if migration from plaintext to hashed passwords is needed
  // A hashed SHA-256 password is always 64 hex characters
  for (const [uid, u] of Object.entries(users)) {
    if (u.password && u.password.length !== 64) {
      needsMigration = true;
      break;
    }
  }

  // If migrating, re-hash all existing plaintext passwords
  if (needsMigration) {
    for (const [uid, u] of Object.entries(users)) {
      if (u.password && u.password.length !== 64) {
        u.password = await hashPassword(u.password);
      }
    }
  }

  // Ensure supervisor account always exists (uses pre-hashed password)
  if (!users[supervisorAccount.username]) {
    users[supervisorAccount.username] = {
      password: supervisorAccount.passwordHash,
      role: supervisorAccount.role,
      name: supervisorAccount.name,
      courses: ["course1", "course2", "course3", "course4"],
    };
  }

  for (const courseKey of Object.keys(studentRoster)) {
    const roster = studentRoster[courseKey];
    for (const student of roster.students) {
      if (!users[student.id]) {
        users[student.id] = {
          password: await hashPassword(student.id),  // hashed default password
          role: "student",
          name: student.name,
          courses: [courseKey],
          defaultPwd: true,  // flag to track if password is still default
        };
        added++;
      } else {
        // Student exists, just ensure this course is in their list
        if (!users[student.id].courses) {
          users[student.id].courses = [];
        }
        if (!users[student.id].courses.includes(courseKey)) {
          users[student.id].courses.push(courseKey);
        }
        // Update name in case it was missing
        if (!users[student.id].name) {
          users[student.id].name = student.name;
        }
      }
    }
  }

  localStorage.setItem("users", JSON.stringify(users));
  return added;
}
