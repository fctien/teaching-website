const quizData = {
  course1: {
    zh: [
      {
        q: "下列何者不是機器視覺系統的基本組成元件？",
        options: ["攝影機", "光源", "影像處理軟體", "區塊鏈模組"],

      },
      {
        q: "邊緣偵測中，Canny 演算法的主要優勢是什麼？",
        options: ["計算速度最快", "能有效抑制雜訊並精確定位邊緣", "不需要設定閾值", "只適用於彩色影像"],

      },
      {
        q: "在影像處理中，高斯濾波器主要用於？",
        options: ["銳化影像", "平滑影像（去除雜訊）", "偵測邊緣", "色彩轉換"],

      },
      {
        q: "SIFT 特徵描述子具有下列哪些不變性？",
        options: ["僅旋轉不變性", "僅尺度不變性", "尺度與旋轉不變性", "僅平移不變性"],

      },
      {
        q: "二值化 (Binarization) 處理的目的是？",
        options: ["將彩色影像轉為灰階", "將灰階影像轉為僅黑白兩色", "增加影像的對比度", "壓縮影像檔案大小"],

      },
    ],
    en: [
      {
        q: "Which is NOT a basic component of a machine vision system?",
        options: ["Camera", "Lighting", "Image processing software", "Blockchain module"],

      },
      {
        q: "What is the main advantage of the Canny edge detection algorithm?",
        options: ["Fastest computation", "Effective noise suppression with precise edge localization", "No threshold required", "Only works with color images"],

      },
      {
        q: "In image processing, Gaussian filter is mainly used for?",
        options: ["Sharpening images", "Smoothing images (noise removal)", "Edge detection", "Color conversion"],

      },
      {
        q: "SIFT feature descriptor has which invariance properties?",
        options: ["Rotation only", "Scale only", "Scale and rotation", "Translation only"],

      },
      {
        q: "What is the purpose of binarization?",
        options: ["Convert color to grayscale", "Convert grayscale to black and white", "Increase contrast", "Compress file size"],

      },
    ],
  },
  course2: {
    zh: [
      {
        q: "Python 中哪個關鍵字用於定義函式？",
        options: ["function", "def", "func", "define"],

      },
      {
        q: "下列哪個是 Python 的可變 (mutable) 資料型態？",
        options: ["tuple", "str", "list", "int"],

      },
      {
        q: "監督式學習 (Supervised Learning) 需要什麼？",
        options: ["僅需輸入資料", "需要標註過的訓練資料", "不需要任何資料", "僅需輸出結果"],

      },
      {
        q: "K-Means 演算法屬於哪種學習類型？",
        options: ["監督式學習", "非監督式學習", "強化學習", "半監督式學習"],

      },
      {
        q: "NumPy 主要用於什麼用途？",
        options: ["網頁開發", "數值運算與陣列操作", "資料庫管理", "遊戲開發"],

      },
    ],
    en: [
      {
        q: "Which keyword is used to define a function in Python?",
        options: ["function", "def", "func", "define"],

      },
      {
        q: "Which is a mutable data type in Python?",
        options: ["tuple", "str", "list", "int"],

      },
      {
        q: "What does Supervised Learning require?",
        options: ["Only input data", "Labeled training data", "No data at all", "Only output results"],

      },
      {
        q: "K-Means algorithm belongs to which type of learning?",
        options: ["Supervised", "Unsupervised", "Reinforcement", "Semi-supervised"],

      },
      {
        q: "What is NumPy mainly used for?",
        options: ["Web development", "Numerical computing and array operations", "Database management", "Game development"],

      },
    ],
  },
  course3: {
    zh: [
      {
        q: "PyTorch 中，自動微分的核心模組是？",
        options: ["torch.nn", "torch.autograd", "torch.optim", "torch.utils"],

      },
      {
        q: "CNN 中池化層 (Pooling Layer) 的主要功能是？",
        options: ["增加參數量", "降低特徵圖的空間維度", "增加非線性", "正規化輸出"],

      },
      {
        q: "在 PyTorch 中建立神經網路模型通常繼承哪個類別？",
        options: ["torch.Tensor", "torch.nn.Module", "torch.optim.Optimizer", "torch.Dataset"],

      },
      {
        q: "Transformer 架構的核心機制是？",
        options: ["卷積運算", "循環連接", "自注意力機制 (Self-Attention)", "池化操作"],

      },
      {
        q: "GAN 由哪兩個網路組成？",
        options: ["編碼器與解碼器", "生成器與判別器", "特徵提取器與分類器", "前向網路與反向網路"],

      },
    ],
    en: [
      {
        q: "What is the core module for automatic differentiation in PyTorch?",
        options: ["torch.nn", "torch.autograd", "torch.optim", "torch.utils"],

      },
      {
        q: "What is the main function of a Pooling Layer in CNN?",
        options: ["Increase parameters", "Reduce spatial dimensions of feature maps", "Add non-linearity", "Normalize output"],

      },
      {
        q: "In PyTorch, neural network models typically inherit from?",
        options: ["torch.Tensor", "torch.nn.Module", "torch.optim.Optimizer", "torch.Dataset"],

      },
      {
        q: "What is the core mechanism of the Transformer architecture?",
        options: ["Convolution", "Recurrent connections", "Self-Attention", "Pooling"],

      },
      {
        q: "GAN consists of which two networks?",
        options: ["Encoder & Decoder", "Generator & Discriminator", "Feature Extractor & Classifier", "Forward & Backward Networks"],

      },
    ],
  },
  course4: {
    zh: [
      {
        q: "AI Agent 與傳統 AI 系統的主要區別是什麼？",
        options: ["運算速度更快", "具備自主決策與規劃能力", "使用更多資料", "僅能處理文字"],

      },
      {
        q: "下列何者是 LLM（大型語言模型）的典型代表？",
        options: ["ResNet", "GPT / Claude", "YOLO", "K-Means"],

      },
      {
        q: "Prompt Engineering 的主要目的是？",
        options: ["訓練模型權重", "透過設計提示詞引導模型產生更好的輸出", "壓縮模型大小", "加速推論速度"],

      },
      {
        q: "在 AI Agent 中，「Tool Use」指的是？",
        options: ["安裝開發工具", "Agent 呼叫外部工具或 API 來完成任務", "訓練資料的前處理", "模型的超參數調整"],

      },
      {
        q: "Multi-Agent 系統的優勢是什麼？",
        options: ["減少模型參數量", "多個 Agent 分工協作，處理更複雜的任務", "降低硬體需求", "僅適用於影像處理"],

      },
    ],
    en: [
      {
        q: "What is the main difference between AI Agent and traditional AI systems?",
        options: ["Faster computation", "Autonomous decision-making and planning", "Uses more data", "Text-only processing"],

      },
      {
        q: "Which is a typical example of LLM (Large Language Model)?",
        options: ["ResNet", "GPT / Claude", "YOLO", "K-Means"],

      },
      {
        q: "What is the main purpose of Prompt Engineering?",
        options: ["Training model weights", "Designing prompts to guide better model outputs", "Compressing model size", "Speeding up inference"],

      },
      {
        q: "In AI Agent, what does 'Tool Use' refer to?",
        options: ["Installing dev tools", "Agent calling external tools or APIs to complete tasks", "Data preprocessing", "Hyperparameter tuning"],

      },
      {
        q: "What is the advantage of Multi-Agent systems?",
        options: ["Fewer model parameters", "Multiple agents collaborate to handle complex tasks", "Lower hardware requirements", "Only for image processing"],

      },
    ],
  },
  course5: {
    zh: [
      {
        q: "AI War 中，台灣在全球 AI 產業鏈中主要扮演什麼角色？",
        options: ["AI 軟體創新者", "AI 硬體提供者（半導體）", "AI 資料供應商", "AI 終端消費市場"],

      },
      {
        q: "AOI（自動光學檢測）在智慧製造中的主要用途是？",
        options: ["產品包裝設計", "生產線品質檢測與瑕疵辨識", "員工績效評估", "財務報表分析"],

      },
      {
        q: "生成式 AI（如 ChatGPT）對企業管理最大的影響是？",
        options: ["取代所有人力", "提升決策效率與內容產出能力", "僅適用於科技業", "降低企業營收"],

      },
      {
        q: "下列何者最能描述台灣 2025 年經濟成長的主要驅動力？",
        options: ["觀光旅遊業", "農業出口", "AI 與半導體產業", "房地產市場"],

      },
      {
        q: "管理者導入 AI 時，最重要的決策考量是什麼？",
        options: ["追求最新技術", "評估投資報酬率與風險", "完全取代人力", "僅關注成本節省"],

      },
    ],
    en: [
      {
        q: "In the AI War, what role does Taiwan primarily play in the global AI supply chain?",
        options: ["AI software innovator", "AI hardware provider (semiconductors)", "AI data supplier", "AI end-consumer market"],

      },
      {
        q: "What is the main purpose of AOI (Automated Optical Inspection) in smart manufacturing?",
        options: ["Product packaging design", "Production line quality inspection & defect detection", "Employee performance evaluation", "Financial report analysis"],

      },
      {
        q: "What is the biggest impact of Generative AI (e.g., ChatGPT) on business management?",
        options: ["Replacing all human labor", "Improving decision efficiency and content generation", "Only applicable to tech industry", "Reducing company revenue"],

      },
      {
        q: "Which best describes the main driver of Taiwan's 2025 economic growth?",
        options: ["Tourism industry", "Agricultural exports", "AI and semiconductor industry", "Real estate market"],

      },
      {
        q: "What is the most important consideration when managers adopt AI?",
        options: ["Pursuing the latest technology", "Evaluating ROI and risk", "Completely replacing human workers", "Focusing only on cost savings"],

      },
    ],
  },
  course6: {
    zh: [
      {
        q: "Python 中，下列哪個資料型別是不可變的 (immutable)？",
        options: ["list", "dict", "tuple", "set"],

      },
      {
        q: "下列哪個關鍵字用於捕捉例外？",
        options: ["catch", "except", "handle", "error"],

      },
      {
        q: "在 Python 中，`__init__` 方法的主要用途是？",
        options: ["刪除物件", "初始化物件屬性", "繼承父類別", "定義靜態方法"],

      },
      {
        q: "MVC 架構中，負責處理商業邏輯的是哪個部分？",
        options: ["Model", "View", "Controller", "Template"],

      },
      {
        q: "下列哪個套件主要用於資料表格處理與分析？",
        options: ["Matplotlib", "NumPy", "Pandas", "OpenCV"],

      },
      {
        q: "Python 中，`with open('file.txt') as f:` 語法的優點是？",
        options: ["讀取速度更快", "自動關閉檔案", "支援二進位模式", "可同時讀寫多個檔案"],

      },
      {
        q: "下列何者不是 Python 的流程控制結構？",
        options: ["if/elif/else", "for", "while", "switch/case"],

      },
      {
        q: "FastAPI 主要用於建立什麼類型的應用？",
        options: ["桌面應用程式", "Web API 服務", "遊戲引擎", "資料庫管理系統"],

      },
      {
        q: "Vibe Coding 的核心概念是什麼？",
        options: ["完全不需要寫程式", "結合 AI 工具輔助程式開發", "只使用低程式碼平台", "僅適用於前端開發"],

      },
      {
        q: "Python 函式中，`*args` 的用途是？",
        options: ["定義關鍵字引數", "接收任意數量的位置引數", "定義必要參數", "限制引數型態"],

      },
    ],
    en: [
      {
        q: "Which Python data type is immutable?",
        options: ["list", "dict", "tuple", "set"],

      },
      {
        q: "Which keyword is used to catch exceptions in Python?",
        options: ["catch", "except", "handle", "error"],

      },
      {
        q: "What is the main purpose of the `__init__` method in Python?",
        options: ["Delete an object", "Initialize object attributes", "Inherit from parent class", "Define static methods"],

      },
      {
        q: "In the MVC architecture, which part handles business logic?",
        options: ["Model", "View", "Controller", "Template"],

      },
      {
        q: "Which library is mainly used for tabular data processing and analysis?",
        options: ["Matplotlib", "NumPy", "Pandas", "OpenCV"],

      },
      {
        q: "What is the advantage of `with open('file.txt') as f:` syntax in Python?",
        options: ["Faster reading speed", "Automatic file closing", "Supports binary mode", "Can read/write multiple files simultaneously"],

      },
      {
        q: "Which is NOT a Python control flow structure?",
        options: ["if/elif/else", "for", "while", "switch/case"],

      },
      {
        q: "What type of application is FastAPI mainly used to build?",
        options: ["Desktop applications", "Web API services", "Game engines", "Database management systems"],

      },
      {
        q: "What is the core concept of Vibe Coding?",
        options: ["No coding required at all", "Using AI tools to assist development", "Only using low-code platforms", "Only for front-end development"],

      },
      {
        q: "What is the purpose of `*args` in a Python function?",
        options: ["Define keyword arguments", "Accept any number of positional arguments", "Define required parameters", "Restrict argument types"],

      },
    ],
  },
  course7: {
    zh: [
      {
        q: "Python 中，print('Hello' + ' ' + 'World') 的輸出是什麼？",
        options: ["HelloWorld", "Hello World", "Hello+World", "語法錯誤"],
      },
      {
        q: "下列哪個是 Python 的合法變數名稱？",
        options: ["2name", "my-var", "_count", "class"],
      },
      {
        q: "Python 的 list 和 tuple 最主要的差別是？",
        options: ["list 不能排序", "tuple 是可變的", "list 是可變的，tuple 是不可變的", "沒有差別"],
      },
      {
        q: "if/elif/else 結構中，如果第一個 if 條件為 True，程式會？",
        options: ["繼續檢查 elif", "執行 if 區塊後跳過 elif/else", "執行所有區塊", "產生錯誤"],
      },
      {
        q: "Python 函式中 return 的作用是？",
        options: ["印出結果", "結束函式並回傳值", "定義變數", "建立迴圈"],
      },
      {
        q: "import math 之後，如何呼叫平方根函式？",
        options: ["sqrt(9)", "math.sqrt(9)", "math->sqrt(9)", "import sqrt(9)"],
      },
      {
        q: "try/except 結構的主要用途是？",
        options: ["加速程式執行", "處理執行時期的例外錯誤", "定義函式", "匯入模組"],
      },
      {
        q: "物件導向程式設計中，__init__ 方法的作用是？",
        options: ["刪除物件", "建構子，初始化物件屬性", "繼承父類別", "定義靜態方法"],
      },
      {
        q: "Prompt Engineering 的核心原則不包括下列哪項？",
        options: ["給足脈絡與角色", "任務具體、指定格式", "完全信任 AI 輸出不需驗證", "迭代與驗證"],
      },
      {
        q: "軟體開發生命週期（SDLC）的正確順序是？",
        options: ["設計→需求→測試→實作", "需求→設計→實作→測試", "實作→設計→需求→測試", "測試→需求→設計→實作"],
      },
    ],
    en: [
      {
        q: "What is the output of print('Hello' + ' ' + 'World') in Python?",
        options: ["HelloWorld", "Hello World", "Hello+World", "Syntax error"],
      },
      {
        q: "Which of the following is a valid Python variable name?",
        options: ["2name", "my-var", "_count", "class"],
      },
      {
        q: "What is the main difference between a list and a tuple in Python?",
        options: ["Lists cannot be sorted", "Tuples are mutable", "Lists are mutable, tuples are immutable", "No difference"],
      },
      {
        q: "In an if/elif/else structure, if the first if condition is True, the program will?",
        options: ["Continue checking elif", "Execute the if block and skip elif/else", "Execute all blocks", "Raise an error"],
      },
      {
        q: "What does the return statement do in a Python function?",
        options: ["Print the result", "End the function and return a value", "Define a variable", "Create a loop"],
      },
      {
        q: "After 'import math', how do you call the square root function?",
        options: ["sqrt(9)", "math.sqrt(9)", "math->sqrt(9)", "import sqrt(9)"],
      },
      {
        q: "What is the main purpose of try/except?",
        options: ["Speed up execution", "Handle runtime exceptions", "Define functions", "Import modules"],
      },
      {
        q: "In OOP, what is the purpose of the __init__ method?",
        options: ["Delete an object", "Constructor that initializes object attributes", "Inherit from parent class", "Define a static method"],
      },
      {
        q: "Which is NOT a core principle of Prompt Engineering?",
        options: ["Provide context and role", "Be specific with tasks and format", "Fully trust AI output without verification", "Iterate and verify"],
      },
      {
        q: "What is the correct order of the Software Development Life Cycle (SDLC)?",
        options: ["Design→Requirements→Test→Implement", "Requirements→Design→Implement→Test", "Implement→Design→Requirements→Test", "Test→Requirements→Design→Implement"],
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
  course6: {
    zh: [
      {
        id: "hw6-1",
        title: "W1 練習與作業：導論環境建置",
        desc: "完成 Python 環境安裝（Anaconda / VS Code），撰寫第一支 Python 程式，練習 print、input 與基本運算。",
        due: "2026-09-15",
      },
      {
        id: "hw6-2",
        title: "W2 練習與作業：變數與運算式",
        desc: "練習變數命名規則、各種運算子（算術、比較、邏輯）、型態轉換與字串格式化。",
        due: "2026-09-22",
      },
      {
        id: "hw6-3",
        title: "W3 練習與作業：資料型別",
        desc: "練習 List、Tuple、Dict、Set、String 的操作，包含新增、刪除、切片、排序等常用方法。",
        due: "2026-09-29",
      },
      {
        id: "hw6-4",
        title: "W4 練習與作業：流程圖與條件判斷",
        desc: "練習 if/elif/else 條件判斷、while 與 for 迴圈、巢狀迴圈，並繪製對應流程圖。",
        due: "2026-10-06",
      },
      {
        id: "hw6-5",
        title: "W5 練習與作業：函式",
        desc: "練習函式定義、參數傳遞（位置/關鍵字/預設值）、回傳值、變數作用域與遞迴函式。",
        due: "2026-10-13",
      },
      {
        id: "hw6-6",
        title: "W6 練習與作業：模組與套件",
        desc: "練習 import 機制、建立自訂模組、使用 pip 安裝第三方套件，了解 __name__ 機制。",
        due: "2026-10-20",
      },
      {
        id: "hw6-7",
        title: "W7 練習與作業：檔案讀寫與例外處理",
        desc: "練習檔案開啟/讀取/寫入、with 語法、CSV 處理，以及 try/except 例外處理機制。",
        due: "2026-10-27",
      },
      {
        id: "hw6-8",
        title: "W8 練習與作業：物件導向程式設計",
        desc: "練習 Class 定義、__init__、繼承、封裝與多型，實作一個簡單的物件導向應用。",
        due: "2026-11-03",
      },
      {
        id: "hw6-9",
        title: "W10 練習與作業：MVC 小計算機",
        desc: "使用 MVC 架構實作一個具有 GUI 介面的小計算機應用程式。",
        due: "2026-11-17",
      },
      {
        id: "hw6-10",
        title: "W11 練習與作業：資料分析工具",
        desc: "使用 Pandas 讀取資料集，進行資料清理與統計分析，並以 Matplotlib 繪製視覺化圖表。",
        due: "2026-11-24",
      },
      {
        id: "hw6-11",
        title: "W12 練習與作業：影像處理與網頁應用",
        desc: "使用 OpenCV 進行基礎影像處理，並結合 FastAPI 建立簡易網頁應用。",
        due: "2026-12-01",
      },
      {
        id: "hw6-12",
        title: "W13 練習與作業：API 查詢服務",
        desc: "使用 requests 呼叫公開 API，解析 JSON 回應，並將結果整合至應用程式中。",
        due: "2026-12-08",
      },
      {
        id: "hw6-13",
        title: "W14 練習與作業：整合型小網站",
        desc: "整合前後端技術，建立一個包含資料查詢、視覺化與使用者互動功能的小型網站。",
        due: "2026-12-15",
      },
      {
        id: "hw6-14",
        title: "W15 練習與作業：Vibe Coding 導論",
        desc: "運用 AI 工具（如 Claude Code、Copilot）輔助程式開發，完成一個互動式應用原型。",
        due: "2026-12-22",
      },
      {
        id: "hw6-15",
        title: "W16 練習與作業：迭代除錯部署",
        desc: "對既有專案進行除錯與優化，學習部署流程，完成專題提案書。",
        due: "2026-12-29",
      },
      {
        id: "hw6-16",
        title: "期末專題",
        desc: "完成期末專題開發與成果展示簡報，進行同儕互評。專題需整合課程所學技術，展現解決實際問題的能力。",
        due: "2027-01-12",
      },
    ],
    en: [
      {
        id: "hw6-1",
        title: "W1 Exercise: Introduction & Setup",
        desc: "Install Python environment (Anaconda / VS Code), write your first Python program, practice print, input, and basic operations.",
        due: "2026-09-15",
      },
      {
        id: "hw6-2",
        title: "W2 Exercise: Variables & Expressions",
        desc: "Practice variable naming rules, operators (arithmetic, comparison, logical), type conversion, and string formatting.",
        due: "2026-09-22",
      },
      {
        id: "hw6-3",
        title: "W3 Exercise: Data Types",
        desc: "Practice List, Tuple, Dict, Set, String operations including add, delete, slicing, and sorting methods.",
        due: "2026-09-29",
      },
      {
        id: "hw6-4",
        title: "W4 Exercise: Flow Charts & Conditionals",
        desc: "Practice if/elif/else conditionals, while and for loops, nested loops, and draw corresponding flowcharts.",
        due: "2026-10-06",
      },
      {
        id: "hw6-5",
        title: "W5 Exercise: Functions",
        desc: "Practice function definition, parameter passing (positional/keyword/default), return values, scope, and recursion.",
        due: "2026-10-13",
      },
      {
        id: "hw6-6",
        title: "W6 Exercise: Modules & Packages",
        desc: "Practice import mechanism, create custom modules, use pip to install packages, understand __name__ mechanism.",
        due: "2026-10-20",
      },
      {
        id: "hw6-7",
        title: "W7 Exercise: File I/O & Exceptions",
        desc: "Practice file open/read/write, with syntax, CSV handling, and try/except exception handling.",
        due: "2026-10-27",
      },
      {
        id: "hw6-8",
        title: "W8 Exercise: Object-Oriented Programming",
        desc: "Practice Class definition, __init__, inheritance, encapsulation, and polymorphism. Build a simple OOP application.",
        due: "2026-11-03",
      },
      {
        id: "hw6-9",
        title: "W10 Exercise: MVC Calculator",
        desc: "Build a GUI calculator application using the MVC architectural pattern.",
        due: "2026-11-17",
      },
      {
        id: "hw6-10",
        title: "W11 Exercise: Data Analysis Tools",
        desc: "Use Pandas to read datasets, perform data cleaning and statistical analysis, and create visualizations with Matplotlib.",
        due: "2026-11-24",
      },
      {
        id: "hw6-11",
        title: "W12 Exercise: Image Processing & Web App",
        desc: "Use OpenCV for basic image processing and build a simple web application with FastAPI.",
        due: "2026-12-01",
      },
      {
        id: "hw6-12",
        title: "W13 Exercise: API Query Service",
        desc: "Use requests to call public APIs, parse JSON responses, and integrate results into an application.",
        due: "2026-12-08",
      },
      {
        id: "hw6-13",
        title: "W14 Exercise: Integrated Website",
        desc: "Integrate front-end and back-end technologies to build a small website with data query, visualization, and user interaction.",
        due: "2026-12-15",
      },
      {
        id: "hw6-14",
        title: "W15 Exercise: Vibe Coding Introduction",
        desc: "Use AI tools (Claude Code, Copilot) to assist development, complete an interactive application prototype.",
        due: "2026-12-22",
      },
      {
        id: "hw6-15",
        title: "W16 Exercise: Iterative Debugging & Deployment",
        desc: "Debug and optimize an existing project, learn deployment workflow, and complete the project proposal.",
        due: "2026-12-29",
      },
      {
        id: "hw6-16",
        title: "Final Project",
        desc: "Complete final project development and presentation with peer review. Must integrate course technologies and demonstrate problem-solving skills.",
        due: "2027-01-12",
      },
    ],
  },
  course7: {
    zh: [
      { id: "hw7-1", title: "W1 練習與作業：導論與環境建置", desc: "完成 Python 環境安裝（Anaconda / VS Code），撰寫第一支 Python 程式，練習 print、input 與基本運算。", due: "2026-09-15" },
      { id: "hw7-2", title: "W2 練習與作業：變數與運算式", desc: "練習變數命名規則、各種運算子（算術、比較、邏輯）、型態轉換與字串格式化。", due: "2026-09-22" },
      { id: "hw7-3", title: "W3 練習與作業：資料型別", desc: "練習 List、Tuple、Dict、Set、String 的操作，包含新增、刪除、切片、排序等常用方法。", due: "2026-09-29" },
      { id: "hw7-4", title: "W4 練習與作業：流程圖與條件判斷", desc: "練習 if/elif/else 條件判斷、while 與 for 迴圈、巢狀迴圈，並繪製對應流程圖。", due: "2026-10-06" },
      { id: "hw7-5", title: "W5 練習與作業：函式", desc: "練習函式定義、參數傳遞（位置/關鍵字/預設值）、回傳值、變數作用域與遞迴函式。", due: "2026-10-13" },
      { id: "hw7-6", title: "W6 練習與作業：模組與套件", desc: "練習 import 機制、建立自訂模組、使用 pip 安裝第三方套件，了解 __name__ 機制。", due: "2026-10-20" },
      { id: "hw7-7", title: "W7 練習與作業：檔案讀寫與例外處理", desc: "練習檔案開啟/讀取/寫入、with 語法、CSV 處理，以及 try/except 例外處理機制。", due: "2026-10-27" },
      { id: "hw7-8", title: "W8 練習與作業：物件導向程式設計", desc: "練習 Class 定義、__init__、繼承、封裝與多型，實作一個簡單的物件導向應用。", due: "2026-11-03" },
      { id: "hw7-9", title: "W10 練習與作業：MVC 小計算機", desc: "使用 MVC 架構實作一個具有 GUI 介面的小計算機應用程式。", due: "2026-11-17" },
      { id: "hw7-10", title: "W11 練習與作業：資料分析工具", desc: "使用 Pandas 讀取資料集，進行資料清理與統計分析，並以 Matplotlib 繪製視覺化圖表。", due: "2026-11-24" },
      { id: "hw7-11", title: "W12 練習與作業：影像處理與網頁應用", desc: "使用 OpenCV 進行基礎影像處理，並結合 FastAPI 建立簡易網頁應用。", due: "2026-12-01" },
      { id: "hw7-12", title: "W13 練習與作業：API 查詢服務", desc: "使用 requests 呼叫公開 API，解析 JSON 回應，並將結果整合至應用程式中。", due: "2026-12-08" },
      { id: "hw7-13", title: "W14 練習與作業：整合型小網站", desc: "整合前後端技術，建立一個包含資料查詢、視覺化與使用者互動功能的小型網站。", due: "2026-12-15" },
      { id: "hw7-14", title: "W15 練習與作業：Vibe Coding 導論", desc: "運用 AI 工具（如 Claude Code、Copilot）輔助程式開發，完成一個互動式應用原型。", due: "2026-12-22" },
      { id: "hw7-15", title: "W16 練習與作業：迭代除錯部署", desc: "對既有專案進行除錯與優化，學習部署流程，完成專題提案書。", due: "2026-12-29" },
      { id: "hw7-16", title: "期末專題", desc: "完成期末專題開發與成果展示簡報，進行同儕互評。專題需整合課程所學技術，展現解決實際問題的能力。", due: "2027-01-12" },
    ],
    en: [
      { id: "hw7-1", title: "W1 Exercise: Introduction & Setup", desc: "Install Python environment (Anaconda / VS Code), write your first Python program, practice print, input, and basic operations.", due: "2026-09-15" },
      { id: "hw7-2", title: "W2 Exercise: Variables & Expressions", desc: "Practice variable naming rules, operators (arithmetic, comparison, logical), type conversion, and string formatting.", due: "2026-09-22" },
      { id: "hw7-3", title: "W3 Exercise: Data Types", desc: "Practice List, Tuple, Dict, Set, String operations including add, delete, slicing, and sorting methods.", due: "2026-09-29" },
      { id: "hw7-4", title: "W4 Exercise: Flow Charts & Conditionals", desc: "Practice if/elif/else conditionals, while and for loops, nested loops, and draw corresponding flowcharts.", due: "2026-10-06" },
      { id: "hw7-5", title: "W5 Exercise: Functions", desc: "Practice function definition, parameter passing (positional/keyword/default), return values, scope, and recursion.", due: "2026-10-13" },
      { id: "hw7-6", title: "W6 Exercise: Modules & Packages", desc: "Practice import mechanism, create custom modules, use pip to install packages, understand __name__.", due: "2026-10-20" },
      { id: "hw7-7", title: "W7 Exercise: File I/O & Exceptions", desc: "Practice file open/read/write, with statement, CSV processing, and try/except exception handling.", due: "2026-10-27" },
      { id: "hw7-8", title: "W8 Exercise: OOP", desc: "Practice Class definition, __init__, inheritance, encapsulation, polymorphism. Build a simple OOP application.", due: "2026-11-03" },
      { id: "hw7-9", title: "W10 Exercise: MVC Calculator", desc: "Build a GUI calculator application using the MVC architecture pattern.", due: "2026-11-17" },
      { id: "hw7-10", title: "W11 Exercise: Data Analysis", desc: "Use Pandas for data loading, cleaning and analysis. Visualize results with Matplotlib charts.", due: "2026-11-24" },
      { id: "hw7-11", title: "W12 Exercise: Image Processing & Web", desc: "Use OpenCV for basic image processing and build a simple web application with FastAPI.", due: "2026-12-01" },
      { id: "hw7-12", title: "W13 Exercise: API Query Service", desc: "Use requests to call public APIs, parse JSON responses, and integrate results into an application.", due: "2026-12-08" },
      { id: "hw7-13", title: "W14 Exercise: Integrated Website", desc: "Build a small website integrating data querying, visualization, and user interaction features.", due: "2026-12-15" },
      { id: "hw7-14", title: "W15 Exercise: Vibe Coding Intro", desc: "Use AI tools (Claude Code, Copilot) to assist development and build an interactive app prototype.", due: "2026-12-22" },
      { id: "hw7-15", title: "W16 Exercise: Debug & Deploy", desc: "Debug and optimize an existing project, learn deployment workflow, and complete project proposal.", due: "2026-12-29" },
      { id: "hw7-16", title: "Final Project", desc: "Complete final project development and presentation with peer review. Must integrate course technologies.", due: "2027-01-12" },
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
      { name_zh: "Lecture 2 - Harness Engineering 簡報", name_en: "Lecture 2 - Harness Engineering", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜Harness Engineering 教學", desc_en: "PDF | Harness Engineering Teaching" },
      { name_zh: "Lecture 3 - AI Agent: From Tools, Skills, Workflow to Goal", name_en: "Lecture 3 - AI Agent: From Tools, Skills, Workflow to Goal", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜從工具、技能、工作流程到目標", desc_en: "PDF | From Tools, Skills, Workflow to Goal" },
      { name_zh: "Lecture 4 - 用 Claude Code 建立教學網站", name_en: "Lecture 4 - Building Teaching Website with Claude Code", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜使用 Claude Code 建立教學網站實作", desc_en: "PDF | Building a Teaching Website with Claude Code" },
      { name_zh: "Lecture 5 - AI Agent 流程: Beyond LLM Agentic Workflow", name_en: "Lecture 5 - AI Agent Workflow: Beyond LLM Agentic Workflow", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜AI Agent 工作流程與進階應用", desc_en: "PDF | AI Agent Workflow & Advanced Applications" },
      { name_zh: "Lecture 6 - Loop Engineering", name_en: "Lecture 6 - Loop Engineering", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜Loop Engineering 教學", desc_en: "PDF | Loop Engineering Teaching" },
      { name_zh: "AI 失業狂潮", name_en: "AI Unemployment Crisis", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜AI 對就業市場的衝擊與影響", desc_en: "PDF | AI Impact on Employment Market" },
      { name_zh: "Case Study 1 - Cowork 案例研究：晨間簡報自動化", name_en: "Case Study 1 - Cowork: Morning Briefing Automation", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜Cowork 晨間簡報自動化案例", desc_en: "PDF | Cowork Morning Briefing Automation Case" },
      { name_zh: "Case Study 2 - 簡報互評表製作流程", name_en: "Case Study 2 - Peer Review Form Creation", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜簡報互評表製作流程", desc_en: "PDF | Presentation Peer Review Form Workflow" },
      { name_zh: "Case Study 3 - AI Cowork 論文格式校正案例", name_en: "Case Study 3 - AI Cowork Thesis Format Correction", url: "https://drive.google.com/drive/folders/1M245Peyx5COjAA1PVNkGRROTLKa6sP1L", desc_zh: "PDF｜AI Cowork 論文格式校正案例", desc_en: "PDF | AI Cowork Thesis Format Correction Case" },
    ],
  },
  {
    category: "res_cat_emba",
    folderUrl: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo?usp=sharing",
    folderId: "1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo",
    items: [
      { name_zh: "EMBA 課程大綱", name_en: "EMBA Course Syllabus", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜課程架構、時間表與學習目標", desc_en: "PDF | Course Structure, Schedule & Learning Objectives" },
      { name_zh: "AI 簡介 2026", name_en: "AI Introduction 2026", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜AI / ML / DL 基礎概念", desc_en: "PDF | AI / ML / DL Fundamentals" },
      { name_zh: "AI Agent 簡介", name_en: "AI Agent Introduction", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜AI Agent 概念與應用", desc_en: "PDF | AI Agent Concepts & Applications" },
      { name_zh: "AI Agent 流程 — Beyond LLM Agentic Workflow", name_en: "AI Agent Workflow — Beyond LLM Agentic Workflow", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜AI Agent 工作流程與進階應用", desc_en: "PDF | AI Agent Workflow & Advanced Applications" },
      { name_zh: "AI 產業重大事件與未來趨勢 2026", name_en: "AI Industry Milestones & Future Trends 2026", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜AI 產業里程碑與未來發展", desc_en: "PDF | AI Industry Milestones & Future Development" },
      { name_zh: "AI 革命 — AI Revolution 2026", name_en: "AI Revolution 2026", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜AI 革命與產業衝擊", desc_en: "PDF | AI Revolution & Industry Impact" },
      { name_zh: "AI 讓台灣賺翻了，但？", name_en: "AI Made Taiwan Rich, But?", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜台灣 AI 產業與經濟分析（經濟學人）", desc_en: "PDF | Taiwan AI Industry & Economic Analysis (Economist)" },
      { name_zh: "AI 失業狂潮", name_en: "AI Unemployment Crisis", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜AI 對就業市場的衝擊與影響", desc_en: "PDF | AI Impact on Employment Market" },
      { name_zh: "From Tools, Skills, Workflow to Goal", name_en: "From Tools, Skills, Workflow to Goal", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜從工具、技能、工作流程到目標", desc_en: "PDF | From Tools, Skills, Workflow to Goal" },
      { name_zh: "Loop Engineering 教學簡報", name_en: "Loop Engineering Lecture", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜Loop Engineering 教學", desc_en: "PDF | Loop Engineering Teaching" },
      { name_zh: "台灣現狀 2026", name_en: "Taiwan Current Status 2026", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜台灣產業與經濟現狀分析", desc_en: "PDF | Taiwan Industry & Economic Analysis" },
      { name_zh: "美中競賽", name_en: "US-China AI Competition", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜美中 AI 競賽態勢分析", desc_en: "PDF | US-China AI Competition Analysis" },
      { name_zh: "機器視覺（首頁）", name_en: "Machine Vision (Overview)", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜機器視覺與 AOI 檢測技術", desc_en: "PDF | Machine Vision & AOI Inspection" },
      { name_zh: "機器視覺 vs 人眼", name_en: "Machine Vision vs Human Eye", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜機器視覺與人眼比較", desc_en: "PDF | Machine Vision vs Human Eye Comparison" },
      { name_zh: "機器視覺之光機", name_en: "Machine Vision Optics", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜機器視覺光學系統", desc_en: "PDF | Machine Vision Optical Systems" },
      { name_zh: "機器視覺系統之架構", name_en: "Machine Vision System Architecture", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜機器視覺系統架構與元件", desc_en: "PDF | Machine Vision System Architecture & Components" },
      { name_zh: "Applications of Machine Vision — 四大領域", name_en: "Applications of Machine Vision — Four Domains", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜機器視覺四大應用領域", desc_en: "PDF | Four Application Domains of Machine Vision" },
      { name_zh: "爭鮮案 — Case Study", name_en: "Sushi Chain Case Study", url: "https://drive.google.com/drive/folders/1hzdCR1d_aczKTtuYiLh0FzeqQshauzjo", desc_zh: "PDF｜機器視覺與 AOI 營運改善案例", desc_en: "PDF | Machine Vision & AOI Operations Improvement Case" },
    ],
  },
  {
    category: "res_cat_pl",
    folderUrl: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing",
    items: [
      { name_zh: "W1 — 導論環境建置與第一支程式", name_en: "W1 — Introduction, Setup & First Program", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜Python 安裝、IDLE、VS Code、第一支程式", desc_en: "PDF | Python Installation, IDLE, VS Code, First Program" },
      { name_zh: "W2 — 變數與運算式", name_en: "W2 — Variables & Expressions", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜變數命名、資料型態、運算子", desc_en: "PDF | Variable Naming, Data Types, Operators" },
      { name_zh: "W3 — 資料型別", name_en: "W3 — Data Types", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜List、Tuple、Dict、Set、String", desc_en: "PDF | List, Tuple, Dict, Set, String" },
      { name_zh: "W4 — 流程圖與條件判斷", name_en: "W4 — Flow Charts & Conditionals", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜if/elif/else、while、for 迴圈", desc_en: "PDF | if/elif/else, while, for loops" },
      { name_zh: "W5 — 函式", name_en: "W5 — Functions", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜函式定義、參數、回傳值、遞迴", desc_en: "PDF | Function Definition, Parameters, Return, Recursion" },
      { name_zh: "W6 — 模組與套件", name_en: "W6 — Modules & Packages", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜import、pip、自訂模組", desc_en: "PDF | import, pip, Custom Modules" },
      { name_zh: "W7 — 檔案讀寫與例外處理", name_en: "W7 — File I/O & Exception Handling", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜open/read/write、try/except", desc_en: "PDF | open/read/write, try/except" },
      { name_zh: "W8 — 物件導向程式設計", name_en: "W8 — Object-Oriented Programming", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜Class、繼承、封裝、多型", desc_en: "PDF | Class, Inheritance, Encapsulation, Polymorphism" },
      { name_zh: "W10 — MVC 小計算機", name_en: "W10 — MVC Calculator", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜MVC 架構、GUI 設計", desc_en: "PDF | MVC Architecture, GUI Design" },
      { name_zh: "W11 — 資料分析工具", name_en: "W11 — Data Analysis Tools", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜Pandas、Matplotlib、資料視覺化", desc_en: "PDF | Pandas, Matplotlib, Data Visualization" },
      { name_zh: "W12 — 影像處理與網頁應用", name_en: "W12 — Image Processing & Web App", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜OpenCV、FastAPI、網頁整合", desc_en: "PDF | OpenCV, FastAPI, Web Integration" },
      { name_zh: "W13 — API 查詢服務", name_en: "W13 — API Query Service", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜RESTful API、requests、JSON 解析", desc_en: "PDF | RESTful API, requests, JSON Parsing" },
      { name_zh: "W14 — 整合型小網站", name_en: "W14 — Integrated Website", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜前後端整合、部署", desc_en: "PDF | Full-stack Integration, Deployment" },
      { name_zh: "W15 — Vibe Coding 導論與互動應用", name_en: "W15 — Vibe Coding & Interactive Apps", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜AI 輔助程式開發、互動應用", desc_en: "PDF | AI-Assisted Development, Interactive Apps" },
      { name_zh: "W16 — 迭代除錯部署與專題提案", name_en: "W16 — Iterative Debugging, Deployment & Proposal", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜Debug 技巧、部署流程、專題提案", desc_en: "PDF | Debug Techniques, Deployment, Project Proposal" },
      { name_zh: "W17 — 成果展示與同儕互評", name_en: "W17 — Final Showcase & Peer Review", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜專題展示、互評機制", desc_en: "PDF | Project Showcase, Peer Review" },
      { name_zh: "EXTRA — 資料科學套件入門", name_en: "EXTRA — Data Science Packages Intro", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜NumPy、Pandas、Matplotlib 補充教材", desc_en: "PDF | NumPy, Pandas, Matplotlib Supplementary" },
      { name_zh: "期末專題說明", name_en: "Final Project Guidelines", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "PDF｜專題要求、評分標準、範本", desc_en: "PDF | Project Requirements, Rubric, Templates" },
    ],
  },
  {
    category: "res_cat_pl2",
    folderUrl: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing",
    items: [
      { name_zh: "📖 教材投影片（Google Drive）", name_en: "📖 Teaching Slides (Google Drive)", url: "https://drive.google.com/drive/folders/1MJs7wH2AelWACkMjFNaKOJyiQUQE5wLP?usp=sharing", desc_zh: "全部教材 PPT，含 W1–W17 各週投影片", desc_en: "All teaching PPT slides, W1–W17 weekly materials" },
      { name_zh: "💻 PPT 程式範例（Google Drive）", name_en: "💻 Demo Programs (Google Drive)", url: "https://drive.google.com/drive/folders/1jZ0m5DZQ2tPl7rwTWBjsezMXcul3kKqm?usp=sharing", desc_zh: "投影片中使用的程式範例原始碼", desc_en: "Source code for demo programs used in slides" },
      { name_zh: "📝 每週作業（Google Drive）", name_en: "📝 Weekly Homework (Google Drive)", url: "https://drive.google.com/drive/folders/1To3GNKdfZ4DYrsv5JedZeOfdZbK-4pjF?usp=sharing", desc_zh: "每週作業 Notebook 下載", desc_en: "Weekly homework notebook downloads" },
    ],
  },
];

const appData = [
  {
    id: "yolo26",
    name: "YOLO26",
    icon: "🎯",
    desc_zh: "最新一代 YOLO 物件偵測應用程式，支援即時影像偵測、模型訓練與推論。適用於工業檢測、物件計數等場景。",
    desc_en: "Latest generation YOLO object detection application. Supports real-time image detection, model training and inference. Ideal for industrial inspection and object counting.",
    size: "1.89 GB",
    format: "RAR",
    github: "https://github.com/ultralytics/ultralytics",
    driveUrl: "https://drive.google.com/drive/folders/1UBRajmOjSuNqaWRrR7oFUJSiTojA-PCM?usp=sharing",
    tags_zh: ["物件偵測", "即時推論", "YOLO"],
    tags_en: ["Object Detection", "Real-time Inference", "YOLO"],
  },
  {
    id: "yolo11",
    name: "YOLO11",
    icon: "📦",
    desc_zh: "YOLOv11 物件偵測應用程式，支援多種模型架構與推論模式。提供完整 GUI 介面進行訓練與預測。",
    desc_en: "YOLOv11 object detection application with multiple model architectures and inference modes. Full GUI interface for training and prediction.",
    size: "2.07 GB",
    format: "RAR",
    github: "https://github.com/ultralytics/ultralytics",
    driveUrl: "https://drive.google.com/drive/folders/1UBRajmOjSuNqaWRrR7oFUJSiTojA-PCM?usp=sharing",
    tags_zh: ["物件偵測", "GUI 介面", "YOLOv11"],
    tags_en: ["Object Detection", "GUI Interface", "YOLOv11"],
  },
  {
    id: "dinomaly2",
    name: "Dinomaly2",
    icon: "🦕",
    desc_zh: "基於 Dinomaly（CVPR 2025）的多類別無監督異常偵測應用程式。採用純 Transformer 架構，以極簡重建方式實現高效異常偵測，支援多類別物件同時檢測。",
    desc_en: "Multi-class unsupervised anomaly detection application based on Dinomaly (CVPR 2025). Uses a pure Transformer architecture with minimalistic reconstruction for efficient anomaly detection across multiple object categories.",
    size: "2.02 GB",
    format: "RAR",
    github: "https://github.com/guojiajeremy/Dinomaly",
    driveUrl: "https://drive.google.com/drive/folders/1UBRajmOjSuNqaWRrR7oFUJSiTojA-PCM?usp=sharing",
    tags_zh: ["異常偵測", "多類別", "Transformer", "CVPR 2025"],
    tags_en: ["Anomaly Detection", "Multi-class", "Transformer", "CVPR 2025"],
  },
  {
    id: "uninet-ad",
    name: "UniNet AD",
    icon: "🔬",
    desc_zh: "基於 UniNet（CVPR 2025）的統一異常偵測應用程式。採用對比學習引導與特徵選擇機制，實現高效的工業瑕疵偵測，支援多種異常偵測場景。",
    desc_en: "Unified anomaly detection application based on UniNet (CVPR 2025). Uses contrastive learning-guided framework with feature selection for efficient industrial defect detection across multiple scenarios.",
    size: "2.51 GB",
    format: "RAR",
    github: "https://github.com/pangdatangtt/UniNet",
    driveUrl: "https://drive.google.com/drive/folders/1UBRajmOjSuNqaWRrR7oFUJSiTojA-PCM?usp=sharing",
    tags_zh: ["異常偵測", "對比學習", "特徵選擇", "CVPR 2025"],
    tags_en: ["Anomaly Detection", "Contrastive Learning", "Feature Selection", "CVPR 2025"],
  },
  {
    id: "efficientad",
    name: "EfficientAD",
    icon: "🔍",
    desc_zh: "輕量級異常偵測應用程式，基於 EfficientAD 模型。支援工業瑕疵檢測，提供 Heatmap 視覺化與模型訓練功能。",
    desc_en: "Lightweight anomaly detection application based on EfficientAD model. Supports industrial defect detection with Heatmap visualization and model training.",
    size: "4.07 GB",
    format: "RAR",
    github: "https://github.com/nelson1425/EfficientAD",
    driveUrl: "https://drive.google.com/drive/folders/1UBRajmOjSuNqaWRrR7oFUJSiTojA-PCM?usp=sharing",
    tags_zh: ["異常偵測", "瑕疵檢測", "Heatmap"],
    tags_en: ["Anomaly Detection", "Defect Detection", "Heatmap"],
  },
];

const sampleVideos = [
  { id: "dQw4w9WgXcQ", title_zh: "課程介紹", title_en: "Course Introduction" },
  { id: "dQw4w9WgXcQ", title_zh: "Python 基礎教學", title_en: "Python Basics" },
  { id: "dQw4w9WgXcQ", title_zh: "深度學習入門", title_en: "Deep Learning Intro" },
];
