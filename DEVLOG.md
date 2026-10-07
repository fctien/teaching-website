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
- 需 commit 並 push 至 GitHub
