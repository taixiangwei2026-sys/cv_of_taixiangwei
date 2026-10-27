/* 站点脚本：中英切换（localStorage 记忆）、手机菜单、滚动高亮、入场动画
   纯 JavaScript，无框架、无外链、无任何上传/部署逻辑。 */

(function () {
  "use strict";

  var STORAGE_KEY = "cv-site-lang";
  var dict = window.I18N || { zh: {}, en: {} };

  function getLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { saved = null; }
    return (saved === "en") ? "en" : "zh";
  }

  function text(key, lang) {
    var val = (dict[lang] && dict[lang][key]) || (dict.zh && dict.zh[key]) || "";
    return String(val).replace("{year}", new Date().getFullYear());
  }

  function applyLang(lang) {
    document.documentElement.lang = (lang === "en") ? "en" : "zh-CN";

    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = text(nodes[i].getAttribute("data-i18n"), lang);
    }

    var phs = document.querySelectorAll("[data-i18n-ph]");
    for (var j = 0; j < phs.length; j++) {
      phs[j].setAttribute("placeholder", text(phs[j].getAttribute("data-i18n-ph"), lang));
    }

    var titled = document.querySelector("[data-i18n-title]");
    if (titled) titled.textContent = text(titled.getAttribute("data-i18n-title"), lang);

    var btn = document.getElementById("langBtn");
    if (btn) {
      btn.textContent = (lang === "en") ? "中文" : "EN";
      btn.setAttribute("aria-label", (lang === "en") ? "Switch to Chinese" : "Switch to English");
    }

    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  /* ---------- 手机菜单 ---------- */
  function initMenu() {
    var burger = document.getElementById("burger");
    var menu = document.getElementById("menu");
    if (!burger || !menu) return;

    burger.addEventListener("click", function () {
      menu.classList.toggle("open");
    });
    menu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") menu.classList.remove("open");
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth > 700) menu.classList.remove("open");
    });
  }

  /* ---------- 滚动高亮当前区块 ---------- */
  function initSpy() {
    var links = document.querySelectorAll(".menu a[href^='#']");
    var sections = [];
    for (var i = 0; i < links.length; i++) {
      var id = links[i].getAttribute("href").slice(1);
      var sec = document.getElementById(id);
      if (sec) sections.push({ link: links[i], sec: sec });
    }
    if (!sections.length) return;

    function onScroll() {
      var pos = window.scrollY + 140;
      var current = sections[0];
      for (var i = 0; i < sections.length; i++) {
        if (sections[i].sec.offsetTop <= pos) current = sections[i];
      }
      for (var j = 0; j < sections.length; j++) {
        sections[j].link.classList.toggle("active", sections[j] === current);
      }
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 简历下载 ----------
     正常用 ./cv.pdf（服务器环境下走真实文件，换简历即时生效）；
     当取不到该文件时（file:// 直接双击打开、或只拷贝了 HTML 的预览环境），
     自动改用内嵌在 cv-data.js 里的同一份 PDF，保证按钮一定能下载。 */
  function initCvDownload() {
    var links = document.querySelectorAll("[data-cv-download]");
    if (!links.length) return;

    var embedded = window.CV_DATA_URI || "";

    function saveEmbedded(name) {
      if (!embedded) return false;
      try {
        var bin = atob(embedded.split(",")[1]);
        var arr = new Uint8Array(bin.length);
        for (var i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
        var blob = new Blob([arr], { type: "application/pdf" });
        var url = URL.createObjectURL(blob);
        var a = document.createElement("a");
        a.href = url;
        a.download = name || "TaiXiangwei-CV.pdf";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(url); }, 2000);
        return true;
      } catch (e) {
        return false;
      }
    }

    function bindFallback() {
      for (var i = 0; i < links.length; i++) {
        links[i].addEventListener("click", function (e) {
          if (saveEmbedded(this.getAttribute("download"))) e.preventDefault();
        });
      }
    }

    if (location.protocol === "file:") {
      bindFallback();
      return;
    }

    fetch("./cv.pdf", { method: "HEAD" })
      .then(function (res) { if (!res.ok) bindFallback(); })
      .catch(function () { bindFallback(); });
  }

  /* ---------- 入场动画 ---------- */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    if (!("IntersectionObserver" in window)) {
      for (var i = 0; i < items.length; i++) items[i].classList.add("in");
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, { threshold: 0.12 });

    for (var k = 0; k < items.length; k++) io.observe(items[k]);
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyLang(getLang());
    initMenu();
    initSpy();
    initReveal();
    initCvDownload();

    var btn = document.getElementById("langBtn");
    if (btn) {
      btn.addEventListener("click", function () {
        applyLang(getLang() === "zh" ? "en" : "zh");
      });
    }
  });
})();
