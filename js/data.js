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
};

const resourceData = [
  {
    category: "res_cat_vision",
    items: [
      { name_zh: "機器視覺基礎講義", name_en: "Machine Vision Fundamentals", url: "#", desc_zh: "PDF｜第1-3章", desc_en: "PDF | Ch.1-3" },
      { name_zh: "OpenCV 實作教材", name_en: "OpenCV Tutorial", url: "#", desc_zh: "PDF｜含範例程式碼", desc_en: "PDF | With sample code" },
      { name_zh: "工業視覺檢測案例", name_en: "Industrial Inspection Cases", url: "#", desc_zh: "PDF｜實務應用", desc_en: "PDF | Practical applications" },
    ],
  },
  {
    category: "res_cat_ai",
    items: [
      { name_zh: "Python 入門講義", name_en: "Python Basics", url: "#", desc_zh: "PDF｜基礎語法", desc_en: "PDF | Basic syntax" },
      { name_zh: "機器學習演算法整理", name_en: "ML Algorithms Summary", url: "#", desc_zh: "PDF｜常用演算法比較", desc_en: "PDF | Algorithm comparison" },
      { name_zh: "資料科學與視覺化", name_en: "Data Science & Visualization", url: "#", desc_zh: "PDF｜Pandas & Matplotlib", desc_en: "PDF | Pandas & Matplotlib" },
    ],
  },
  {
    category: "res_cat_dl",
    items: [
      { name_zh: "PyTorch 快速入門", name_en: "PyTorch Quick Start", url: "#", desc_zh: "PDF｜安裝與基礎操作", desc_en: "PDF | Setup & basics" },
      { name_zh: "CNN 架構詳解", name_en: "CNN Architecture Guide", url: "#", desc_zh: "PDF｜LeNet 到 ResNet", desc_en: "PDF | LeNet to ResNet" },
      { name_zh: "Transformer 論文導讀", name_en: "Transformer Paper Guide", url: "#", desc_zh: "PDF｜Attention Is All You Need", desc_en: "PDF | Attention Is All You Need" },
    ],
  },
];

const sampleVideos = [
  { id: "dQw4w9WgXcQ", title_zh: "課程介紹", title_en: "Course Introduction" },
  { id: "dQw4w9WgXcQ", title_zh: "Python 基礎教學", title_en: "Python Basics" },
  { id: "dQw4w9WgXcQ", title_zh: "深度學習入門", title_en: "Deep Learning Intro" },
];
