// Fills prices and contact details from config.js, and runs the mobile menu.
(function () {
  const C = window.INVOTRACK_CONFIG || {};
  const $$ = (sel) => document.querySelectorAll(sel);
  const rupees = (n) => "₹" + Number(n).toLocaleString("en-IN");

  const waLink = (text) =>
    C.whatsappNumber && !/X/.test(C.whatsappNumber)
      ? "https://wa.me/" + C.whatsappNumber + "?text=" + encodeURIComponent(text)
      : null;
  const mailLink = (subject) =>
    C.supportEmail ? "mailto:" + C.supportEmail + "?subject=" + encodeURIComponent(subject) : null;

  // Plain text fields: <span data-cfg="supportEmail"></span>
  $$("[data-cfg]").forEach((el) => {
    const v = C[el.dataset.cfg];
    if (v) el.textContent = v;
  });

  // Email links: <a data-mail="Subject line">
  $$("[data-mail]").forEach((a) => {
    const href = mailLink(a.dataset.mail);
    if (href) a.href = href; else a.hidden = true;
  });

  // WhatsApp links: <a data-wa="Prefilled message">. Falls back to email.
  $$("[data-wa]").forEach((a) => {
    const href = waLink(a.dataset.wa) || mailLink(a.dataset.wa);
    if (href) a.href = href; else a.setAttribute("aria-disabled", "true");
  });

  // Play Store buttons
  $$("[data-play]").forEach((a) => {
    if (C.playStoreUrl) {
      a.href = C.playStoreUrl;
      a.target = "_blank";
      a.rel = "noopener";
    } else {
      a.removeAttribute("href");
      a.setAttribute("aria-disabled", "true");
      const label = a.querySelector("[data-play-label]");
      if (label) label.textContent = "Coming soon on Google Play";
    }
  });

  // Pricing cards
  const plansEl = document.getElementById("plans");
  if (plansEl && Array.isArray(C.plans)) {
    const included = [
      "All 10 invoice types",
      "GST invoices with CGST, SGST & IGST",
      "Professional, Classic & Modern PDF templates",
      "Share invoices as PDF",
      "Expense tracker",
    ];
    plansEl.innerHTML = "";
    C.plans.forEach((p) => {
      const card = document.createElement("div");
      card.className = "plan" + (p.featured ? " featured" : "");
      const priceHtml = p.price > 0
        ? `<div class="price">${rupees(p.price)}<small>${p.period || ""}</small></div>`
        : `<div class="price ask">Contact us for pricing</div>`;
      const msg = `Hi, I'd like the InvoTrack ${p.name} plan.`;
      card.innerHTML = `
        ${p.featured ? '<span class="tag">BEST VALUE</span>' : ""}
        <h3>${p.name}</h3>
        <div class="note">${p.note || ""}</div>
        ${priceHtml}
        <ul>${included.map((i) => `<li>${i}</li>`).join("")}</ul>
        <a class="btn ${p.featured ? "btn-primary" : ""}">Get ${p.name}</a>`;
      const btn = card.querySelector("a.btn");
      const href = waLink(msg) || mailLink(msg);
      if (href) { btn.href = href; btn.target = "_blank"; btn.rel = "noopener"; }
      else btn.setAttribute("aria-disabled", "true");
      plansEl.appendChild(card);
    });
    const note = document.getElementById("gst-note");
    if (note && C.gstNote) note.textContent = C.gstNote + ". Your plan is activated on your account after payment.";
  }

  // Mobile menu
  const btn = document.querySelector(".menu-btn");
  const links = document.querySelector(".nav-links");
  if (btn && links) {
    btn.addEventListener("click", () => {
      const open = links.classList.toggle("open");
      btn.setAttribute("aria-expanded", String(open));
    });
    links.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        links.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      })
    );
  }

  $$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
})();
