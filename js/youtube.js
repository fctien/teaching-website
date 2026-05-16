const YT_API_KEY = "AIzaSyCzdIktAM_y5ytcNWN_zx2hBbaEUy4m_ew";
const YT_CHANNEL_ID = "UCWvAFNxvB59MLKITHHxx8jg";
const YT_UPLOADS_PLAYLIST = "UUWvAFNxvB59MLKITHHxx8jg";

// Additional playlists with forced category
const YT_EXTRA_PLAYLISTS = [
  { playlistId: "PLw3ywie6qaofYFlRyW5uclsSCC_GYHt6S", category: "aiagent" },
];

const courseCategories = {
  vision: {
    zh: "機器視覺與應用",
    en: "Machine Vision & Applications",
    icon: "👁️",
    keywords: [
      "MVA", "機器視覺", "Machine Vision", "Webcam", "imread",
      "Blob", "Segmentation", "Histogram", "Filter", "Mean Filter",
      "Geometry Transform", "Mouse Event", "Drawing", "Sampling",
      "Quantization", "Space Domain", "Boundary", "Contour",
      "Kornia", "SpinView", "Morphology",
    ],
  },
  python: {
    zh: "人工智慧與 Python 程式設計",
    en: "AI & Python Programming",
    icon: "🤖",
    keywords: [
      "Python Lecture", "Python 課程", "Python -", "Python --",
      "Python Practice", "程式語言 I", "程式語言I",
      "Data Type", "Variable", "Expression", "IDLE",
      "function", "Function", "Logic control", "Module",
      "Package", "Class", "Exception", "File IO",
      "Matplotlib", "Numpy", "Pandas", "Thread",
      "Bubble sort", "PBL", "Python PBL",
      "Sin函數", "List", "String Random",
      "Python 程式語言", "Python簡介", "安裝",
      "Review of Python", "VS code",
      "Flow chart", "Lecture 1", "print function",
      "While", "Build in Modules",
    ],
  },
  deeplearning: {
    zh: "深度學習 — 使用 PyTorch",
    en: "Deep Learning with PyTorch",
    icon: "🧠",
    keywords: [
      "PyTorch", "Pytorch", "Deep Learning", "CNN",
      "ResNet", "DenseNet", "UNet", "EfficientNet",
      "EfficientAD", "Yolo", "YOLO", "Mask RCNN",
      "Tensor", "Convolution", "Pooling", "Linear Layer",
      "Normalization", "Container", "Base Module",
      "Datasets", "Dataloader", "Optimizer", "Hooks",
      "Feature map", "Kernel", "Visualiz",
      "Data Augmentation", "Color Jitter",
      "Block Design", "Inception", "Residual",
      "MBConv", "SE Block", "CSP", "FPN", "Dense Block",
      "TensorRT", "PCB Defect", "torch",
    ],
  },
  aiagent: {
    zh: "AI Agent",
    en: "AI Agent",
    icon: "🤝",
    keywords: [
      "AI Agent", "Introduction to AI Agent",
    ],
  },
  other: {
    zh: "其他課程",
    en: "Other Courses",
    icon: "📚",
    keywords: [
      "VBA", "Excel", "IR Tutorial", "IR Demo",
      "Arduino", "工業機器人", "PyQt", "樞紐分析",
      "資料分析", "補充教材",
    ],
  },
};

let allVideos = [];
let videosLoaded = false;

function categorizeVideo(title) {
  const cats = ["vision", "aiagent", "python", "deeplearning", "other"];
  for (const cat of cats) {
    for (const kw of courseCategories[cat].keywords) {
      if (title.includes(kw)) return cat;
    }
  }
  return "other";
}

async function fetchAllVideos() {
  if (videosLoaded && allVideos.length > 0) return allVideos;

  allVideos = [];
  let nextPageToken = "";

  try {
    do {
      const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YT_UPLOADS_PLAYLIST}&maxResults=50&key=${YT_API_KEY}${nextPageToken ? "&pageToken=" + nextPageToken : ""}`;
      const res = await fetch(url);
      const data = await res.json();

      if (data.items) {
        for (const item of data.items) {
          const snippet = item.snippet;
          if (snippet.title === "Private video" || snippet.title === "Deleted video") continue;
          allVideos.push({
            id: snippet.resourceId.videoId,
            title: snippet.title,
            thumbnail: snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || "",
            publishedAt: snippet.publishedAt,
            category: categorizeVideo(snippet.title),
          });
        }
      }
      nextPageToken = data.nextPageToken || "";
    } while (nextPageToken);

    // Fetch extra playlists (e.g., AI Agent)
    const existingIds = new Set(allVideos.map((v) => v.id));
    for (const pl of YT_EXTRA_PLAYLISTS) {
      let plToken = "";
      do {
        const plUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${pl.playlistId}&maxResults=50&key=${YT_API_KEY}${plToken ? "&pageToken=" + plToken : ""}`;
        const plRes = await fetch(plUrl);
        const plData = await plRes.json();
        if (plData.items) {
          for (const item of plData.items) {
            const snippet = item.snippet;
            if (snippet.title === "Private video" || snippet.title === "Deleted video") continue;
            const vid = snippet.resourceId.videoId;
            if (existingIds.has(vid)) {
              // Update category for existing video
              const existing = allVideos.find((v) => v.id === vid);
              if (existing) existing.category = pl.category;
            } else {
              allVideos.push({
                id: vid,
                title: snippet.title,
                thumbnail: snippet.thumbnails?.medium?.url || snippet.thumbnails?.default?.url || "",
                publishedAt: snippet.publishedAt,
                category: pl.category,
              });
              existingIds.add(vid);
            }
          }
        }
        plToken = plData.nextPageToken || "";
      } while (plToken);
    }

    videosLoaded = true;
    localStorage.setItem("yt_cache", JSON.stringify({ videos: allVideos, ts: Date.now() }));
  } catch (err) {
    const cached = localStorage.getItem("yt_cache");
    if (cached) {
      const parsed = JSON.parse(cached);
      allVideos = parsed.videos;
      videosLoaded = true;
    }
  }
  return allVideos;
}

let currentVideoCategory = "all";

async function initVideos() {
  const grid = document.getElementById("videoGrid");
  const countEl = document.getElementById("videoCount");
  if (!grid) return;

  grid.innerHTML = `<p style="text-align:center;color:var(--text-light);grid-column:1/-1;padding:2rem;">${t("videos_loading")}</p>`;

  const cached = localStorage.getItem("yt_cache");
  if (cached) {
    const parsed = JSON.parse(cached);
    if (Date.now() - parsed.ts < 3600000) {
      allVideos = parsed.videos;
      videosLoaded = true;
      renderVideoGrid();
      return;
    }
  }

  await fetchAllVideos();
  renderVideoGrid();
}

function filterVideos(category) {
  currentVideoCategory = category;
  document.querySelectorAll(".video-filter-btn").forEach((btn) => {
    btn.classList.toggle("selected", btn.getAttribute("data-cat") === category);
  });
  renderVideoGrid();
}

function renderVideoGrid() {
  const grid = document.getElementById("videoGrid");
  const countEl = document.getElementById("videoCount");
  if (!grid) return;

  // "All" tab: show statistics only
  if (currentVideoCategory === "all") {
    if (countEl) {
      countEl.textContent = currentLang === "zh"
        ? `共 ${allVideos.length} 部影片`
        : `${allVideos.length} videos`;
    }

    // Count per category
    const stats = {};
    for (const key of Object.keys(courseCategories)) {
      stats[key] = allVideos.filter((v) => v.category === key).length;
    }

    grid.innerHTML = `<div style="grid-column:1/-1;display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1.2rem;">` +
      Object.entries(courseCategories).map(([key, cat]) => {
        const label = currentLang === "zh" ? cat.zh : cat.en;
        const count = stats[key] || 0;
        if (count === 0) return "";
        return `
          <div class="video-stat-card" onclick="filterVideos('${key}')" style="
            background:var(--card-bg);border-radius:var(--radius);box-shadow:var(--shadow);
            padding:1.5rem;text-align:center;cursor:pointer;transition:all var(--transition);
          " onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='var(--shadow-hover)'"
             onmouseout="this.style.transform='';this.style.boxShadow='var(--shadow)'">
            <div style="font-size:2.5rem;margin-bottom:0.5rem;">${cat.icon}</div>
            <h4 style="font-size:1rem;margin-bottom:0.3rem;color:var(--text);">${label}</h4>
            <p style="font-size:2rem;font-weight:700;color:var(--primary);">${count}</p>
            <p style="font-size:0.85rem;color:var(--text-light);">${currentLang === "zh" ? "部影片" : "videos"}</p>
          </div>`;
      }).join("") +
      `</div>`;
    return;
  }

  let filtered = allVideos.filter((v) => v.category === currentVideoCategory);

  const isLoggedIn = !!currentUser;
  const totalCount = filtered.length;
  const VIDEO_LIMIT = 6;
  const isLimited = !isLoggedIn && filtered.length > VIDEO_LIMIT;

  if (isLimited) {
    filtered = filtered.slice(0, VIDEO_LIMIT);
  }

  if (countEl) {
    if (isLimited) {
      countEl.textContent = currentLang === "zh"
        ? `顯示 ${VIDEO_LIMIT} / ${totalCount} 部影片（登入後可觀看全部）`
        : `Showing ${VIDEO_LIMIT} of ${totalCount} videos (login to see all)`;
    } else {
      countEl.textContent = currentLang === "zh"
        ? `共 ${totalCount} 部影片`
        : `${totalCount} videos`;
    }
  }

  if (filtered.length === 0) {
    grid.innerHTML = `<p style="text-align:center;color:var(--text-light);grid-column:1/-1;padding:2rem;">${currentLang === "zh" ? "此分類目前沒有影片" : "No videos in this category"}</p>`;
    return;
  }

  let html = filtered
    .map((v) => `
      <div class="video-card">
        <div class="video-thumb" onclick="playVideo(this, '${v.id}')">
          <img src="${v.thumbnail}" alt="${v.title}" loading="lazy">
          <div class="video-play-btn">▶</div>
        </div>
        <div class="video-info">
          <h4 title="${v.title}">${v.title}</h4>
          <p>${new Date(v.publishedAt).toLocaleDateString(currentLang === "zh" ? "zh-TW" : "en-US")}</p>
        </div>
      </div>`)
    .join("");

  if (isLimited) {
    html += `
      <div class="video-login-hint" style="grid-column:1/-1;text-align:center;padding:2rem;">
        <p style="font-size:1.1rem;color:var(--text-light);margin-bottom:1rem;">
          🔒 ${currentLang === "zh" ? `還有 ${totalCount - VIDEO_LIMIT} 部影片，登入後即可觀看全部` : `${totalCount - VIDEO_LIMIT} more videos available. Login to watch all.`}
        </p>
        <button class="btn btn-primary" onclick="openLoginModal()">
          ${currentLang === "zh" ? "登入以觀看全部" : "Login to View All"}
        </button>
      </div>`;
  }

  grid.innerHTML = html;
}

function playVideo(el, videoId) {
  el.innerHTML = `<div class="video-embed"><iframe src="https://www.youtube.com/embed/${videoId}?autoplay=1" title="Video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
}

function renderVideoFilters() {
  const container = document.getElementById("videoFilters");
  if (!container) return;

  const allLabel = currentLang === "zh" ? "全部" : "All";
  let html = `<button class="video-filter-btn ${currentVideoCategory === "all" ? "selected" : ""}" data-cat="all" onclick="filterVideos('all')">${allLabel}</button>`;

  for (const [key, cat] of Object.entries(courseCategories)) {
    const label = currentLang === "zh" ? cat.zh : cat.en;
    html += `<button class="video-filter-btn ${currentVideoCategory === key ? "selected" : ""}" data-cat="${key}" onclick="filterVideos('${key}')">${cat.icon} ${label}</button>`;
  }
  container.innerHTML = html;
}
