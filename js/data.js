const quizData = {
  course1: {
    zh: [
      {
        q: "下列何者不是機器視覺系統的基本組成元件？",
        options: ["攝影機", "光源", "影像處理軟體", "區塊鏈模組"],
        answer: 3,
      },
      {
        q: "邊緣偵測中，Canny 演算法的主要優勢是什麼？",
        options: ["計算速度最快", "能有效抑制雜訊並精確定位邊緣", "不需要設定閾值", "只適用於彩色影像"],
        answer: 1,
      },
      {
        q: "在影像處理中，高斯濾波器主要用於？",
        options: ["銳化影像", "平滑影像（去除雜訊）", "偵測邊緣", "色彩轉換"],
        answer: 1,
      },
      {
        q: "SIFT 特徵描述子具有下列哪些不變性？",
        options: ["僅旋轉不變性", "僅尺度不變性", "尺度與旋轉不變性", "僅平移不變性"],
        answer: 2,
      },
      {
        q: "二值化 (Binarization) 處理的目的是？",
        options: ["將彩色影像轉為灰階", "將灰階影像轉為僅黑白兩色", "增加影像的對比度", "壓縮影像檔案大小"],
        answer: 1,
      },
    ],
    en: [
      {
        q: "Which is NOT a basic component of a machine vision system?",
        options: ["Camera", "Lighting", "Image processing software", "Blockchain module"],
        answer: 3,
      },
      {
        q: "What is the main advantage of the Canny edge detection algorithm?",
        options: ["Fastest computation", "Effective noise suppression with precise edge localization", "No threshold required", "Only works with color images"],
        answer: 1,
      },
      {
        q: "In image processing, Gaussian filter is mainly used for?",
        options: ["Sharpening images", "Smoothing images (noise removal)", "Edge detection", "Color conversion"],
        answer: 1,
      },
      {
        q: "SIFT feature descriptor has which invariance properties?",
        options: ["Rotation only", "Scale only", "Scale and rotation", "Translation only"],
        answer: 2,
      },
      {
        q: "What is the purpose of binarization?",
        options: ["Convert color to grayscale", "Convert grayscale to black and white", "Increase contrast", "Compress file size"],
        answer: 1,
      },
    ],
  },
  course2: {
    zh: [
      {
        q: "Python 中哪個關鍵字用於定義函式？",
        options: ["function", "def", "func", "define"],
        answer: 1,
      },
      {
        q: "下列哪個是 Python 的可變 (mutable) 資料型態？",
        options: ["tuple", "str", "list", "int"],
        answer: 2,
      },
      {
        q: "監督式學習 (Supervised Learning) 需要什麼？",
        options: ["僅需輸入資料", "需要標註過的訓練資料", "不需要任何資料", "僅需輸出結果"],
        answer: 1,
      },
      {
        q: "K-Means 演算法屬於哪種學習類型？",
        options: ["監督式學習", "非監督式學習", "強化學習", "半監督式學習"],
        answer: 1,
      },
      {
        q: "NumPy 主要用於什麼用途？",
        options: ["網頁開發", "數值運算與陣列操作", "資料庫管理", "遊戲開發"],
        answer: 1,
      },
    ],
    en: [
      {
        q: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],
        answer: 1,
      },
      {
        q: "Which is a mutable data type in Python?",
        options: ["tuple", "str", "list", "int"],
        answer: 2,
      },
      {
        q: "What does Supervised Learning require?",
        options: ["Only input data", "Labeled training data", "No data at all", "Only output results"],
        answer: 1,
      },
      {
        q: "K-Means algorithm belongs to which type of learning?",
        options: ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"],
        answer: 1,
      },
      {
        q: "What is NumPy mainly used for?",
        options: ["Web development", "Numerical computing and array operations", "Database management", "Game development"],
        answer: 1,
      },
    ],
  },
  course3: {
    zh: [
      {
        q: "PyTorch 中，自動微分的核心模組是？",
        options: ["torch.nn", "torch.autograd", "torch.optim", "torch.utils"],
        answer: 1,
      },
      {
        q: "CNN 中池化層 (Pooling Layer) 的主要功能是？",
        options: ["增加參數量", "降低特徵圖的空間維度", "增加非線性", "正規化輸出"],
        answer: 1,
      },
      {
        q: "在 PyTorch 中建立神經網路模型通常繼承哪個類別？",
        options: ["torch.Tensor", "torch.nn.Module", "torch.optim.Optimizer", "torch.Dataset"],
        answer: 1,
      },
      {
        q: "Transformer 架構的核心機制是？",
        options: ["卷積運算", "循環連接", "自注意力機制 (Self-Attention)", "池化操作"],
        answer: 2,
      },
      {
        q: "GAN 由哪兩個網路組成？",
        options: ["編碼器與解碼器", "生成器與判別器", "特徵提取器與分類器", "前向網路與反向網路"],
        answer: 1,
      },
    ],
    en: [
      {
        q: "What is the core module for automatic differentiation in PyTorch?",
        options: ["torch.nn", "torch.autograd", "torch.optim", "torch.utils"],
        answer: 1,
      },
      {
        q: "What is the main function of a Pooling Layer in CNN?",
        options: ["Increase parameters", "Reduce spatial dimensions of feature maps", "Add non-linearity", "Normalize output"],
        answer: 1,
      },
      {
        q: "In PyTorch, neural network models typically inherit from?",
        options: ["torch.Tensor", "torch.nn.Module", "torch.optim.Optimizer", "torch.Dataset"],
        answer: 1,
      },
      {
        q: "What is the core mechanism of the Transformer architecture?",
        options: ["Convolution", "Recurrent connections", "Self-Attention", "Pooling"],
        answer: 2,
      },
      {
        q: "GAN consists of which two networks?",
        options: ["Encoder & Decoder", "Generator & Discriminator", "Feature Extractor & Classifier", "Forward & Backward Networks"],
        answer: 1,
      },
    ],
  },
  course4: {
    zh: [
      {
        q: "AI Agent 與傳統 AI 系統的主要區別是什麼？",
        options: ["運算速度更快", "具備自主決策與規劃能力", "使用更多資料", "僅能處理文字"],
        answer: 1,
      },
      {
        q: "下列何者是 LLM（大型語言模型）的典型代表？",
        options: ["ResNet", "GPT / Claude", "YOLO", "K-Means"],
        answer: 1,
      },
      {
        q: "Prompt Engineering 的主要目的是？",
        options: ["訓練模型權重", "透過設計提示詞引導模型產生更好的輸出", "壓縮模型大小", "加速推論速度"],
        answer: 1,
      },
      {
        q: "在 AI Agent 中，「Tool Use」指的是？",
        options: ["安裝開發工具", "Agent 呼叫外部工具或 API 來完成任務", "訓練資料的前處理", "模型的超參數調整"],
        answer: 1,
      },
      {
        q: "Multi-Agent 系統的優勢是什麼？",
        options: ["減少模型參數量", "多個 Agent 分工協作，處理更複雜的任務", "降低硬體需求", "僅適用於影像處理"],
        answer: 1,
      },
    ],
    en: [
      {
        q: "What is the main difference between AI Agent and traditional AI systems?",
        options: ["Faster computation", "Autonomous decision-making and planning", "Uses more data", "Text-only processing"],
        answer: 1,
      },
      {
        q: "Which is a typical example of LLM (Large Language Model)?",
        options: ["ResNet", "GPT / Claude", "YOLO", "K-Means"],
        answer: 1,
      },
      {
        q: "What is the main purpose of Prompt Engineering?",
        options: ["Training model weights", "Designing prompts to guide better model outputs", "Compressing model size", "Speeding up inference"],
        answer: 1,
      },
      {
        q: "In AI Agent, what does 'Tool Use' refer to?",
        options: ["Installing dev tools", "Agent calling external tools or APIs to complete tasks", "Data preprocessing", "Hyperparameter tuning"],
        answer: 1,
      },
      {
        q: "What is the advantage of Multi-Agent systems?",
        options: ["Fewer model parameters", "Multiple agents collaborate to handle complex tasks", "Lower hardware requirements", "Only for image processing"],
        answer: 1,
      },
    ],
  },
  course5: {
    zh: [
      {
        q: "AI War 中，台灣在全球 AI 產業鏈中主要扮演什麼角色？",
        options: ["AI 軟體創新者", "AI 硬體提供者（半導體）", "AI 資料供應商", "AI 終端消費市場"],
        answer: 1,
      },
      {
        q: "AOI（自動光學檢測）在智慧製造中的主要用途是？",
        options: ["產品包裝設計", "生產線品質檢測與瑕疵辨識", "員工績效評估", "財務報表分析"],
        answer: 1,
      },
      {
        q: "生成式 AI（如 ChatGPT）對企業管理最大的影響是？",
        options: ["取代所有人力", "提升決策效率與內容產出能力", "僅適用於科技業", "降低企業營收"],
        answer: 1,
      },
      {
        q: "下列何者最能描述台灣 2025 年經濟成長的主要驅動力？",
        options: ["觀光旅遊業", "農業出口", "AI 與半導體產業", "房地產市場"],
        answer: 2,
      },
      {
        q: "管理者導入 AI 時，最重要的決策考量是什麼？",
        options: ["追求最新技術", "評估投資報酬率與風險", "完全取代人力", "僅關注成本節省"],
        answer: 1,
      },
    ],
    en: [
      {
        q: "In the AI War, what role does Taiwan primarily play in the global AI supply chain?",
        options: ["AI software innovator", "AI hardware provider (semiconductors)", "AI data supplier", "AI end-consumer market"],
        answer: 1,
      },
      {
        q: "What is the main purpose of AOI (Automated Optical Inspection) in smart manufacturing?",
        options: ["Product packaging design", "Production line quality inspection & defect detection", "Employee performance evaluation", "Financial report analysis"],
        answer: 1,
      },
      {
        q: "What is the biggest impact of Generative AI (e.g., ChatGPT) on business management?",
        options: ["Replacing all human labor", "Improving decision efficiency and content generation", "Only applicable to tech industry", "Reducing company revenue"],
        answer: 1,
      },
      {
        q: "Which best describes the main driver of Taiwan's 2025 economic growth?",
        options: ["Tourism industry", "Agricultural exports", "AI and semiconductor industry", "Real estate market"],
        answer: 2,
      },
      {
        q: "What is the most important consideration when managers adopt AI?",
        options: ["Pursuing the latest technology", "Evaluating ROI and risk", "Completely replacing human workers", "Focusing only on cost savings"],
        answer: 1,
      },
    ],
  },
};

const homeworkData = {
  course1: {
    zh: [
      {
        id: "hw1-1",
        title: "作業一：影像前處理實作",
        desc: "使用 OpenCV 對提供的工業影像進行灰階轉換、高斯模糊、邊緣偵測等前處理操作，並比較不同參數的處理效果。繳交程式碼與結果報告。",
        due: "2026-06-01",
      },
      {
        id: "hw1-2",
        title: "作業二：特徵匹配應用",
        desc: "實作 SIFT/ORB 特徵匹配，對兩張不同角度的物件影像進行特徵提取與配對，分析匹配準確度。",
        due: "2026-06-15",
      },
      {
        id: "hw1-3",
        title: "作業三：物件偵測專題",
        desc: "使用 YOLO 或其他物件偵測模型，建立一個工業零件偵測系統，要求能辨識至少 3 種不同零件。",
        due: "2026-06-30",
      },
    ],
    en: [
      {
        id: "hw1-1",
        title: "HW1: Image Preprocessing",
        desc: "Use OpenCV to perform grayscale conversion, Gaussian blur, edge detection on provided industrial images. Compare results with different parameters. Submit code and report.",
        due: "2026-06-01",
      },
      {
        id: "hw1-2",
        title: "HW2: Feature Matching",
        desc: "Implement SIFT/ORB feature matching on object images from different angles. Analyze matching accuracy.",
        due: "2026-06-15",
      },
      {
        id: "hw1-3",
        title: "HW3: Object Detection Project",
        desc: "Build an industrial part detection system using YOLO or other models. Must detect at least 3 types of parts.",
        due: "2026-06-30",
      },
    ],
  },
  course2: {
    zh: [
      {
        id: "hw2-1",
        title: "作業一：Python 資料分析",
        desc: "使用 Pandas 與 Matplotlib 對提供的資料集進行資料清理、統計分析與視覺化，撰寫分析報告。",
        due: "2026-06-05",
      },
      {
        id: "hw2-2",
        title: "作業二：機器學習分類實作",
        desc: "使用 scikit-learn 實作至少三種分類演算法（如 SVM、Random Forest、KNN），比較在指定資料集上的表現。",
        due: "2026-06-20",
      },
    ],
    en: [
      {
        id: "hw2-1",
        title: "HW1: Python Data Analysis",
        desc: "Use Pandas and Matplotlib for data cleaning, statistical analysis and visualization. Write an analysis report.",
        due: "2026-06-05",
      },
      {
        id: "hw2-2",
        title: "HW2: ML Classification",
        desc: "Implement at least 3 classification algorithms (SVM, Random Forest, KNN) using scikit-learn. Compare performance on the given dataset.",
        due: "2026-06-20",
      },
    ],
  },
  course3: {
    zh: [
      {
        id: "hw3-1",
        title: "作業一：CNN 影像分類",
        desc: "使用 PyTorch 建構 CNN 模型，在 CIFAR-10 資料集上進行影像分類，目標準確率達 85% 以上。",
        due: "2026-06-10",
      },
      {
        id: "hw3-2",
        title: "作業二：Transformer 文字分類",
        desc: "實作 Transformer 模型進行文字情感分類，比較與 LSTM 模型的效能差異。",
        due: "2026-06-25",
      },
    ],
    en: [
      {
        id: "hw3-1",
        title: "HW1: CNN Image Classification",
        desc: "Build a CNN model with PyTorch for CIFAR-10 classification. Target accuracy: 85%+.",
        due: "2026-06-10",
      },
      {
        id: "hw3-2",
        title: "HW2: Transformer Text Classification",
        desc: "Implement Transformer model for sentiment classification. Compare with LSTM performance.",
        due: "2026-06-25",
      },
    ],
  },
  course4: {
    zh: [
      {
        id: "hw4-1",
        title: "作業一：Prompt Engineering 實作",
        desc: "使用 ChatGPT 或 Claude API，設計不同的 Prompt 策略（Zero-shot、Few-shot、Chain-of-Thought），比較同一任務在不同 Prompt 下的輸出差異，撰寫分析報告。",
        due: "2026-06-12",
      },
      {
        id: "hw4-2",
        title: "作業二：AI Agent 應用開發",
        desc: "使用 LangChain 或 Claude Agent SDK 建構一個具備工具使用能力的 AI Agent，需能呼叫至少 2 個外部工具完成指定任務。",
        due: "2026-06-28",
      },
    ],
    en: [
      {
        id: "hw4-1",
        title: "HW1: Prompt Engineering Practice",
        desc: "Use ChatGPT or Claude API to design different prompt strategies (Zero-shot, Few-shot, Chain-of-Thought). Compare outputs for the same task under different prompts. Submit analysis report.",
        due: "2026-06-12",
      },
      {
        id: "hw4-2",
        title: "HW2: AI Agent Application",
        desc: "Build an AI Agent with tool-use capabilities using LangChain or Claude Agent SDK. Must call at least 2 external tools to complete assigned tasks.",
        due: "2026-06-28",
      },
    ],
  },
  course5: {
    zh: [
      {
        id: "hw5-1",
        title: "作業一：爭鮮案例分析",
        desc: "分析壽司店現況與痛點，比較視覺監控、條碼、RFID、顏色管理等方案，提出可落地的改善方法，包含優缺點與導入限制。每組 20 分鐘簡報 + Q&A。",
        due: "2026-07-10",
      },
      {
        id: "hw5-2",
        title: "作業二：中美科技發展比較",
        desc: "比較中美 AI 科技發展路徑與競爭優勢，聚焦人才、算力、市場、資金、數據與半導體等面向。討論台灣產業定位、企業機會與潛在風險。每組 20 分鐘簡報 + Q&A。",
        due: "2026-07-24",
      },
    ],
    en: [
      {
        id: "hw5-1",
        title: "HW1: Sushi Chain Case Study",
        desc: "Analyze current operations and pain points of a sushi restaurant chain. Compare visual monitoring, barcodes, RFID, and color management solutions. Propose implementable improvements with pros, cons, and adoption constraints. 20-min group presentation + Q&A.",
        due: "2026-07-10",
      },
      {
        id: "hw5-2",
        title: "HW2: US-China Tech Development Comparison",
        desc: "Compare US-China AI technology development paths and competitive advantages, focusing on talent, computing power, markets, funding, data, and semiconductors. Discuss Taiwan's industry positioning, opportunities, and risks. 20-min group presentation + Q&A.",
        due: "2026-07-24",
      },
    ],
  },
};

const resourceData = [
  {
    category: "res_cat_ai",
    folderUrl: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA?usp=sharing",
    folderId: "1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA",
    items: [
      { name_zh: "Lecture 1 - Installation", name_en: "Lecture 1 - Installation", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜Python 安裝與環境設定", desc_en: "PDF | Python Installation & Setup" },
      { name_zh: "Lecture 2 - Introduction to Python", name_en: "Lecture 2 - Introduction to Python", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜Python 簡介", desc_en: "PDF | Python Introduction" },
      { name_zh: "Lecture 3 - IDLE and VS Code", name_en: "Lecture 3 - IDLE and VS Code", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜開發環境設定", desc_en: "PDF | IDE Setup" },
      { name_zh: "Lecture 4 - Variables and Expression", name_en: "Lecture 4 - Variables and Expression", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜變數與運算式", desc_en: "PDF | Variables & Expressions" },
      { name_zh: "Lecture 5-6 - Data Types I & II", name_en: "Lecture 5-6 - Data Types I & II", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜資料型態", desc_en: "PDF | Data Types" },
      { name_zh: "Lecture 7-9 - Flow Chart & Logic Control", name_en: "Lecture 7-9 - Flow Chart & Logic Control", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜流程圖與邏輯控制", desc_en: "PDF | Flow Chart & Logic Control" },
      { name_zh: "Lecture 10-12 - Function 1-3", name_en: "Lecture 10-12 - Function 1-3", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜函式設計", desc_en: "PDF | Functions" },
      { name_zh: "Lecture 13 - Bubble Sort & Review", name_en: "Lecture 13 - Bubble Sort & Review", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜排序演算法與複習", desc_en: "PDF | Sorting & Review" },
      { name_zh: "Lecture 14-15 - Module & Package", name_en: "Lecture 14-15 - Module & Package", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜模組與套件", desc_en: "PDF | Modules & Packages" },
      { name_zh: "Lecture 16 - Class (OOP)", name_en: "Lecture 16 - Class (OOP)", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜物件導向程式設計", desc_en: "PDF | Object-Oriented Programming" },
      { name_zh: "Lecture 17-18 - File IO & Exception", name_en: "Lecture 17-18 - File IO & Exception", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜檔案讀寫與例外處理", desc_en: "PDF | File IO & Exception Handling" },
      { name_zh: "Lecture 19 - Built-in Module", name_en: "Lecture 19 - Built-in Module", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜內建模組", desc_en: "PDF | Built-in Modules" },
      { name_zh: "Lecture 20-22 - NumPy, Matplotlib, Pandas", name_en: "Lecture 20-22 - NumPy, Matplotlib, Pandas", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜資料科學三大套件", desc_en: "PDF | Data Science Libraries" },
      { name_zh: "Lecture 23 - Thread", name_en: "Lecture 23 - Thread", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜多執行緒", desc_en: "PDF | Multi-threading" },
      { name_zh: "Lecture 24-25 - Image Processing & PyQt", name_en: "Lecture 24-25 - Image Processing & PyQt", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜影像處理與 GUI 設計", desc_en: "PDF | Image Processing & GUI" },
      { name_zh: "Lecture 27-29 - Serial, Socket, MQTT", name_en: "Lecture 27-29 - Serial, Socket, MQTT", url: "https://drive.google.com/drive/folders/1jw6QioJVKb2J1um9KfRn8vjkXvN9SvBA", desc_zh: "PDF｜通訊協定", desc_en: "PDF | Communication Protocols" },
    ],
  },
  {
    category: "res_cat_vision",
    folderUrl: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j?usp=sharing",
    folderId: "1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j",
    items: [
      { name_zh: "Class #0 - Introduction（課程大綱）", name_en: "Class #0 - Introduction & Syllabus", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜課程介紹與大綱", desc_en: "PDF | Course Introduction & Syllabus" },
      { name_zh: "Class #1 - 機器視覺簡介", name_en: "Class #1 - Introduction to Machine Vision", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜Deltamoocx 1 & 2", desc_en: "PDF | Deltamoocx 1 & 2" },
      { name_zh: "Class #2 - 卷積運算", name_en: "Class #2 - Convolution", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜影像卷積基礎", desc_en: "PDF | Image Convolution" },
      { name_zh: "Class #3 - 影像分割與頻率域", name_en: "Class #3 - Segmentation & Frequency Domain", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜分割技術與頻率分析", desc_en: "PDF | Segmentation & Frequency Analysis" },
      { name_zh: "Class #4 - 形態學運算", name_en: "Class #4 - Morphology", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜膨脹、侵蝕、開閉運算", desc_en: "PDF | Dilation, Erosion, Opening & Closing" },
      { name_zh: "Class #5 - 輪廓描述與霍夫轉換", name_en: "Class #5 - Contour & Hough Transform", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜Descriptor、Contour、Hough Transform", desc_en: "PDF | Descriptors, Contours, Hough Transform" },
      { name_zh: "Class #6 - 紋理特徵 GLCM & Haralick", name_en: "Class #6 - GLCM & Haralick Moments", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜紋理分析與特徵描述", desc_en: "PDF | Texture Analysis & Feature Descriptors" },
      { name_zh: "Class #7 - 色彩空間", name_en: "Class #7 - Color Spaces", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜RGB、HSV、色彩處理", desc_en: "PDF | RGB, HSV, Color Processing" },
      { name_zh: "Class #8 - 幾何轉換與 CNN", name_en: "Class #8 - Geometry Transform & CNN", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜影像幾何轉換與深度學習入門", desc_en: "PDF | Geometric Transformation & CNN Intro" },
      { name_zh: "Class #9-10 - AOI 與遷移學習", name_en: "Class #9-10 - AOI & Transfer Learning", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜自動光學檢測與遷移學習", desc_en: "PDF | AOI & Transfer Learning" },
      { name_zh: "Class #11 - 樣板匹配與 Heatmap", name_en: "Class #11 - Pattern Match & Heatmap", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜樣板匹配與熱力圖視覺化", desc_en: "PDF | Pattern Matching & Heatmap Visualization" },
      { name_zh: "Class #12-13 - AOI 軟體工具與量測", name_en: "Class #12-13 - AOI Tools & Gauge", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜AOI 軟體工具與尺寸量測", desc_en: "PDF | AOI Software Tools & Gauging" },
      { name_zh: "Class #14 - OCR 光學字元辨識", name_en: "Class #14 - OCR", url: "https://drive.google.com/drive/folders/1c6e4AuE_ajHRTxQJumW1eWy7vBG9lU6j", desc_zh: "PDF｜光學字元辨識", desc_en: "PDF | Optical Character Recognition" },
    ],
  },
  {
    category: "res_cat_dl",
    folderUrl: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq?usp=sharing",
    folderId: "1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq",
    items: [
      { name_zh: "Lab 0 - PyTorch Quickstart", name_en: "Lab 0 - PyTorch Quickstart", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜PyTorch 快速入門", desc_en: "PDF | PyTorch Quick Start" },
      { name_zh: "Lab 1 - Tensor 與常用指令", name_en: "Lab 1 - Tensor & Common Commands", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜Tensor 操作與 torch.nn 基礎", desc_en: "PDF | Tensor Operations & torch.nn Basics" },
      { name_zh: "Lab 1-3 - nn 模組（Conv, Pool, Norm, Activation, Loss）", name_en: "Lab 1-3 - nn Modules (Conv, Pool, Norm, Activation, Loss)", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜卷積層、池化層、正規化、激活函數、損失函數", desc_en: "PDF | Conv, Pooling, Normalization, Activation, Loss" },
      { name_zh: "Lab 2 - Gradient Descent & BPN", name_en: "Lab 2 - Gradient Descent & BPN", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜梯度下降與反向傳播", desc_en: "PDF | Gradient Descent & Backpropagation" },
      { name_zh: "Lab 3 - CNN / LeNet", name_en: "Lab 3 - CNN / LeNet", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜卷積神經網路與 LeNet", desc_en: "PDF | CNN & LeNet Architecture" },
      { name_zh: "Lab 4 - Dataset, DataLoader, Optimizer, Training", name_en: "Lab 4 - Dataset, DataLoader, Optimizer, Training", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜資料集載入、優化器、訓練流程（含 ResNet）", desc_en: "PDF | Data Loading, Optimizer, Training Process (ResNet)" },
      { name_zh: "Lab 5 - Data Augmentation, Loss & Metrics", name_en: "Lab 5 - Data Augmentation, Loss & Metrics", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜資料增強、Color Jitter、損失函數、評估指標", desc_en: "PDF | Data Augmentation, Color Jitter, Loss, Metrics" },
      { name_zh: "Lab 6 - Transfer Learning & Fine-Tuning", name_en: "Lab 6 - Transfer Learning & Fine-Tuning", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜遷移學習與凍結層微調", desc_en: "PDF | Transfer Learning & Freeze Layer Fine-Tuning" },
      { name_zh: "Lab 7 - Training Tips", name_en: "Lab 7 - Training Tips", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜訓練技巧與調參", desc_en: "PDF | Training Tips & Tuning" },
      { name_zh: "Lab 8-9 - Hooks, Feature Map & CAM Heatmap", name_en: "Lab 8-9 - Hooks, Feature Map & CAM Heatmap", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜Hooks、特徵圖視覺化、CAM 熱力圖", desc_en: "PDF | Hooks, Feature Map Visualization, CAM Heatmap" },
      { name_zh: "Lab 10 - Block Design（Inception, Residual, MBConv, SE, Dense, CSP, FPN, RepVGG）", name_en: "Lab 10 - Block Design (Inception, Residual, MBConv, SE, Dense, CSP, FPN, RepVGG)", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜8 種經典 Block 架構設計", desc_en: "PDF | 8 Classic Block Architecture Designs" },
      { name_zh: "Lab 17 - AutoEncoder & UNet", name_en: "Lab 17 - AutoEncoder & UNet", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜自編碼器與語意分割", desc_en: "PDF | AutoEncoder & Semantic Segmentation" },
      { name_zh: "Lab 18 - Anomaly Detection（PaDiM, EfficientAD）", name_en: "Lab 18 - Anomaly Detection (PaDiM, EfficientAD)", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜異常檢測模型", desc_en: "PDF | Anomaly Detection Models" },
      { name_zh: "參考論文（CNN, Convolution Arithmetic）", name_en: "Reference Papers (CNN, Convolution Arithmetic)", url: "https://drive.google.com/drive/folders/1PcCGwos9TExUGvuMTpT_qJ2nJ93Kf2Iq", desc_zh: "PDF｜LeCun 89、卷積運算指南、高頻分析", desc_en: "PDF | LeCun 89, Convolution Guide, High-Frequency Analysis" },
    ],
  },
  {
    category: "res_cat_agent",
    folderUrl: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L?usp=sharing",
    folderId: "1M245Peyx5COjAA1PVNkGRROTLKa6sP1L",
    items: [
      { name_zh: "Lecture 0 - AI 簡介 2026", name_en: "Lecture 0 - AI Introduction 2026", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜人工智慧概論", desc_en: "PDF | Introduction to Artificial Intelligence" },
      { name_zh: "Lecture 1 - AI Agent 簡介", name_en: "Lecture 1 - AI Agent Introduction", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜AI Agent 基礎概念", desc_en: "PDF | AI Agent Fundamentals" },
      { name_zh: "Lecture 2 - Claude Code vs Cowork 教學", name_en: "Lecture 2 - Claude Code vs Cowork Tutorial", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜Claude Code 與 Cowork 使用教學", desc_en: "PDF | Claude Code & Cowork Tutorial" },
      { name_zh: "Lecture 3 - 用 Claude Code 建立教學網站", name_en: "Lecture 3 - Building Teaching Website with Claude Code", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜使用 Claude Code 建立教學網站實作", desc_en: "PDF | Building a Teaching Website with Claude Code" },
    ],
  },
];

const sampleVideos = [
  { id: "dQw4w9WgXcQ", title_zh: "課程介紹", title_en: "Course Introduction" },
  { id: "dQw4w9WgXcQ", title_zh: "Python 基礎教學", title_en: "Python Basics" },
  { id: "dQw4w9WgXcQ", title_zh: "深度學習入門", title_en: "Deep Learning Intro" },
];
