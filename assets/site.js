
(() => {
  const root = document.documentElement;

  // Theme ---------------------------------------------------------
  const themeBtn = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('nobel-theme');
  if (savedTheme === 'light' || savedTheme === 'dark') {
    root.dataset.theme = savedTheme;
  }
  const syncThemeButton = () => {
    if (themeBtn) themeBtn.textContent = root.dataset.theme === 'dark' ? 'LIGHT MODE' : 'DARK MODE';
  };
  syncThemeButton();
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('nobel-theme', root.dataset.theme);
      syncThemeButton();
    });
  }

  // Deep Dive -----------------------------------------------------
  document.querySelectorAll('.deep button').forEach((btn) => {
    const rawLabel = btn.textContent.replace(/^\s*[＋+−-]\s*/, '').trim();
    const render = (open) => {
      btn.textContent = `${open ? '−' : '＋'} ${rawLabel}`;
      btn.setAttribute('aria-expanded', String(open));
    };
    render(false);

    btn.addEventListener('click', () => {
      const box = btn.closest('.deep');
      if (!box) return;
      box.classList.toggle('open');
      render(box.classList.contains('open'));
    });
  });

  // Homepage timeline --------------------------------------------
  const timelineNodes = [...document.querySelectorAll('.year-node.available')];
  const detailYear = document.getElementById('detailYear');
  const detailName = document.getElementById('detailName');
  const detailQuestion = document.getElementById('detailQuestion');
  const detailTopics = document.getElementById('detailTopics');
  const detailLink = document.getElementById('detailLink');

  const syncTimelineDetail = (node) => {
    if (!node) return;
    if (detailYear) detailYear.textContent = node.dataset.year || '';
    if (detailName) detailName.textContent = node.dataset.name || '';
    if (detailQuestion) detailQuestion.textContent = node.dataset.question || '';
    if (detailTopics) detailTopics.textContent = node.dataset.topics || '';
    if (detailLink) {
      const url = node.dataset.url || '';
      if (url) {
        detailLink.href = url;
        detailLink.hidden = false;
        detailLink.textContent = `Read ${node.dataset.year} case →`;
      } else {
        detailLink.hidden = true;
      }
    }
  };

  timelineNodes.forEach((node) => {
    node.addEventListener('click', () => {
      timelineNodes.forEach((n) => n.classList.remove('active'));
      node.classList.add('active');
      syncTimelineDetail(node);
    });
  });

  syncTimelineDetail(document.querySelector('.year-node.available.active'));

  // Reading time --------------------------------------------------
  const readTimeTarget = document.querySelector('[data-read-time]');
  const story = document.querySelector('.story');
  if (readTimeTarget && story) {
    const clone = story.cloneNode(true);

    // Read time means Story Mode. Expandable evidence / related navigation
    // are deliberately excluded from the estimate.
    clone.querySelectorAll('.deep, .next-case').forEach((el) => el.remove());

    const words = clone.textContent
      .trim()
      .split(/\s+/)
      .filter(Boolean).length;

    // Long-form economics in Vietnamese with formulas/English terminology:
    // use a deliberately conservative pace rather than generic 250 wpm.
    const WORDS_PER_MINUTE = 180;
    const minutes = Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
    readTimeTarget.textContent = `≈ ${minutes} phút`;
  }

  // Case reading progress ----------------------------------------
  const progress = document.getElementById('progress');
  if (progress) {
    const updateProgress = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const pct = max > 0 ? (doc.scrollTop / max) * 100 : 0;
      progress.style.width = `${pct}%`;
    };
    document.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();
  }

  // Active case TOC ----------------------------------------------
  const sections = [...document.querySelectorAll('.story-section')];
  const tocLinks = [...document.querySelectorAll('.toc a')];
  if (sections.length && tocLinks.length && 'IntersectionObserver' in window) {
    const linkMap = new Map(
      tocLinks.map((a) => [a.getAttribute('href')?.replace('#', ''), a])
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          tocLinks.forEach((a) => a.classList.remove('active'));
          const link = linkMap.get(entry.target.id);
          if (link) link.classList.add('active');
        });
      },
      { rootMargin: '-25% 0px -65% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
  }
})();
