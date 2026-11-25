(function () {
  "use strict";
  var C = window.SITE_CONFIG, $ = function (s, r) { return (r || document).querySelector(s); };
  var fmt = function (n) { return n.toLocaleString("fr-FR").replace(/\u202f|\u00a0/g, " "); };
  var price = function (p) { return p.eur + " € / " + fmt(p.fcfa) + " FCFA"; };
  var wa = function (msg) { return "https://wa.me/" + C.contact.whatsapp + "?text=" + encodeURIComponent(msg); };
  var img = function (n, t) { return "img/" + n + (t ? "-thumb" : "") + ".webp"; };
  var esc = function (s) { var d = document.createElement("div"); d.textContent = s; return d.innerHTML; };

  document.title = C.seo.title;
  $('meta[name="description"]').content = C.seo.description;

  $("#hero-title").textContent = C.hero.title;
  $("#hero-text").textContent = C.hero.text;
  var hc = $("#hero-cta"); hc.textContent = C.hero.cta; hc.href = wa(C.hero.ctaMessage);
  $("#slogan").textContent = C.brand.slogan;

  $("#offers-grid").innerHTML = C.offers.map(function (o) {
    return '<article class="card' + (o.highlight ? " card--hl" : "") + '">' +
      (o.badge ? '<p class="badge">' + esc(o.badge) + "</p>" : "") +
      "<h3>" + esc(o.name) + "</h3><p class=\"tag\">" + esc(o.tagline) + "</p>" +
      '<p class="price">' + esc(price(o.price)) + "</p>" +
      (o.normalPrice ? '<p class="old">Tarif normal : ' + esc(price(o.normalPrice)) + "</p>" : "") +
      "<ul>" + o.features.map(function (f) { return "<li>" + esc(f) + "</li>"; }).join("") + "</ul>" +
      '<button class="link" data-zoom="' + o.image + '" data-alt="Visuel de l’offre ' + esc(o.name) + '">Voir le visuel de l’offre</button>' +
      '<a class="btn" href="' + wa(o.message) + '" target="_blank" rel="noopener">Commander sur WhatsApp</a></article>';
  }).join("");

  $("#recap-title").textContent = C.recap.title;
  $("#recap-img").src = img("recap"); $("#recap-img").alt = C.recap.alt;

  $("#portfolio-title").textContent = C.portfolio.title;
  $("#portfolio-intro").textContent = C.portfolio.intro;
  $("#gallery").innerHTML = C.portfolio.items.map(function (p, i) {
    return '<button class="thumb" data-i="' + i + '" aria-label="Agrandir : ' + esc(p.alt) + '"><img src="' + img(p.img, 1) + '" alt="' + esc(p.alt) + '" width="720" height="406" loading="lazy" decoding="async"></button>';
  }).join("");

  $("#faq-list").innerHTML = C.faq.map(function (f, i) {
    return '<div class="faq-item"><h3><button aria-expanded="false" aria-controls="a' + i + '" id="q' + i + '">' + esc(f.q) + '</button></h3><div id="a' + i + '" role="region" aria-labelledby="q' + i + '" hidden><p>' + esc(f.a) + "</p></div></div>";
  }).join("");
  $("#faq-list").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    var open = b.getAttribute("aria-expanded") === "true";
    b.setAttribute("aria-expanded", String(!open));
    document.getElementById(b.getAttribute("aria-controls")).hidden = open;
  });

  var cm = C.contact;
  document.querySelectorAll("[data-wa]").forEach(function (a) { a.href = wa(C.hero.ctaMessage); });
  document.querySelectorAll("[data-mail]").forEach(function (a) { a.href = "mailto:" + cm.email; a.textContent = cm.email; });
  document.querySelectorAll("[data-ig]").forEach(function (a) { a.href = "https://instagram.com/" + cm.instagram; a.textContent = "@" + cm.instagram; });
  document.querySelectorAll("[data-phone]").forEach(function (a) { a.textContent = "+" + cm.whatsapp.replace(/^(\d{3})(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})$/, "$1 $2 $3 $4 $5 $6"); });
  $("#year").textContent = new Date().getFullYear();

  var nav = $("#nav"), burger = $("#burger");
  burger.addEventListener("click", function () { var o = nav.classList.toggle("open"); burger.setAttribute("aria-expanded", String(o)); });
  nav.addEventListener("click", function (e) { if (e.target.tagName === "A") { nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); } });

  var lb = $("#lb"), lbImg = $("#lb-img"), cur = 0, mode = "gallery", last;
  function show(i) { cur = (i + C.portfolio.items.length) % C.portfolio.items.length; var p = C.portfolio.items[cur]; lbImg.src = img(p.img); lbImg.alt = p.alt; }
  function openLb(trigger) { last = trigger; lb.hidden = false; document.body.classList.add("noscroll"); $("#lb-close").focus(); }
  function closeLb() { lb.hidden = true; document.body.classList.remove("noscroll"); if (last) last.focus(); }
  $("#gallery").addEventListener("click", function (e) { var b = e.target.closest(".thumb"); if (!b) return; mode = "gallery"; lb.classList.remove("single"); show(+b.dataset.i); openLb(b); });
  $("#offers-grid").addEventListener("click", function (e) { var b = e.target.closest("[data-zoom]"); if (!b) return; mode = "single"; lb.classList.add("single"); lbImg.src = img(b.dataset.zoom); lbImg.alt = b.dataset.alt; openLb(b); });
  $("#recap-btn").addEventListener("click", function (e) { mode = "single"; lb.classList.add("single"); lbImg.src = img("recap"); lbImg.alt = C.recap.alt; openLb(e.currentTarget); });
  $("#lb-close").addEventListener("click", closeLb);
  $("#lb-prev").addEventListener("click", function () { show(cur - 1); });
  $("#lb-next").addEventListener("click", function () { show(cur + 1); });
  lb.addEventListener("click", function (e) { if (e.target === lb) closeLb(); });
  document.addEventListener("keydown", function (e) {
    if (lb.hidden) return;
    if (e.key === "Escape") closeLb();
    if (mode === "gallery" && e.key === "ArrowLeft") show(cur - 1);
    if (mode === "gallery" && e.key === "ArrowRight") show(cur + 1);
  });
  var sx = 0;
  lb.addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  lb.addEventListener("touchend", function (e) { var d = e.changedTouches[0].clientX - sx; if (mode === "gallery" && Math.abs(d) > 50) show(cur + (d < 0 ? 1 : -1)); });
})();
