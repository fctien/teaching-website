const translations = {
  zh: {
    // Nav
    nav_home: "首頁",
    nav_about: "關於我",
    nav_courses: "課程",
    nav_videos: "教學影片",
    nav_resources: "教學資源",
    nav_quiz: "測驗系統",
    nav_homework: "作業系統",
    nav_login: "登入",
    nav_logout: "登出",
    nav_welcome: "歡迎，",

    // Hero
    hero_title: "FC Tien 教授",
    hero_subtitle: "國立臺北科技大學",
    hero_dept: "工業工程與管理系 ｜ 智慧視覺檢測實驗室",
    hero_btn_courses: "瀏覽課程",
    hero_btn_about: "認識我",

    // About
    about_title: "關於我",
    about_desc: "FC Tien 教授任職於國立臺北科技大學工業工程與管理系，主持智慧視覺檢測實驗室（Intelligent Visual Inspection Lab, iVi Lab）。專長領域涵蓋機器視覺、深度學習、人工智慧及異常檢測，致力於將前沿的人工智慧技術應用於工業自動化與品質檢測，培養學生具備跨領域整合能力。",
    about_research: "研究領域",
    about_research_items: "機器視覺與影像處理｜深度學習與異常檢測｜人工智慧應用｜工業自動化與品質檢測",
    about_email: "電子郵件",
    about_office: "辦公室",
    about_office_val: "國立臺北科技大學",

    // Courses
    courses_title: "課程列表",
    course1_title: "機器視覺原理與應用",
    course1_desc: "本課程介紹機器視覺的架構、發展及現狀，並教授基本數位影像處理技術（DIP）。目標包含熟悉 Python + OpenCV + PyQt5、數位影像處理技術、視覺硬體使用（CCD、鏡頭、光源），以及結合深度學習（AI）於機器視覺之應用。強調團隊合作、解決問題及自我學習能力。",
    course1_topics: "Python + OpenCV + PyQt5 實作,數位影像處理（DIP）基礎,影像分割與直方圖分析,空間濾波與頻率域分析,邊緣偵測與形態學運算,機器視覺硬體（CCD、鏡頭、光源）,深度學習於視覺應用（YOLO）,PBL 專題實作與競賽",
    course2_title: "人工智慧導論與程式語言",
    course2_desc: "本課程訓練學生撰寫程式之能力，以 Python 為主體，著重於語言基礎及應用 LLM 協助程式設計。課程涵蓋 AI 基礎概念、Prompt Engineering、GPT 輔助程式撰寫，以及 Problem-Based 實作專題，培養學生運用 AI 工具解決問題的能力。",
    course2_topics: "Python 基礎語法與資料型態,流程控制與函式設計,模組、套件與 OOP,AI 與 LLM 應用（ChatGPT、Copilot）,Prompt Engineering 技巧,NumPy、Matplotlib、Pandas,OpenCV 影像處理入門,FastAPI 網頁設計",
    course3_title: "進階類神經網路與應用",
    course3_desc: "本課程探索深度神經網路的基礎理論與應用，使用 PyTorch 框架學習建構、訓練及預測深度學習網路，重點於影像相關應用。涵蓋分類器（CNN）、物件偵測（YOLO）、語意分割（UNet）、異常檢測（EfficientAD）及生成對抗網路（GAN）等主題。",
    course3_topics: "PyTorch 基礎與 nn.Module,CNN 分類器（ResNet、DenseNet、EfficientNet）,物件偵測 OD（YOLO、RTMDet）,語意分割（AutoEncoder、UNet）,異常檢測 AD（EfficientAD、PatchCore）,Transformer 與 ViT,GAN 生成對抗網路,CAM Heatmap 視覺化",
    course4_title: "AI Agent",
    course4_desc: "探索人工智慧代理人的核心概念與應用，學習如何建構能夠自主決策、規劃與執行任務的 AI Agent 系統，涵蓋 LLM、Prompt Engineering、工具使用與多代理人協作等主題。",
    course4_topics: "AI Agent 基礎概念,大型語言模型 (LLM) 應用,Prompt Engineering,工具使用與函式呼叫,多代理人系統與協作",
    course5_title: "AI 時代的企業決策與智慧製造：從機器視覺到生成式 AI",
    course5_desc: "本課程從 EMBA 管理者視角出發，探討 AI 如何影響企業營運、智慧製造、產業競爭與管理決策。結合 Machine Vision、AOI、Generative AI、AI Agent 與 AI War 等主題，建立面向未來的 AI 決策思維。涵蓋技術理解、企業應用與產業戰略三大主軸。",
    course5_topics: "AI / ML / DL 基礎概念,機器視覺與 AOI 檢測技術,生成式 AI 企業應用,AI Agent 與自動化流程,智慧製造與品質管理,AI War 與全球競爭態勢,台灣 AI 產業定位與半導體,Case Study：企業 AI 導入決策",
    course_topics_label: "課程主題",
    course_syllabus: "課程大綱",
    course_materials: "教材下載",

    // Videos
    videos_title: "教學影片",
    videos_desc: "觀看我的 YouTube 頻道上的教學影片，涵蓋課程內容與實作示範。",
    videos_btn: "前往 YouTube 頻道",
    videos_latest: "最新影片",
    videos_loading: "載入影片中...",
    videos_channel_btn: "訂閱頻道",

    // Resources
    resources_title: "教學資源",
    resources_desc: "以下為課程相關的 PDF 講義與教材，存放於 Google Drive，點擊即可檢視或下載。",
    resources_login_required: "請先登入以存取教學資源",
    res_cat_vision: "機器視覺",
    res_cat_ai: "人工智慧",
    res_cat_dl: "深度學習",
    res_cat_agent: "AI Agent",

    // Quiz
    quiz_title: "測驗系統",
    quiz_desc: "選擇課程進行線上測驗，測試您的學習成果。",
    quiz_login_required: "請先登入以進行測驗",
    quiz_select_course: "選擇課程",
    quiz_start: "開始測驗",
    quiz_submit: "提交答案",
    quiz_next: "下一題",
    quiz_prev: "上一題",
    quiz_result: "測驗結果",
    quiz_score: "您的分數",
    quiz_correct: "答對",
    quiz_wrong: "答錯",
    quiz_retry: "重新測驗",
    quiz_q_of: "第 {0} 題，共 {1} 題",

    // Homework
    hw_title: "作業系統",
    hw_desc: "查看作業內容、繳交期限，並上傳您的作業。",
    hw_login_required: "請先登入以查看作業",
    hw_course_select: "選擇課程",
    hw_no_hw: "目前沒有作業",
    hw_due: "繳交期限",
    hw_status: "狀態",
    hw_status_pending: "未繳交",
    hw_status_submitted: "已繳交",
    hw_status_graded: "已評分",
    hw_status_late: "逾期",
    hw_upload: "上傳作業",
    hw_upload_btn: "選擇檔案",
    hw_submit_btn: "繳交作業",
    hw_description: "作業說明",
    hw_score: "成績",

    // Login
    login_title: "登入",
    login_username: "帳號（學號）",
    login_password: "密碼",
    login_btn: "登入",
    login_role_student: "學生",
    login_role_friend: "訪客",
    login_register: "訪客註冊",
    login_error: "帳號或密碼錯誤",
    login_success: "登入成功！",
    login_default_pwd: "預設密碼為您的學號",
    register_title: "訪客註冊",
    register_btn: "註冊",
    register_success: "註冊成功，請登入！",
    register_exists: "此帳號已存在",
    change_pwd_title: "變更密碼",
    change_pwd_old: "舊密碼",
    change_pwd_new: "新密碼",
    change_pwd_confirm: "確認新密碼",
    change_pwd_btn: "變更密碼",
    change_pwd_success: "密碼變更成功！",
    change_pwd_mismatch: "新密碼不一致",
    change_pwd_wrong: "舊密碼錯誤",
    change_pwd_link: "變更密碼",

    // Admin
    nav_admin: "管理後台",
    admin_title: "管理後台",
    admin_tab_students: "學生名冊",
    admin_tab_homework: "作業批改",
    admin_tab_quiz: "測驗成績",
    admin_tab_accounts: "帳號管理",
    admin_select_course: "選擇課程",
    admin_student_id: "學號",
    admin_student_name: "姓名",
    admin_student_role: "角色",
    admin_student_pwd_status: "密碼狀態",
    admin_pwd_default: "預設",
    admin_pwd_changed: "已變更",
    admin_total_students: "共 {0} 位學生",
    admin_hw_title: "作業名稱",
    admin_hw_student: "學生",
    admin_hw_file: "繳交檔案",
    admin_hw_date: "繳交時間",
    admin_hw_score: "評分",
    admin_hw_grade_btn: "送出評分",
    admin_hw_no_submissions: "目前沒有繳交紀錄",
    admin_hw_graded_success: "評分成功！",
    admin_quiz_student: "學生",
    admin_quiz_score: "分數",
    admin_quiz_date: "測驗時間",
    admin_quiz_no_results: "目前沒有測驗紀錄",
    admin_reset_pwd: "重設密碼",
    admin_reset_pwd_confirm: "確定要將 {0} 的密碼重設為學號嗎？",
    admin_reset_pwd_success: "密碼已重設！",
    admin_all_courses: "全部課程",

    // Footer
    footer_text: "© 2026 FC Tien 教授 ｜ 國立臺北科技大學 工業工程與管理系 ｜ 智慧視覺檢測實驗室",
    footer_contact: "聯絡資訊",
    footer_links: "快速連結",
  },

  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_courses: "Courses",
    nav_videos: "Videos",
    nav_resources: "Resources",
    nav_quiz: "Quiz",
    nav_homework: "Homework",
    nav_login: "Login",
    nav_logout: "Logout",
    nav_welcome: "Welcome, ",

    hero_title: "Prof. FC Tien",
    hero_subtitle: "National Taipei University of Technology",
    hero_dept: "Dept. of Industrial Engineering & Management | iVi Lab",
    hero_btn_courses: "Browse Courses",
    hero_btn_about: "About Me",

    about_title: "About Me",
    about_desc: "Prof. FC Tien is a faculty member at the Department of Industrial Engineering and Management, National Taipei University of Technology (Taipei Tech), and leads the Intelligent Visual Inspection Lab (iVi Lab). His research interests include machine vision, deep learning, artificial intelligence, and anomaly detection. He is dedicated to applying cutting-edge AI technologies to industrial automation and quality inspection.",
    about_research: "Research Areas",
    about_research_items: "Machine Vision & Image Processing | Deep Learning & Anomaly Detection | Artificial Intelligence Applications | Industrial Automation & Quality Inspection",
    about_email: "Email",
    about_office: "Office",
    about_office_val: "National Taipei University of Technology",

    courses_title: "Courses",
    course1_title: "Machine Vision Principles & Applications",
    course1_desc: "This course introduces the architecture, development and applications of machine vision, along with Digital Image Processing (DIP) techniques. Topics include Python + OpenCV + PyQt5 development, vision hardware (CCD, lenses, lighting), and integrating deep learning (AI) into machine vision applications. Emphasizes teamwork, problem-solving, and self-directed learning.",
    course1_topics: "Python + OpenCV + PyQt5 Development,Digital Image Processing (DIP) Fundamentals,Segmentation & Histogram Analysis,Spatial Filtering & Frequency Domain,Edge Detection & Morphology,Vision Hardware (CCD, Lenses, Lighting),Deep Learning for Vision (YOLO),PBL Projects & Competition",
    course2_title: "AI Introduction & Programming with Python",
    course2_desc: "This course trains students in programming using Python, focusing on language fundamentals and leveraging LLMs for coding assistance. Covers AI concepts, Prompt Engineering, GPT-assisted programming, and Problem-Based projects to develop skills in using AI tools for problem solving.",
    course2_topics: "Python Syntax & Data Types,Control Flow & Functions,Modules, Packages & OOP,AI & LLM Applications (ChatGPT, Copilot),Prompt Engineering Techniques,NumPy, Matplotlib, Pandas,OpenCV Image Processing Basics,FastAPI Web Development",
    course3_title: "Advanced Neural Networks & Applications",
    course3_desc: "This course explores the theoretical basis and applications of Deep Neural Networks using PyTorch. Students learn to build, train, and evaluate deep learning networks with focus on image applications. Covers classifiers (CNN), object detection (YOLO), semantic segmentation (UNet), anomaly detection (EfficientAD), and GANs.",
    course3_topics: "PyTorch Basics & nn.Module,CNN Classifiers (ResNet, DenseNet, EfficientNet),Object Detection (YOLO, RTMDet),Semantic Segmentation (AutoEncoder, UNet),Anomaly Detection (EfficientAD, PatchCore),Transformer & ViT,GAN (Generative Adversarial Networks),CAM Heatmap Visualization",
    course4_title: "AI Agent",
    course4_desc: "Explore the core concepts and applications of AI Agents. Learn to build autonomous systems capable of decision-making, planning, and task execution, covering LLMs, Prompt Engineering, tool use, and multi-agent collaboration.",
    course4_topics: "AI Agent Fundamentals,Large Language Model (LLM) Applications,Prompt Engineering,Tool Use & Function Calling,Multi-Agent Systems & Collaboration",
    course5_title: "AI-Driven Business Decisions & Smart Manufacturing: From Machine Vision to Generative AI",
    course5_desc: "This EMBA course examines how AI impacts business operations, smart manufacturing, industry competition, and management decisions. Covering Machine Vision, AOI, Generative AI, AI Agent, and the AI War, it builds future-oriented AI decision-making frameworks for executives across three pillars: technical understanding, enterprise applications, and industry strategy.",
    course5_topics: "AI / ML / DL Fundamentals,Machine Vision & AOI Inspection,Generative AI for Business,AI Agent & Process Automation,Smart Manufacturing & Quality Management,AI War & Global Competition,Taiwan's AI Industry & Semiconductor Position,Case Study: Enterprise AI Adoption Decisions",
    course_topics_label: "Topics",
    course_syllabus: "Syllabus",
    course_materials: "Materials",

    videos_title: "Teaching Videos",
    videos_desc: "Watch teaching videos on my YouTube channel covering course content and practical demonstrations.",
    videos_btn: "Visit YouTube Channel",
    videos_latest: "Latest Videos",
    videos_loading: "Loading videos...",
    videos_channel_btn: "Subscribe",

    resources_title: "Teaching Resources",
    resources_desc: "Course-related PDF materials stored on Google Drive. Click to view or download.",
    resources_login_required: "Please login to access resources",
    res_cat_vision: "Machine Vision",
    res_cat_ai: "Artificial Intelligence",
    res_cat_dl: "Deep Learning",
    res_cat_agent: "AI Agent",

    quiz_title: "Quiz System",
    quiz_desc: "Select a course and take an online quiz to test your knowledge.",
    quiz_login_required: "Please login to take quizzes",
    quiz_select_course: "Select Course",
    quiz_start: "Start Quiz",
    quiz_submit: "Submit",
    quiz_next: "Next",
    quiz_prev: "Previous",
    quiz_result: "Quiz Result",
    quiz_score: "Your Score",
    quiz_correct: "Correct",
    quiz_wrong: "Wrong",
    quiz_retry: "Retry",
    quiz_q_of: "Question {0} of {1}",

    hw_title: "Homework System",
    hw_desc: "View assignments, deadlines, and submit your homework.",
    hw_login_required: "Please login to view homework",
    hw_course_select: "Select Course",
    hw_no_hw: "No assignments available",
    hw_due: "Due Date",
    hw_status: "Status",
    hw_status_pending: "Pending",
    hw_status_submitted: "Submitted",
    hw_status_graded: "Graded",
    hw_status_late: "Late",
    hw_upload: "Upload Homework",
    hw_upload_btn: "Choose File",
    hw_submit_btn: "Submit",
    hw_description: "Description",
    hw_score: "Score",

    login_title: "Login",
    login_username: "Student ID",
    login_password: "Password",
    login_btn: "Login",
    login_role_student: "Student",
    login_role_friend: "Visitor",
    login_register: "Visitor Register",
    login_error: "Invalid username or password",
    login_success: "Login successful!",
    login_default_pwd: "Default password is your Student ID",
    register_title: "Visitor Register",
    register_btn: "Register",
    register_success: "Registration successful! Please login.",
    register_exists: "Username already exists",
    change_pwd_title: "Change Password",
    change_pwd_old: "Current Password",
    change_pwd_new: "New Password",
    change_pwd_confirm: "Confirm New Password",
    change_pwd_btn: "Change Password",
    change_pwd_success: "Password changed successfully!",
    change_pwd_mismatch: "New passwords do not match",
    change_pwd_wrong: "Current password is incorrect",
    change_pwd_link: "Change Password",

    // Admin
    nav_admin: "Admin",
    admin_title: "Admin Panel",
    admin_tab_students: "Students",
    admin_tab_homework: "Homework Grading",
    admin_tab_quiz: "Quiz Results",
    admin_tab_accounts: "Accounts",
    admin_select_course: "Select Course",
    admin_student_id: "Student ID",
    admin_student_name: "Name",
    admin_student_role: "Role",
    admin_student_pwd_status: "Password",
    admin_pwd_default: "Default",
    admin_pwd_changed: "Changed",
    admin_total_students: "{0} students",
    admin_hw_title: "Assignment",
    admin_hw_student: "Student",
    admin_hw_file: "Submitted File",
    admin_hw_date: "Submit Date",
    admin_hw_score: "Score",
    admin_hw_grade_btn: "Submit Grade",
    admin_hw_no_submissions: "No submissions yet",
    admin_hw_graded_success: "Graded successfully!",
    admin_quiz_student: "Student",
    admin_quiz_score: "Score",
    admin_quiz_date: "Date",
    admin_quiz_no_results: "No quiz results yet",
    admin_reset_pwd: "Reset Password",
    admin_reset_pwd_confirm: "Reset password for {0} to their Student ID?",
    admin_reset_pwd_success: "Password has been reset!",
    admin_all_courses: "All Courses",

    footer_text: "© 2026 Prof. FC Tien | NTUT Dept. of IE&M | iVi Lab",
    footer_contact: "Contact",
    footer_links: "Quick Links",
  },
};

let currentLang = localStorage.getItem("lang") || "zh";

function t(key) {
  return translations[currentLang][key] || translations["zh"][key] || key;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang === "zh" ? "zh-TW" : "en";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.placeholder = t(key);
    } else {
      el.textContent = t(key);
    }
  });
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    el.innerHTML = t(key);
  });
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.textContent = lang === "zh" ? "EN" : "中文";
  }
  if (typeof onLanguageChange === "function") {
    onLanguageChange(lang);
  }
}

function toggleLang() {
  setLang(currentLang === "zh" ? "en" : "zh");
}
