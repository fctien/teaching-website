# DEVLOG — teaching-website

## 2026-10-07 15:00　新增 course7「人工智慧導論」課程

**需求**：將 D:\課程\AI and AI Agent\AI Introduction\ 的 16 週 AI 導論微課程加入教學網站，作為 course7

**做法**：
1. 在 `js/i18n.js` 新增 course7_title / course7_desc / course7_topics（中英文）
2. 在 `index.html` 新增 course7 課程卡片（icon 🧩）、測驗按鈕、以及全部 6 個下拉選單的 course7 選項（hwCourseSelect、adminStudentCourse、addStudentCourse、adminHwCourse、adminQuizCourse、quiz buttons）
3. 在 `js/data.js` 新增 course7 quizData：10 題中英文測驗（涵蓋 AI 定義、非監督學習、反向傳播、Transformer、ReAct、CNN、LLM 三階段、RAG、感知機、主權 AI）
4. 在 `js/app.js` 將 `renderCourseTopics()` 迴圈從 `i <= 6` 改為 `i <= 7`
5. 在 `js/students.js` 將 supervisor 帳號的 courses 陣列加入 "course7"
6. 重新產生 `js/quiz-key.js`，編碼所有 7 門課的正確答案（原有 course1-6 的答案陣列為空，一併補齊）

**產出**：
- `js/i18n.js` — 新增 course7 翻譯（zh + en 各 3 筆）
- `index.html` — 新增課程卡片 + 測驗按鈕 + 6 處下拉選單
- `js/data.js` — 新增 course7 quizData（zh 10 題 + en 10 題）
- `js/app.js` — renderCourseTopics 迴圈範圍 6→7
- `js/students.js` — supervisor courses 加入 course7
- `js/quiz-key.js` — 重新編碼全部 7 門課答案
- `DEVLOG.md` — 本檔（新建）

**驗證**：
- `http-server` 啟動後瀏覽器開啟，課程卡片正確顯示 course7 標題、描述、週次主題
- JavaScript console 零錯誤
- 透過 JS 驗證全部 5 個 admin/homework 下拉選單皆含 course7 選項
- 測驗按鈕存在、course7Topics 元素正確渲染

**問題與修正**：
- 發現原有 quiz-key.js 中 course1-6 的答案陣列全為空（encode 腳本曾在 data.js 已無 answer 欄位時執行），本次一併補齊所有正確答案

**待辦**：
- course7 目前無作業資料（homeworkData），因為此微課程嵌於程式語言課中，作業由 course6 管理
- 教學資源（resourceData）尚未新增 course7 分類（需 Google Drive 資料夾連結）

---

## 2026-10-07 16:30　course6/course7 擴充為每週測驗系統

**需求**：course6（2026人工智慧導論及程式語言）和 course7（人工智慧導論）的測驗需依照每週主題給予測驗題，每週至少 20 題

**做法**：
1. 設計 `weeklyQuizData` 資料結構，支援 per-week 題目（weeks metadata + zh/en 題庫）
2. 新增 `js/quiz-course6.js`：16 週 × 20 題 × 中英文 = 640 題（w1-w8, w10-w17）
3. 新增 `js/quiz-course7.js`：16 週 × 20 題 × 中英文 = 640 題（w1-w16）
4. 修改 `js/app.js`：新增 `_isWeeklyCourse()`、`renderWeekSelect()`、`selectQuizWeek()`、`_getQuizQuestions()`、`_getQuizAnswerIndex()` 等函式，支援週次選擇 → 載入該週題目 → 作答 → 批改完整流程
5. 修改 `index.html`：新增 `quizWeekSelect` 區塊（週次按鈕網格）及 script 引用
6. 修改 `css/style.css`：新增 `.quiz-week-grid`、`.quiz-week-btn` 等樣式
7. 重新產生 `js/quiz-key.js`：包含 course6/7 per-week 答案（`_flat` + `w1`~`w17`）

**產出**：
- `js/quiz-course6.js` — 640 題（~152KB）
- `js/quiz-course7.js` — 640 題（~192KB）
- `js/app.js` — 新增 per-week quiz 流程邏輯
- `index.html` — 新增週次選擇 UI + script 引用
- `css/style.css` — 新增週次按鈕樣式
- `js/quiz-key.js` — 重新編碼含 per-week 答案

**驗證**：
- 瀏覽器登入後選擇 course7 → 顯示 16 個週次按鈕
- 點擊 W1 → 正確載入 20 題，題目與選項顯示正常
- Console 零錯誤
- course1-5 的 flat quiz 結構不受影響（向後相容）

**問題與修正**：
- 答案欄位需在產生 quiz-key.js 後從 client 端題庫移除，避免洩漏正確答案
- `_getQuizAnswerIndex()` 設計 fallback 機制：先查 per-week 答案，再查 `_flat`，確保新舊結構共存

**待辦**：
- 可考慮加入測驗計時功能
- 可考慮顯示每週測驗完成進度
