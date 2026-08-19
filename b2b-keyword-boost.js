/* XIONXIO Clinical Instrument Atlas: strong B2B product authority, navy/cyan/coral system, no unsupported outcome claims. */
(function () {
  function setMeta(name, content) {
    var element = document.querySelector('meta[name="' + name + '"]');
    if (!element) {
      element = document.createElement('meta');
      element.name = name;
      document.head.appendChild(element);
    }
    element.content = content;
  }

  function setPageMeta(title, description, keywords) {
    document.title = normalizeTerm(title);
    setMeta('description', normalizeTerm(description));
    setMeta('keywords', normalizeTerm(keywords));
  }

  function normalizeTerm(value) {
    if (!value) return value;
    return value
      .replace(/MEDICAL PORTABLE MESH NEBULIZER/g, 'MEDICAL PORTABLE ULTRASONIC NEBULIZER')
      .replace(/Medical Portable Mesh Nebulizer/g, 'Medical Portable Ultrasonic Nebulizer')
      .replace(/medical portable mesh nebulizer/g, 'medical portable ultrasonic nebulizer')
      .replace(/HANDHELD MESH NEBULIZER/g, 'HANDHELD ULTRASONIC NEBULIZER')
      .replace(/Handheld Mesh Nebulizer/g, 'Handheld Ultrasonic Nebulizer')
      .replace(/handheld mesh nebulizer/g, 'handheld ultrasonic nebulizer')
      .replace(/PORTABLE MESH NEBULIZER/g, 'PORTABLE ULTRASONIC NEBULIZER')
      .replace(/Portable Mesh Nebulizer/g, 'Portable Ultrasonic Nebulizer')
      .replace(/portable mesh nebulizer/g, 'portable ultrasonic nebulizer')
      .replace(/MESH NEBULIZER/g, 'ULTRASONIC NEBULIZER')
      .replace(/Mesh Nebulizer/g, 'Ultrasonic Nebulizer')
      .replace(/mesh nebulizer/g, 'ultrasonic nebulizer');
  }

  function addStyles() {
    if (document.getElementById('xionxio-b2b-keyword-boost-style')) return;
    var style = document.createElement('style');
    style.id = 'xionxio-b2b-keyword-boost-style';
    style.textContent = `
      /* XIONXIO B2B keyword boost: strong product facts, clinical atlas typography, exact parameter hierarchy. */
      .xkb-section{position:relative;padding:clamp(70px,8vw,118px) 0;background:#f7fbfb;color:#102c3d;overflow:hidden}.xkb-section:before{content:'';position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg,rgba(10,70,172,.055) 1px,transparent 1px),linear-gradient(rgba(10,70,172,.04) 1px,transparent 1px);background-size:54px 54px;mask-image:linear-gradient(90deg,transparent,black 18%,black 82%,transparent)}.xkb-shell{position:relative;z-index:1;width:min(1120px,calc(100% - 56px));margin:auto}.xkb-head{display:grid;grid-template-columns:minmax(0,1fr) minmax(240px,.45fr);gap:46px;align-items:end}.xkb-kicker{margin:0 0 15px;color:#0a46ac;font:700 10px/1.25 var(--m-mono,monospace);letter-spacing:.13em}.xkb-title{max-width:780px;margin:0;color:#102c3d;font:400 clamp(40px,5vw,70px)/1.02 var(--m-serif,Georgia,serif);letter-spacing:-.05em}.xkb-title em{color:#0a46ac;font-style:normal}.xkb-copy{margin:0;color:#526d77;font-size:15px;line-height:1.72}.xkb-fact-grid{position:relative;z-index:1;display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:48px;background:#cfe0e4;box-shadow:0 22px 44px rgba(14,48,66,.09)}.xkb-fact{min-height:164px;padding:23px 22px;background:#fff}.xkb-fact b{display:block;color:#0a46ac;font:400 clamp(30px,3.4vw,48px)/.98 var(--m-serif,Georgia,serif);letter-spacing:-.055em}.xkb-fact span{display:block;margin-top:13px;color:#264958;font:700 9px/1.4 var(--m-mono,monospace);letter-spacing:.085em}.xkb-fact small{display:block;margin-top:8px;color:#71848d;font-size:10px;line-height:1.5}.xkb-triad{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:20px}.xkb-card{position:relative;padding:29px 27px 30px;background:#102c3d;color:#fff;overflow:hidden}.xkb-card:after{content:'';position:absolute;width:160px;height:160px;right:-70px;bottom:-74px;border:1px solid rgba(188,235,237,.3);border-radius:50%;box-shadow:0 0 0 32px rgba(188,235,237,.045)}.xkb-card i{position:relative;z-index:1;display:block;width:29px;height:2px;background:#bcebed}.xkb-card strong{position:relative;z-index:1;display:block;margin-top:21px;font:400 27px/1.05 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.xkb-card p{position:relative;z-index:1;margin:13px 0 0;color:#c5d8de;font-size:12px;line-height:1.62}.xkb-detail{margin-top:40px;padding:clamp(29px,4vw,51px);background:#fff;border:1px solid #d7e5e8;box-shadow:0 18px 40px rgba(16,44,61,.06)}.xkb-detail-grid{display:grid;grid-template-columns:.82fr 1.18fr;gap:42px;align-items:start}.xkb-detail h2{margin:0;color:#102c3d;font:400 clamp(31px,3.7vw,52px)/1.04 var(--m-serif,Georgia,serif);letter-spacing:-.045em}.xkb-detail p{margin:16px 0 0;color:#526b76;font-size:14px;line-height:1.7}.xkb-spec-table{width:100%;border-collapse:collapse}.xkb-spec-table tr{border-bottom:1px solid #dce7e9}.xkb-spec-table tr:first-child{border-top:1px solid #dce7e9}.xkb-spec-table th,.xkb-spec-table td{padding:13px 0;text-align:left;vertical-align:top}.xkb-spec-table th{width:43%;color:#66808a;font:600 9px/1.3 var(--m-mono,monospace);letter-spacing:.075em}.xkb-spec-table td{color:#123e64;font-size:13px;font-weight:700}.xkb-cta{display:inline-flex;align-items:center;justify-content:center;margin-top:25px;min-height:48px;padding:0 18px;background:#ff6558;color:#fff;font:700 9px/1 var(--m-mono,monospace);letter-spacing:.06em;text-decoration:none;box-shadow:6px 6px 0 #d6eef0;transition:transform .18s cubic-bezier(.23,1,.32,1),box-shadow .18s ease}.xkb-cta:hover{transform:translate(3px,3px);box-shadow:3px 3px 0 #d6eef0}.xkb-faq{margin-top:20px;padding:clamp(30px,4.3vw,56px);background:#eaf4f5}.xkb-faq h2{margin:0;max-width:660px;color:#102c3d;font:400 clamp(31px,3.7vw,51px)/1.05 var(--m-serif,Georgia,serif);letter-spacing:-.045em}.xkb-faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;margin-top:29px;background:#cadde1}.xkb-faq-item{padding:23px 24px;background:#f9fcfc}.xkb-faq-item b{display:block;color:#0a46ac;font:700 10px/1.4 var(--m-mono,monospace);letter-spacing:.055em}.xkb-faq-item p{margin:11px 0 0;color:#526c76;font-size:12px;line-height:1.64}.pn-proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:22px;background:rgba(183,229,232,.27);border:1px solid rgba(183,229,232,.27)}.pn-proof{padding:11px 10px;background:rgba(1,33,62,.22)}.pn-proof b{display:block;color:#bcebed;font:400 22px/1 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.pn-proof span{display:block;margin-top:6px;color:#d5f5f6;font:700 7px/1.25 var(--m-mono,monospace);letter-spacing:.07em}.pn-stamp strong{display:block;margin-top:9px;color:#0a46ac;font:700 8px/1.35 var(--m-mono,monospace);letter-spacing:.06em}@media(max-width:860px){.xkb-shell{width:min(100% - 34px,690px)}.xkb-head,.xkb-detail-grid{grid-template-columns:1fr;gap:22px}.xkb-fact-grid,.xkb-triad{grid-template-columns:1fr}.xkb-fact{min-height:auto}.xkb-faq-grid{grid-template-columns:1fr}.pn-proof-grid{max-width:420px}}@media(max-width:500px){.xkb-section{padding:54px 0}.xkb-shell{width:min(100% - 28px,470px)}.xkb-title{font-size:41px}.xkb-copy{font-size:13px}.xkb-fact{padding:19px}.xkb-card{padding:24px 21px}.xkb-detail,.xkb-faq{padding:23px 20px}.xkb-faq-item{padding:19px}.pn-proof{padding:10px 8px}.pn-proof b{font-size:19px}}
    `;
    document.head.appendChild(style);
  }

  function addOemStyles() {
    if (document.getElementById('xionxio-oem-rebuild-style')) return;
    var style = document.createElement('style');
    style.id = 'xionxio-oem-rebuild-style';
    style.textContent = `
      /* XIONXIO OEM/ODM rebuild: clinical instrument atlas, project-entry clarity, tabular order tiers. */
      .xoem-section{background:#f7fbfb}.xoem-hero{display:grid;grid-template-columns:minmax(0,1fr) minmax(230px,.48fr);gap:50px;align-items:end}.xoem-hero h2{max-width:700px;margin:0;color:#102c3d;font:400 clamp(42px,5vw,72px)/1.01 var(--m-serif,Georgia,serif);letter-spacing:-.06em}.xoem-hero h2 em{color:#0a46ac;font-style:normal}.xoem-hero p{max-width:450px;margin:17px 0 0;color:#526b76;font-size:15px;line-height:1.7}.xoem-hero-side{padding:25px;background:#102c3d;color:#fff;box-shadow:9px 9px 0 #bcebed}.xoem-hero-side span{display:block;color:#bcebed;font:700 9px/1.35 var(--m-mono,monospace);letter-spacing:.1em}.xoem-hero-side b{display:block;margin-top:14px;font:400 36px/1 var(--m-serif,Georgia,serif);letter-spacing:-.05em}.xoem-hero-side small{display:block;margin-top:11px;color:#c7d8dd;font-size:11px;line-height:1.55}.xoem-tier{margin-top:47px;background:#fff;border:1px solid #d4e4e7;box-shadow:0 20px 42px rgba(16,44,61,.08)}.xoem-tier-top{display:flex;justify-content:space-between;gap:25px;align-items:end;padding:31px 34px 25px;background:#102c3d;color:#fff}.xoem-tier-top h3{margin:0;font:400 clamp(29px,3.4vw,45px)/1.05 var(--m-serif,Georgia,serif);letter-spacing:-.045em}.xoem-tier-top p{max-width:330px;margin:0;color:#c7d8dd;font-size:12px;line-height:1.6}.xoem-table-scroll{overflow-x:auto}.xoem-table{width:100%;min-width:760px;border-collapse:collapse}.xoem-table th{padding:15px 19px;background:#eaf3f4;color:#4e6872;text-align:left;font:700 9px/1.3 var(--m-mono,monospace);letter-spacing:.1em}.xoem-table td{padding:22px 19px;border-top:1px solid #dce8ea;color:#4f6873;font-size:12px;line-height:1.55;vertical-align:top}.xoem-table td:first-child{color:#102c3d;font:400 25px/1 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.xoem-table strong{color:#0a46ac;font:700 12px/1.35 var(--m-mono,monospace);letter-spacing:.04em}.xoem-table tr:nth-child(3){background:#f3fafb}.xoem-chip{display:inline-block;padding:5px 8px;background:#ff6558;color:#fff;font:700 8px/1 var(--m-mono,monospace);letter-spacing:.06em}.xoem-tier-note{padding:17px 24px;border-top:1px solid #dce8ea;color:#627b84;font-size:11px;line-height:1.62}.xoem-tier-note b{color:#102c3d}.xoem-mode-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:1px;margin-top:22px;background:#b9d7dd}.xoem-mode{padding:34px 32px;background:#fff}.xoem-mode span{display:block;color:#0a46ac;font:700 9px/1.3 var(--m-mono,monospace);letter-spacing:.1em}.xoem-mode h3{margin:16px 0 0;color:#102c3d;font:400 36px/1 var(--m-serif,Georgia,serif);letter-spacing:-.05em}.xoem-mode p{margin:16px 0 0;color:#58707a;font-size:13px;line-height:1.66}.xoem-mode ul{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin:20px 0 0;padding:0;list-style:none}.xoem-mode li{color:#345361;font:700 9px/1.45 var(--m-mono,monospace);letter-spacing:.035em}.xoem-mode li:before{content:'— ';color:#ff6558}.xoem-capability-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:22px;background:#c7dee2}.xoem-capability{min-height:186px;padding:26px 22px;background:#eaf4f5}.xoem-capability i{display:block;width:24px;height:2px;background:#ff6558}.xoem-capability b{display:block;margin-top:22px;color:#102c3d;font:400 24px/1.08 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.xoem-capability p{margin:12px 0 0;color:#58717a;font-size:11px;line-height:1.58}.xoem-flow{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:22px;border:1px solid #d7e5e8}.xoem-step{min-height:184px;padding:24px 20px;border-right:1px solid #d7e5e8;background:#fff}.xoem-step:last-child{border-right:0}.xoem-step span{display:block;color:#ff6558;font:700 10px/1 var(--m-mono,monospace);letter-spacing:.08em}.xoem-step b{display:block;margin-top:22px;color:#102c3d;font:400 24px/1.07 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.xoem-step p{margin:12px 0 0;color:#607780;font-size:11px;line-height:1.55}.xoem-language{margin-top:22px;padding:32px;background:#102c3d;color:#fff}.xoem-language h3{margin:0;color:#fff;font:400 clamp(30px,3.3vw,45px)/1.06 var(--m-serif,Georgia,serif);letter-spacing:-.045em}.xoem-language-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:25px;background:rgba(188,235,237,.22)}.xoem-language-item{padding:18px 16px;background:rgba(255,255,255,.04)}.xoem-language-item b{display:block;color:#bcebed;font:700 9px/1.38 var(--m-mono,monospace);letter-spacing:.07em}.xoem-language-item span{display:block;margin-top:9px;color:#e2f1f4;font-size:11px;line-height:1.52}.xoem-final{margin-top:22px;padding:clamp(30px,5vw,56px);background:linear-gradient(135deg,#0a46ac,#102c3d);color:#fff;text-align:center}.xoem-final p{max-width:600px;margin:0 auto;color:#cfe7ee;font-size:14px;line-height:1.68}.xoem-final h3{margin:13px auto 0;max-width:680px;color:#fff;font:400 clamp(34px,4.2vw,58px)/1.02 var(--m-serif,Georgia,serif);letter-spacing:-.055em}.xoem-final .xkb-cta{margin-top:26px;background:#ff6558;box-shadow:6px 6px 0 rgba(188,235,237,.6)}@media(max-width:860px){.xoem-hero{grid-template-columns:1fr;gap:28px}.xoem-capability-grid,.xoem-flow,.xoem-language-grid{grid-template-columns:repeat(2,1fr)}.xoem-step:nth-child(2){border-right:0}.xoem-step:nth-child(-n+2){border-bottom:1px solid #d7e5e8}.xoem-tier-top{display:block}.xoem-tier-top p{margin-top:13px}}@media(max-width:560px){.xoem-hero h2{font-size:43px}.xoem-tier-top{padding:26px 22px}.xoem-mode-grid,.xoem-capability-grid,.xoem-flow,.xoem-language-grid{grid-template-columns:1fr}.xoem-mode{padding:28px 23px}.xoem-mode ul{grid-template-columns:1fr}.xoem-capability{min-height:0}.xoem-step{border-right:0;border-bottom:1px solid #d7e5e8}.xoem-step:last-child{border-bottom:0}.xoem-step:nth-child(2){border-bottom:1px solid #d7e5e8}.xoem-tier-note{padding:16px 20px}}
    `;
    document.head.appendChild(style);
  }

  function updateGlobalProductLanguage() {
    var note = document.querySelector('.note-product');
    if (note) note.textContent = 'PORTABLE ULTRASONIC NEBULIZER';
    document.querySelectorAll('.footer-status span').forEach(function (item) {
      if (item.textContent.indexOf('PORTABLE ULTRASONIC NEBULIZER') > -1 || item.textContent.indexOf('PORTABLE MESH NEBULIZER') > -1) item.textContent = 'XIONXIO PORTABLE ULTRASONIC NEBULIZER';
    });
  }

  function normalizeVisibleTerminology() {
    var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (node) { return node.parentElement && node.parentElement.closest('script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }
    });
    var node;
    while (node = walker.nextNode()) node.nodeValue = normalizeTerm(node.nodeValue);
    document.querySelectorAll('[alt],[title],[aria-label]').forEach(function (element) {
      ['alt','title','aria-label'].forEach(function (attribute) {
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, normalizeTerm(element.getAttribute(attribute)));
      });
    });
    document.querySelectorAll('.brand.brand-xionxio small').forEach(function (item) { item.textContent = 'PORTABLE ULTRASONIC NEBULIZER BRAND'; });
    document.title = normalizeTerm(document.title);
  }

  function updateHomeNarrative() {
    var section = document.querySelector('.pa-narrative');
    if (!section) return;
    if (section.dataset.keywordBoostReady) return;
    section.dataset.keywordBoostReady = 'true';
    var label = section.querySelector('.pn-portable .pn-label');
    var heading = section.querySelector('.pn-portable h3');
    var copy = section.querySelector('.pn-portable p');
    var product = section.querySelector('.pn-product');
    var end = section.querySelector('.pn-end p');
    var cta = section.querySelector('.pn-cta');
    if (label) label.textContent = 'XIONXIO PORTABLE ULTRASONIC NEBULIZER';
    if (heading) heading.innerHTML = 'Not made to wait.<br><em>Made to move.</em>';
    if (copy) copy.textContent = 'A lightweight handheld nebulizer format for buyers who want more than a generic device: they want a product their retail team can demonstrate, their customers can understand and their brand can take to market.';
    if (product && !product.classList.contains('pn-use-scene') && !product.querySelector('.pn-proof-grid')) {
      var proofs = document.createElement('div');
      proofs.className = 'pn-proof-grid';
      proofs.innerHTML = '<div class="pn-proof"><b>92 g</b><span>NET WEIGHT</span></div><div class="pn-proof"><b>600 mAh</b><span>BUILT-IN BATTERY</span></div><div class="pn-proof"><b>Φ26.5 mm</b><span>SLIM PROFILE</span></div>';
      product.appendChild(proofs);
    }
    var journey = section.querySelector('.pn-journey');
    if (journey) journey.innerHTML = '<article><i></i><b>Lightweight to carry</b><span>Approx. 92 g gives distributors an immediate portable product advantage to demonstrate.</span></article><article><i></i><b>Built for moving channels</b><span>A slim handheld mesh nebulizer format for pharmacy, home-care, travel-minded and online retail stories.</span></article><article><i></i><b>Ready for your market</b><span>Start with ZY01BG1-2 product information, then discuss distribution, OEM/ODM and private-label projects.</span></article>';
    if (end) end.innerHTML = 'A lighter portable mesh nebulizer platform<br>your channel can take to market.';
    if (cta) {
      cta.href = 'contact.html?type=product-file';
      cta.textContent = 'REQUEST ZY01BG1-2 PRODUCT INFORMATION';
    }
    var img = section.querySelector('.pn-product img');
    if (img) img.alt = 'XIONXIO ZY01BG1-2 lightweight portable mesh nebulizer with slim handheld profile';
  }

  function canonicalizeHomeLaunch() {
    if (document.body.dataset.page !== 'home') return;
    setPageMeta('Medical Portable Ultrasonic Nebulizer Manufacturer | XIONXIO', 'XIONXIO ZY01BG1-2 medical portable ultrasonic nebulizer for distributors, importers, OEM/ODM and private-label teams. Lightweight handheld format with a stronger product story.', 'medical portable ultrasonic nebulizer, handheld ultrasonic nebulizer, portable ultrasonic nebulizer manufacturer, portable nebulizer OEM, private label nebulizer supplier');
    var hero = document.querySelector('.m-hero');
    if (hero) {
      var title = hero.querySelector('h1');
      var copy = hero.querySelector('.m-copy');
      var meta = hero.querySelector('.m-hero-meta');
      var image = hero.querySelector('img');
      var caption = hero.querySelector('figcaption');
      var card = hero.querySelector('.m-float-card');
      var kicker = hero.querySelector('.m-kicker');
      if (kicker) kicker.innerHTML = '<b>XIONXIO / 01</b> MEDICAL PORTABLE ULTRASONIC NEBULIZER';
      if (title) title.innerHTML = 'Medical portable ultrasonic nebulizers for <i>global supply.</i>';
      if (copy) copy.textContent = 'Focused on medical portable ultrasonic nebulizer R&D, with 3+ years of experience and 30+ patents. MOQ from 10 pcs with OEM/ODM, branding and packaging support; exported to 45+ markets, with regulatory documentation requirements available for discussion with distributors, importers and private-label teams.';
      if (meta) meta.innerHTML = '<span>MODEL / ZY01BG1-2</span><span>MANUFACTURER / GUANGXI ZEGANG TECHNOLOGY CO., LTD.</span><span>COOPERATION / GLOBAL SUPPLY & OEM</span>';
      if (image) image.alt = 'XIONXIO ZY01BG1-2 medical portable ultrasonic nebulizer with retail packaging and accessory configuration';
      if (caption) caption.textContent = 'ZY01BG1-2 · PRODUCT, PACKAGING & ACCESSORY CONFIGURATION';
      if (card) card.innerHTML = '<span>XIONXIO PORTABLE</span><b>Portable product edge</b><p>Distribution · Private label · OEM/ODM</p>';
    }
    var cooperation = document.querySelector('main > .m-section');
    if (cooperation) {
      var nodes = document.createTreeWalker(cooperation, NodeFilter.SHOW_TEXT, {acceptNode:function (node) { return node.parentElement && node.parentElement.closest('script,style') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT; }});
      var node;
      while (node = nodes.nextNode()) node.nodeValue = node.nodeValue.replace(/ZY018G-I-2|ZY018G-I|ZY018G/g, 'ZY01BG1-2').replace(/portable ultrasonic nebulizer/ig, 'portable mesh nebulizer');
      var productCopy = Array.prototype.find.call(cooperation.querySelectorAll('p'), function (item) { return item.textContent.indexOf('Ask about') > -1; });
      if (productCopy) productCopy.textContent = 'Ask about ZY01BG1-2, request product information or discuss a sample for your product evaluation.';
    }
  }

  function canonicalizeSharedLaunchLanguage() {
    document.querySelectorAll('.brand.brand-xionxio small').forEach(function (item) { item.textContent = 'PORTABLE MESH NEBULIZER BRAND'; });
    document.querySelectorAll('.footer-status span').forEach(function (item, index) {
      if (index === 0) item.textContent = 'XIONXIO PORTABLE MESH NEBULIZER';
      if (index === 1) item.textContent = 'GLOBAL SUPPLY · OEM/ODM · PRIVATE LABEL';
      if (index === 2) item.textContent = 'MANUFACTURED BY GUANGXI ZEGANG';
    });
    document.querySelectorAll('.footer-col a').forEach(function (link) {
      if (/ZY018|ZY01BG1-1/i.test(link.textContent)) {
        link.href = 'product-detail.html';
        link.textContent = 'ZY01BG1-2';
      }
      if (/Portable nebulizer models/i.test(link.textContent)) link.textContent = 'Portable mesh nebulizers';
      if (/product file/i.test(link.textContent)) link.textContent = 'Request product information ↗';
    });
    document.querySelectorAll('.footer-col').forEach(function (column) {
      if (/PRODUCT RANGE/i.test(column.textContent)) {
        var modelLinks = Array.prototype.filter.call(column.querySelectorAll('a'), function (link) { return link.textContent.trim() === 'ZY01BG1-2'; });
        modelLinks.slice(1).forEach(function (link) { link.remove(); });
      }
    });
    var footerBottom = document.querySelectorAll('.footer-bottom span');
    if (footerBottom[0]) footerBottom[0].textContent = '© ' + new Date().getFullYear() + ' XIONXIO. Manufactured by Guangxi Zegang Technology Co., Ltd.';
    if (footerBottom[1]) footerBottom[1].textContent = 'Portable mesh nebulizer supply · OEM/ODM · Private label.';
  }

  function addAboutSection() {
    if (document.querySelector('[data-xkb-about]')) return;
    setPageMeta('About XIONXIO | Portable Mesh Nebulizer Manufacturer', 'Meet XIONXIO and Guangxi Zegang Technology Co., Ltd., the manufacturer behind the ZY01BG1-2 portable mesh nebulizer platform for global B2B partners.', 'about portable mesh nebulizer manufacturer, Guangxi Zegang Technology, handheld nebulizer supplier, medical nebulizer OEM');
    var title = document.querySelector('.m-page-copy h1');
    var copy = document.querySelector('.m-page-copy .m-copy');
    var kicker = document.querySelector('.m-page-copy .m-kicker');
    if (kicker) kicker.innerHTML = '<b>ABOUT / 01</b> XIONXIO & GUANGXI ZEGANG';
    if (title) title.textContent = 'A focused portable mesh nebulizer partner for global B2B teams.';
    if (copy) copy.textContent = 'XIONXIO is built around ZY01BG1-2 and the manufacturing support of Guangxi Zegang Technology Co., Ltd. for distributors, importers and private-label projects.';
    var anchor = document.querySelector('.m-page-hero') || document.querySelector('main');
    var section = document.createElement('section');
    section.className = 'xkb-section'; section.dataset.xkbAbout = 'true';
    section.innerHTML = '<div class="xkb-shell"><div class="xkb-head"><div><p class="xkb-kicker">MANUFACTURER / PRODUCT / MARKET</p><h2 class="xkb-title">One product focus. <em>A clearer way to work together.</em></h2></div><p class="xkb-copy">We help B2B buyers start with a product they can position, then move naturally into supply, OEM/ODM and private-label conversations.</p></div><div class="xkb-triad"><article class="xkb-card"><i></i><strong>Product<br>focused.</strong><p>ZY01BG1-2 gives buyers a lightweight portable mesh nebulizer platform with a clear 92 g, slim handheld story.</p></article><article class="xkb-card"><i></i><strong>Partner<br>ready.</strong><p>Work with Guangxi Zegang Technology Co., Ltd. on distribution, product presentation and market needs.</p></article><article class="xkb-card"><i></i><strong>Built for<br>your market.</strong><p>Bring your channel, brand direction and project plan to a direct OEM/ODM or private-label conversation.</p></article></div><div class="xkb-detail"><div class="xkb-detail-grid"><div><p class="xkb-kicker">START A PRODUCT CONVERSATION</p><h2>From model interest to market action.</h2><p>Begin with ZY01BG1-2, then tell us where and how you plan to bring it to market.</p><a class="xkb-cta" href="contact.html?type=general">CONTACT XIONXIO ↗</a></div><div><table class="xkb-spec-table"><tr><th>BRAND</th><td>XIONXIO</td></tr><tr><th>MANUFACTURER</th><td>Guangxi Zegang Technology Co., Ltd.</td></tr><tr><th>PRODUCT PLATFORM</th><td>ZY01BG1-2</td></tr><tr><th>COOPERATION</th><td>Distribution / OEM / ODM / Private Label</td></tr></table></div></div></div></div></section>';
    anchor.insertAdjacentElement('afterend', section);
  }

  function addQualitySection() {
    if (document.querySelector('[data-xkb-quality]')) return;
    setPageMeta('Manufacturing Support | XIONXIO Portable Mesh Nebulizer', 'Explore XIONXIO manufacturing support for portable mesh nebulizer distribution, OEM/ODM and private-label projects.', 'portable mesh nebulizer manufacturer, medical nebulizer supplier, OEM ODM nebulizer factory, private label nebulizer');
    var title = document.querySelector('.m-page-copy h1');
    var copy = document.querySelector('.m-page-copy .m-copy');
    var kicker = document.querySelector('.m-page-copy .m-kicker');
    if (kicker) kicker.innerHTML = '<b>MANUFACTURING / 01</b> BUILT FOR B2B PARTNERSHIP';
    if (title) title.textContent = 'Manufacturing support behind a stronger portable product offer.';
    if (copy) copy.textContent = 'XIONXIO and Guangxi Zegang Technology Co., Ltd. support distributor, OEM/ODM and private-label conversations around ZY01BG1-2.';
    var anchor = document.querySelector('.m-page-hero') || document.querySelector('main');
    var section = document.createElement('section');
    section.className = 'xkb-section'; section.dataset.xkbQuality = 'true';
    section.innerHTML = '<div class="xkb-shell"><div class="xkb-head"><div><p class="xkb-kicker">B2B MANUFACTURING SUPPORT</p><h2 class="xkb-title">Bring a product plan. <em>Build a market story.</em></h2></div><p class="xkb-copy">A stronger B2B conversation starts when product, packaging, brand direction and market goals move in the same direction.</p></div><div class="xkb-triad"><article class="xkb-card"><i></i><strong>Product<br>platform.</strong><p>Start with ZY01BG1-2 and its lightweight portable mesh nebulizer format.</p></article><article class="xkb-card"><i></i><strong>Market<br>direction.</strong><p>Share your country, channel and commercial goal to shape the right cooperation discussion.</p></article><article class="xkb-card"><i></i><strong>Direct<br>cooperation.</strong><p>Move into supply, OEM/ODM or private-label project planning with the manufacturer behind the product.</p></article></div><div class="xkb-detail"><div class="xkb-detail-grid"><div><p class="xkb-kicker">READY TO TALK?</p><h2>Let the product lead the conversation.</h2><p>Request information on ZY01BG1-2, then tell us how you want to build its place in your market.</p><a class="xkb-cta" href="contact.html?type=general">START A B2B CONVERSATION ↗</a></div><div><table class="xkb-spec-table"><tr><th>FOCUS</th><td>Portable Mesh Nebulizer</td></tr><tr><th>MODEL</th><td>ZY01BG1-2</td></tr><tr><th>PARTNER ROUTES</th><td>Distribution / OEM / ODM / Private Label</td></tr><tr><th>MANUFACTURER</th><td>Guangxi Zegang Technology Co., Ltd.</td></tr></table></div></div></div></div></section>';
    anchor.insertAdjacentElement('afterend', section);
  }

  function addProductsSection() {
    if (document.querySelector('[data-xkb-products]')) return;
    setPageMeta('Portable Mesh Nebulizer Manufacturer | XIONXIO', 'XIONXIO by Guangxi Zegang Technology Co., Ltd. offers lightweight portable mesh nebulizer solutions for distributors, importers, OEM/ODM and private-label projects.', 'portable mesh nebulizer manufacturer, lightweight nebulizer, rechargeable mesh nebulizer, medical nebulizer supplier, portable nebulizer OEM, private label mesh nebulizer');
    var heroTitle = document.querySelector('.m-page-copy h1');
    var heroCopy = document.querySelector('.m-page-copy .m-copy');
    var heroKicker = document.querySelector('.m-page-copy .m-kicker');
    if (heroKicker) heroKicker.innerHTML = '<b>PRODUCTS / 01</b> PORTABLE MESH NEBULIZER RANGE';
    if (heroTitle) heroTitle.textContent = 'Explore a lighter portable mesh nebulizer platform for your next B2B product line.';
    if (heroCopy) heroCopy.textContent = 'Built around ZY01BG1-2, XIONXIO gives overseas distributors, importers and private-label teams a lightweight handheld mesh nebulizer format with a stronger story for product listings, retail demonstrations and distribution projects.';
    var anchor = document.querySelector('.m-catalog') || document.querySelector('main');
    if (!anchor) return;
    var section = document.createElement('section');
    section.className = 'xkb-section';
    section.dataset.xkbProducts = 'true';
    section.innerHTML = '<div class="xkb-shell"><div class="xkb-head"><div><p class="xkb-kicker">ZY01BG1-2 / LIGHTWEIGHT PORTABLE MESH NEBULIZER</p><h2 class="xkb-title">One product format. <em>A stronger B2B story.</em></h2></div><p class="xkb-copy">Portable mesh nebulizer buyers are not looking for another vague catalogue device. They are looking for a product that is easy to position, easy to explain and ready for a real distribution or private-label conversation.</p></div><div class="xkb-fact-grid"><article class="xkb-fact"><b>92 g</b><span>APPROX. NET WEIGHT</span><small>A lighter handheld device format for everyday portability.</small></article><article class="xkb-fact"><b>Φ26.5 × 213.5</b><span>MM SLIM PROFILE</span><small>Elongated, one-hand product form with a distinctive shelf presence.</small></article><article class="xkb-fact"><b>600 mAh</b><span>BUILT-IN BATTERY</span><small>Rechargeable product architecture for a more mobile daily routine.</small></article><article class="xkb-fact"><b>≥2 μL/s</b><span>ATOMIZATION RATE</span><small>A clear technical point for your product listing and sales conversation.</small></article></div><div class="xkb-triad"><article class="xkb-card"><i></i><strong>Lightweight<br>to carry.</strong><p>Turn approx. 92 g into the first sentence a retailer remembers about your portable nebulizer offer.</p></article><article class="xkb-card"><i></i><strong>Strong in<br>your channel.</strong><p>Use a slim handheld mesh nebulizer format across distributor, pharmacy, home-care and online product stories.</p></article><article class="xkb-card"><i></i><strong>Ready for<br>private label.</strong><p>Start with a direct manufacturer conversation around your market and project.</p></article></div></div></section>';
    anchor.insertAdjacentElement('afterend', section);
  }

  function canonicalizeProductsCard() {
    Array.prototype.forEach.call(document.querySelectorAll('article.m-model'), function (card) {
      var title = card.querySelector('h2');
      if (!title || title.textContent.indexOf('ZY01BG1-2') === -1) return;
      var caption = card.querySelector('figcaption');
      var copy = card.querySelector('.m-model-copy');
      var link = card.querySelector('a');
      if (caption) caption.textContent = 'PORTABLE MESH NEBULIZER / ZY01BG1-2';
      if (copy) {
        var paragraph = copy.querySelector('p');
        var list = copy.querySelector('ul');
        if (paragraph) paragraph.textContent = 'The lightweight portable mesh nebulizer reference for partners who want a stronger distribution, retail and private-label story from the first product conversation.';
        if (list) list.innerHTML = '<li>Approx. 92 g net weight</li><li>Φ26.5 × 213.5 mm slim handheld profile</li><li>Built-in 3.7 V / 600 mAh battery</li><li>Documented atomization rate: ≥2 μL/s</li>';
      }
      if (link) {
        link.href = 'product-detail.html';
        link.textContent = 'View ZY01BG1-2 product file ↗';
      }
    });
  }

  function canonicalizeDetailRecord() {
    var record = document.querySelector('.m-detail');
    if (!record) return;
    var kicker = record.querySelector('.m-kicker');
    var image = record.querySelector('img');
    var facts = record.querySelector('.m-detail-facts');
    if (kicker) kicker.innerHTML = '<b>MODEL RECORD / ZY01BG1-2</b> PORTABLE MESH NEBULIZER';
    if (image) image.alt = 'XIONXIO ZY01BG1-2 lightweight portable mesh nebulizer with slim handheld profile';
    if (facts) facts.innerHTML = '<div><small>MANUFACTURER</small><b>Guangxi Zegang Technology Co., Ltd.</b></div><div><small>MODEL</small><b>ZY01BG1-2</b></div><div><small>NET WEIGHT</small><b>Approx. 92 g</b></div><div><small>PORTABLE FORMAT</small><b>Φ26.5 × 213.5 mm / 600 mAh</b></div>';
    var review = record.querySelector('.m-note');
    if (review) review.remove();
    if (document.querySelector('[data-xkb-detail]')) {
      var tabs = record.querySelector('.m-tabs');
      if (tabs) tabs.remove();
      ['#source-specs', '#structure', '#documents', '#claim-boundary'].forEach(function (selector) {
        var block = record.querySelector(selector);
        if (block) block.remove();
      });
      Array.prototype.forEach.call(record.querySelectorAll('h3'), function (heading) {
        if (/side-by-side model review/i.test(heading.textContent)) heading.parentElement.remove();
      });
    }
    var boost = document.querySelector('[data-xkb-detail]');
    if (boost) {
      Array.prototype.forEach.call(boost.querySelectorAll('.xkb-faq-item'), function (item) {
        var question = item.querySelector('b');
        var answer = item.querySelector('p');
        if (question && answer && question.textContent.indexOf('PRIVATE-LABEL') > -1) answer.textContent = 'ZY01BG1-2 is manufactured by Guangxi Zegang Technology Co., Ltd. Start with the product file, then discuss private-label, OEM/ODM and target-market requirements for your project.';
      });
    }
    document.querySelectorAll('a[href="zy018g-i-2.html"]').forEach(function (link) {
      link.href = 'contact.html?type=product-file';
      link.textContent = 'Request the ZY01BG1-2 product file ↗';
    });
  }

  function addDetailSections() {
    setPageMeta('ZY01BG1-2 Medical Portable Ultrasonic Nebulizer | 92 g Lightweight Handheld Design', 'Discover the XIONXIO ZY01BG1-2 medical portable ultrasonic nebulizer: approx. 92 g net weight, slim handheld profile, built-in 600 mAh battery and product information for global partners.', 'ZY01BG1-2 medical portable ultrasonic nebulizer, handheld ultrasonic nebulizer, portable ultrasonic nebulizer specifications, medical nebulizer manufacturer, portable nebulizer supplier');
    canonicalizeDetailRecord();
    if (document.querySelector('[data-xkb-detail]')) return;
    var title = document.querySelector('.m-detail-intro h1') || document.querySelector('main h1');
    var lead = document.querySelector('.m-detail-lead');
    if (title) title.textContent = 'ZY01BG1-2 portable mesh nebulizer platform.';
    if (lead) lead.textContent = 'A lightweight handheld nebulizer for distributors, importers, OEM/ODM teams and private-label projects that need a stronger portable product story.';
    var anchor = document.querySelector('#source-specs') || document.querySelector('.m-spec-layout') || document.querySelector('main');
    if (!anchor) return;
    var section = document.createElement('section');
    section.className = 'xkb-section';
    section.dataset.xkbDetail = 'true';
    section.innerHTML = '<div class="xkb-shell"><div class="xkb-detail"><div class="xkb-detail-grid"><div><p class="xkb-kicker">ZY01BG1-2 / PORTABLE MESH NEBULIZER FOR DISTRIBUTION & PRIVATE LABEL</p><h2>Lightweight enough to carry. Strong enough to lead your category.</h2><p>ZY01BG1-2 gives XIONXIO partners a product format that is instantly different from bulky desktop systems. Approx. 92 g in hand, a slim Φ26.5 × 213.5 mm profile and a built-in 600 mAh battery create a lightweight portable mesh nebulizer platform your sales team can show, explain and position with confidence.</p><a class="xkb-cta" href="contact.html?type=product-file">REQUEST ZY01BG1-2 PRODUCT INFORMATION ↗</a></div><div><table class="xkb-spec-table"><tr><th>MODEL</th><td>ZY01BG1-2</td></tr><tr><th>PRODUCT TYPE</th><td>Portable Mesh Nebulizer</td></tr><tr><th>NET WEIGHT</th><td>Approx. 92 g</td></tr><tr><th>DIMENSIONS</th><td>Φ26.5 × 213.5 mm</td></tr><tr><th>BUILT-IN BATTERY</th><td>3.7 V / 600 mAh</td></tr><tr><th>MAIN UNIT INPUT</th><td>5 V DC / 2 A</td></tr><tr><th>ATOMIZATION RATE</th><td>≥2 μL/s</td></tr><tr><th>MANUFACTURER</th><td>Guangxi Zegang Technology Co., Ltd.</td></tr></table></div></div></div><div class="xkb-faq"><p class="xkb-kicker">PORTABLE MESH NEBULIZER FAQ</p><h2>Questions buyers ask before they bring a new portable format to market.</h2><div class="xkb-faq-grid"><article class="xkb-faq-item"><b>WHAT MAKES ZY01BG1-2 A STRONG DISTRIBUTION PRODUCT?</b><p>Its selling story begins with a weight and form factor a buyer can immediately understand: approx. 92 g, slim handheld profile and a rechargeable built-in battery.</p></article><article class="xkb-faq-item"><b>IS THIS A PORTABLE MESH NEBULIZER FOR PRIVATE-LABEL PROJECTS?</b><p>ZY01BG1-2 is manufactured by Guangxi Zegang Technology Co., Ltd. Discuss private-label, OEM/ODM and target-market needs directly with the manufacturer.</p></article><article class="xkb-faq-item"><b>WHY DOES A LIGHTWEIGHT HANDHELD FORMAT MATTER IN RETAIL?</b><p>Weight and product shape are understood before a buyer reads a long specification. A lighter handheld device gives retail teams a clear portable-care story to demonstrate.</p></article><article class="xkb-faq-item"><b>WHAT SHOULD A MEDICAL NEBULIZER IMPORTER REQUEST NEXT?</b><p>Request product information, then start a conversation about packaging, labels and the commercial plan for your market.</p></article></div></div></div></section>';
    anchor.insertAdjacentElement('beforebegin', section);
    var guide = document.createElement('section');
    guide.className = 'xkb-section';
    guide.dataset.xkbTerminology = 'true';
    guide.innerHTML = '<div class="xkb-shell"><div class="xkb-detail"><p class="xkb-kicker">PRODUCT LANGUAGE, APPLIED WHERE IT MATTERS</p><h2>One product. Four useful names.</h2><p>Each term gives buyers a different, practical way to understand ZY01BG1-2 without changing the product itself.</p><table class="xkb-spec-table"><tr><th>MEDICAL PORTABLE ULTRASONIC NEBULIZER</th><td>Used as the formal product name on the product page and in SEO titles because it states the medical category, portable form and ultrasonic technology together.</td></tr><tr><th>PORTABLE ULTRASONIC NEBULIZER</th><td>Used in product range and OEM/ODM pages where the emphasis is the portable ultrasonic platform and cooperation opportunity.</td></tr><tr><th>HANDHELD ULTRASONIC NEBULIZER</th><td>Used in product stories and retail-facing copy where the slim, approx. 92 g one-hand format is the key buyer benefit.</td></tr><tr><th>PORTABLE NEBULIZER</th><td>Used in everyday journey and channel language because it is short, natural and easy for distributors to use with their customers.</td></tr></table></div></div></section>';
    section.insertAdjacentElement('afterend', guide);
  }

  function addOemSection() {
    if (document.querySelector('[data-xkb-oem]')) return;
    addOemStyles();
    setPageMeta('Medical Portable Ultrasonic Nebulizer OEM/ODM | MOQ from 10 pcs | XIONXIO', 'Start an XIONXIO medical portable ultrasonic nebulizer OEM/ODM or private-label project from 10 pcs. Explore ZY01BG1-2 product, branding and market discussions with Guangxi Zegang Technology Co., Ltd.', 'medical portable ultrasonic nebulizer OEM, portable ultrasonic nebulizer private label, handheld ultrasonic nebulizer manufacturer, low MOQ nebulizer OEM, medical nebulizer supplier');
    var heroTitle = document.querySelector('.m-page-copy h1');
    var heroCopy = document.querySelector('.m-page-copy .m-copy');
    var heroKicker = document.querySelector('.m-page-copy .m-kicker');
    if (heroKicker) heroKicker.innerHTML = '<b>OEM/ODM / 01</b> MEDICAL PORTABLE ULTRASONIC NEBULIZER';
    if (heroTitle) heroTitle.textContent = 'Build a medical portable ultrasonic nebulizer line with a manufacturer partner.';
    if (heroCopy) heroCopy.textContent = 'Start with ZY01BG1-2: a lightweight 92 g handheld ultrasonic nebulizer platform for distributors, importers and private-label teams building a stronger product story.';
    var anchor = document.querySelector('#partnership') || document.querySelector('main');
    if (!anchor) return;
    var section = document.createElement('section');
    section.className = 'xkb-section xoem-section';
    section.dataset.xkbOem = 'true';
    section.innerHTML = '<div class="xkb-shell"><div class="xoem-hero"><div><p class="xkb-kicker">LOW-MOQ ENTRY / MEDICAL PORTABLE ULTRASONIC NEBULIZER OEM</p><h2>Start with <em>10 pcs.</em><br>Build a product line that can grow with your market.</h2><p>ZY01BG1-2 gives distributors, importers and private-label teams a clear entry into the medical portable ultrasonic nebulizer category: a lightweight 92 g handheld format, a defined model platform and a direct conversation with Guangxi Zegang Technology Co., Ltd.</p><a class="xkb-cta" href="contact.html?type=oem">START YOUR OEM/ODM PROJECT ↗</a></div><aside class="xoem-hero-side"><span>PROJECT ENTRY POINT</span><b>MOQ from 10 pcs</b><small>Begin with the product, your market direction and the cooperation route you want to explore.</small></aside></div><div class="xoem-tier"><div class="xoem-tier-top"><div><p class="xkb-kicker" style="color:#bcebed">FLEXIBLE PROJECT TIERS</p><h3>Start small. Scale with clarity.</h3></div><p>A practical view of how a medical portable ultrasonic nebulizer project can move from first discussion to larger commercial planning.</p></div><div class="xoem-table-scroll"><table class="xoem-table"><thead><tr><th>PROJECT STAGE</th><th>QUANTITY</th><th>BEST FOR</th><th>PROJECT CONVERSATION</th></tr></thead><tbody><tr><td>Entry</td><td><strong>From 10 pcs</strong><br><span class="xoem-chip">START HERE</span></td><td>Product evaluation and first brand direction</td><td>ZY01BG1-2 product information, target market and project brief.</td></tr><tr><td>Pilot</td><td><strong>500–999 pcs</strong></td><td>Initial branded product programme</td><td>Brand presentation, packaging direction and channel planning discussion.</td></tr><tr><td>Growth</td><td><strong>1,000–4,999 pcs</strong></td><td>Broader private-label or distributor rollout</td><td>Commercial route, market requirements and product presentation alignment.</td></tr><tr><td>Scale</td><td><strong>5,000+ pcs</strong></td><td>Longer-term category planning</td><td>Ongoing supply, range planning and market-specific project discussion.</td></tr></tbody></table></div><p class="xoem-tier-note"><b>MOQ from 10 pcs</b> is the project-entry point requested for this page. Final configuration, scope and commercial quotation follow a direct discussion about your market, branding and product requirements.</p></div><div class="xoem-mode-grid"><article class="xoem-mode"><span>OEM / ORIGINAL EQUIPMENT MANUFACTURING</span><h3>Your market direction. Our product platform.</h3><p>Start from ZY01BG1-2 when you have a product position, retail channel or brand route in mind and want to discuss a focused medical portable ultrasonic nebulizer project.</p><ul><li>Existing model platform</li><li>Private-label discussion</li><li>Packaging direction</li><li>Market-facing product story</li></ul></article><article class="xoem-mode"><span>ODM / ORIGINAL DESIGN MANUFACTURING</span><h3>Bring a brief. Shape the project conversation.</h3><p>For teams mapping a new product direction, the discussion begins with intended market, target user, visual language and requested project scope.</p><ul><li>Product-direction brief</li><li>Brand and channel context</li><li>Requested configuration dialogue</li><li>Manufacturer project review</li></ul></article></div><div class="xoem-capability-grid"><article class="xoem-capability"><i></i><b>Product platform</b><p>Use ZY01BG1-2 as the starting model: approx. 92 g, Φ26.5 × 213.5 mm, 600 mAh and ≥2 μL/s.</p></article><article class="xoem-capability"><i></i><b>Brand expression</b><p>Bring your brand direction for device presentation, retail packaging, labels and the product information journey.</p></article><article class="xoem-capability"><i></i><b>Channel fit</b><p>Tell us how you plan to reach distributors, clinic procurement, pharmacy, home-care or online retail audiences.</p></article><article class="xoem-capability"><i></i><b>Project clarity</b><p>Share market, quantity, brief and desired route early so the conversation starts with the right information.</p></article></div><div class="xoem-flow"><article class="xoem-step"><span>01</span><b>Share your market</b><p>Country, sales channel, product positioning and the outcome you want to build.</p></article><article class="xoem-step"><span>02</span><b>Choose your route</b><p>Distributor supply, OEM, ODM or private-label project discussion.</p></article><article class="xoem-step"><span>03</span><b>Align the platform</b><p>Review ZY01BG1-2 product information, branding direction and project requirements.</p></article><article class="xoem-step"><span>04</span><b>Request your quote</b><p>Move into a model-specific commercial conversation with the manufacturer.</p></article></div><div class="xoem-language"><p class="xkb-kicker" style="color:#bcebed">KEYWORDS, USED WHERE BUYERS EXPECT THEM</p><h3>Search terms with a practical job on the page.</h3><div class="xoem-language-grid"><div class="xoem-language-item"><b>MEDICAL PORTABLE ULTRASONIC NEBULIZER</b><span>Formal product category in the Hero and page title.</span></div><div class="xoem-language-item"><b>PORTABLE ULTRASONIC NEBULIZER OEM</b><span>Placed in order tiers and project entry language.</span></div><div class="xoem-language-item"><b>HANDHELD ULTRASONIC NEBULIZER</b><span>Used where 92 g and the lightweight form factor matter.</span></div><div class="xoem-language-item"><b>PRIVATE-LABEL MEDICAL NEBULIZER</b><span>Used in branding and channel cooperation sections.</span></div></div></div><div class="xkb-faq"><p class="xkb-kicker">OEM/ODM QUESTIONS, ANSWERED</p><h2>Start the right conversation before you start the project.</h2><div class="xkb-faq-grid"><article class="xkb-faq-item"><b>WHAT IS THE MINIMUM ORDER QUANTITY?</b><p>The project-entry MOQ shown on this page is from 10 pcs. Share your market and requested scope to discuss the right next step.</p></article><article class="xkb-faq-item"><b>WHAT IS THE DIFFERENCE BETWEEN OEM AND ODM?</b><p>OEM begins from an existing product platform and your market direction. ODM begins from a broader product-direction brief and project scope discussion.</p></article><article class="xkb-faq-item"><b>WHAT SHOULD I PREPARE FOR A PRIVATE-LABEL DISCUSSION?</b><p>Bring your target market, expected quantity, brand direction, desired channel and any product presentation requirements.</p></article><article class="xkb-faq-item"><b>WHAT PRODUCT SHOULD WE START WITH?</b><p>Start with ZY01BG1-2 product information, then decide how the medical portable ultrasonic nebulizer platform can fit your market plan.</p></article></div></div><div class="xoem-final"><p>FROM PRODUCT INFORMATION TO A MARKET-READY PROJECT CONVERSATION</p><h3>Bring your brief. Let the product platform open the next discussion.</h3><a class="xkb-cta" href="contact.html?type=oem">GET A LOW-MOQ OEM/ODM QUOTE ↗</a></div></div></section>';
    anchor.insertAdjacentElement('afterend', section);
  }

  function addOemNineBlockStyles() {
    if (document.getElementById('xionxio-oem-nine-block-style')) return;
    var style = document.createElement('style');
    style.id = 'xionxio-oem-nine-block-style';
    style.textContent = `
      /* XIONXIO OEM/ODM nine-block long page: each block has one buyer decision to solve. */
      .xoem-nine{display:grid;gap:20px}.xoem-block{position:relative;overflow:hidden}.xoem-nb-head{display:flex;gap:28px;align-items:baseline;justify-content:space-between;margin-bottom:26px}.xoem-nb-num{flex:0 0 auto;color:#ff6558;font:700 10px/1 var(--m-mono,monospace);letter-spacing:.1em}.xoem-nb-title{margin:0;color:#102c3d;font:400 clamp(31px,3.8vw,54px)/1.04 var(--m-serif,Georgia,serif);letter-spacing:-.05em}.xoem-nb-copy{max-width:470px;margin:0;color:#5b737d;font-size:13px;line-height:1.68}.xoem-low-moq{padding:clamp(32px,5vw,62px);background:#eef7f8;border:1px solid #d8e7e9}.xoem-low-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:42px;align-items:center}.xoem-giant{margin:0;color:#102c3d;font:400 clamp(52px,7vw,102px)/.88 var(--m-serif,Georgia,serif);letter-spacing:-.08em}.xoem-giant b{color:#0a46ac;font-weight:400}.xoem-low-grid p{max-width:590px;margin:21px 0 0;color:#526e78;font-size:15px;line-height:1.7}.xoem-entry-card{padding:28px;background:#102c3d;color:#fff;box-shadow:10px 10px 0 #bcebed}.xoem-entry-card small{display:block;color:#bcebed;font:700 9px/1.3 var(--m-mono,monospace);letter-spacing:.1em}.xoem-entry-card b{display:block;margin-top:13px;font:400 44px/1 var(--m-serif,Georgia,serif);letter-spacing:-.06em}.xoem-entry-card p{margin:13px 0 0;color:#cfdee2;font-size:11px;line-height:1.58}.xoem-entry-points{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:32px;background:#c5dce1}.xoem-entry-points div{padding:15px 16px;background:#fff}.xoem-entry-points b{display:block;color:#0a46ac;font:700 9px/1.3 var(--m-mono,monospace);letter-spacing:.08em}.xoem-entry-points span{display:block;margin-top:6px;color:#617881;font-size:11px;line-height:1.45}.xoem-tier-block{padding:clamp(30px,4vw,50px);background:#102c3d}.xoem-tier-block .xoem-nb-title{color:#fff}.xoem-tier-block .xoem-nb-copy{color:#c7d9de}.xoem-tier-block .xoem-table{margin-top:27px;background:#fff}.xoem-tier-block .xoem-tier-note{padding:15px 0 0;border:0;color:#c6dce1}.xoem-compare{padding:clamp(30px,4vw,52px);background:#fff;border:1px solid #d8e6e9}.xoem-compare-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;margin-top:29px;background:#c8dfe3}.xoem-compare-item{padding:34px 31px;background:#fbfefe}.xoem-compare-item:nth-child(2){background:#e8f4f6}.xoem-compare-item small{display:block;color:#0a46ac;font:700 9px/1.3 var(--m-mono,monospace);letter-spacing:.1em}.xoem-compare-item h3{margin:18px 0 0;color:#102c3d;font:400 40px/1 var(--m-serif,Georgia,serif);letter-spacing:-.06em}.xoem-compare-item p{margin:18px 0 0;color:#57717a;font-size:13px;line-height:1.68}.xoem-checks{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin:23px 0 0;padding:0;list-style:none}.xoem-checks li{color:#385762;font:700 9px/1.45 var(--m-mono,monospace);letter-spacing:.03em}.xoem-checks li:before{content:'✓ ';color:#ff6558}.xoem-custom{padding:clamp(30px,4vw,52px);background:#f8fbfb}.xoem-custom-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;margin-top:29px;background:#bfdce2}.xoem-custom-card{min-height:188px;padding:26px 23px;background:#fff}.xoem-custom-card i{display:block;width:25px;height:2px;background:#ff6558}.xoem-custom-card b{display:block;margin-top:21px;color:#102c3d;font:400 25px/1.08 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.xoem-custom-card p{margin:11px 0 0;color:#607880;font-size:11px;line-height:1.6}.xoem-platform{padding:clamp(30px,4vw,52px);background:linear-gradient(115deg,#0a46ac 0%,#102c3d 58%,#123b52 100%);color:#fff}.xoem-platform .xoem-nb-title{color:#fff}.xoem-platform .xoem-nb-copy{color:#d7e9ee}.xoem-platform-table{display:grid;grid-template-columns:repeat(4,1fr);gap:1px;margin-top:28px;background:rgba(188,235,237,.24)}.xoem-platform-table div{padding:22px 17px;background:rgba(255,255,255,.05)}.xoem-platform-table b{display:block;color:#bcebed;font:700 9px/1.35 var(--m-mono,monospace);letter-spacing:.08em}.xoem-platform-table span{display:block;margin-top:10px;color:#fff;font:400 24px/1.1 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.xoem-proof{padding:clamp(30px,4vw,52px);background:#fff;border:1px solid #d8e6e9}.xoem-proof-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:0;margin-top:28px;border-top:1px solid #d8e6e9;border-left:1px solid #d8e6e9}.xoem-proof-cell{min-height:165px;padding:25px 20px;border-right:1px solid #d8e6e9;border-bottom:1px solid #d8e6e9}.xoem-proof-cell b{display:block;color:#0a46ac;font:400 43px/1 var(--m-serif,Georgia,serif);letter-spacing:-.06em}.xoem-proof-cell span{display:block;margin-top:13px;color:#3a5964;font:700 9px/1.4 var(--m-mono,monospace);letter-spacing:.07em}.xoem-proof-cell small{display:block;margin-top:8px;color:#71878f;font-size:10px;line-height:1.5}.xoem-process{padding:clamp(30px,4vw,52px);background:#eef7f8}.xoem-process-rail{display:grid;grid-template-columns:repeat(5,1fr);margin-top:29px}.xoem-process-step{position:relative;min-height:204px;padding:21px 18px 18px;border-right:1px solid #c8dfe3}.xoem-process-step:last-child{border-right:0}.xoem-process-step:before{content:'';position:absolute;top:0;left:18px;width:32px;height:2px;background:#ff6558}.xoem-process-step b{display:block;margin-top:35px;color:#102c3d;font:400 23px/1.08 var(--m-serif,Georgia,serif);letter-spacing:-.04em}.xoem-process-step span{display:block;margin-top:12px;color:#607780;font-size:11px;line-height:1.55}.xoem-faq-block{padding:clamp(30px,4vw,52px);background:#fff;border:1px solid #d8e6e9}.xoem-faq-block .xkb-faq-grid{margin-top:26px}.xoem-cta-block{padding:clamp(38px,6vw,74px);background:#102c3d;color:#fff;text-align:center}.xoem-cta-block .xoem-nb-num{color:#bcebed}.xoem-cta-block h2{max-width:740px;margin:14px auto 0;color:#fff;font:400 clamp(38px,4.8vw,66px)/1.02 var(--m-serif,Georgia,serif);letter-spacing:-.06em}.xoem-cta-block p{max-width:610px;margin:18px auto 0;color:#cde0e4;font-size:14px;line-height:1.7}.xoem-cta-block .xkb-cta{margin-top:27px}@media(max-width:860px){.xoem-low-grid{grid-template-columns:1fr}.xoem-custom-grid{grid-template-columns:repeat(2,1fr)}.xoem-platform-table,.xoem-proof-grid{grid-template-columns:repeat(2,1fr)}.xoem-process-rail{grid-template-columns:repeat(2,1fr)}.xoem-process-step:nth-child(2),.xoem-process-step:nth-child(4){border-right:0}.xoem-process-step:nth-child(-n+4){border-bottom:1px solid #c8dfe3}}@media(max-width:560px){.xoem-nb-head{display:block}.xoem-nb-copy{margin-top:12px}.xoem-low-moq,.xoem-tier-block,.xoem-compare,.xoem-custom,.xoem-platform,.xoem-proof,.xoem-process,.xoem-faq-block{padding:28px 21px}.xoem-entry-points,.xoem-compare-grid,.xoem-custom-grid,.xoem-platform-table,.xoem-proof-grid,.xoem-process-rail{grid-template-columns:1fr}.xoem-compare-item{padding:28px 22px}.xoem-process-step{min-height:0;border-right:0;border-bottom:1px solid #c8dfe3}.xoem-process-step:nth-child(-n+4){border-bottom:1px solid #c8dfe3}.xoem-process-step:last-child{border-bottom:0}.xoem-process-step:before{left:0}.xoem-platform-table div{padding:19px 15px}.xoem-proof-cell{min-height:132px}.xoem-giant{font-size:68px}}
    `;
    document.head.appendChild(style);
  }

  function addOemTypographyCalibration() {
    if (document.getElementById('xionxio-oem-typography-calibration')) return;
    var style = document.createElement('style');
    style.id = 'xionxio-oem-typography-calibration';
    style.textContent = `
      /* OEM reference-type calibration: 36px hero, 30px section heading, 18px card/table title, 14px body. */
      body[data-page="oem"] .m-page-copy h1{max-width:660px!important;font-size:36px!important;line-height:1.05!important;letter-spacing:-.032em!important}body[data-page="oem"] .m-page-copy .m-copy{max-width:610px!important;font-size:14px!important;line-height:1.65!important}body[data-page="oem"] .m-page-copy .m-kicker{font-size:10px!important;line-height:1.35!important;letter-spacing:.075em!important}.xoem-nb-num{font-size:10px!important;line-height:1.35!important;letter-spacing:.1em!important}.xoem-nb-title{font-size:30px!important;line-height:1.2!important;letter-spacing:-.03em!important}.xoem-nb-copy{font-size:14px!important;line-height:1.65!important}.xoem-low-grid .xoem-giant{font-size:38px!important;line-height:1.02!important;letter-spacing:-.045em!important}.xoem-low-grid p{font-size:14px!important;line-height:1.65!important}.xoem-entry-card b{font-size:30px!important;letter-spacing:-.035em!important}.xoem-entry-card p,.xoem-entry-points span{font-size:12px!important;line-height:1.55!important}.xoem-entry-points b{font-size:9px!important}.xoem-tier-top h3{font-size:24px!important;line-height:1.15!important}.xoem-tier-top p{font-size:12px!important}.xoem-table th{font-size:9px!important;line-height:1.35!important}.xoem-table td{font-size:12px!important;line-height:1.55!important}.xoem-table td:first-child{font-size:18px!important;line-height:1.25!important;letter-spacing:-.02em!important}.xoem-table strong{font-size:11px!important}.xoem-tier-note{font-size:11px!important;line-height:1.55!important}.xoem-compare-item h3{font-size:24px!important;line-height:1.14!important;letter-spacing:-.03em!important}.xoem-compare-item p{font-size:13px!important;line-height:1.64!important}.xoem-checks li{font-size:9px!important}.xoem-custom-card{min-height:164px!important}.xoem-custom-card b{font-size:18px!important;line-height:1.25!important;letter-spacing:-.015em!important}.xoem-custom-card p{font-size:11px!important;line-height:1.58!important}.xoem-platform-table span{font-size:18px!important;line-height:1.2!important;letter-spacing:-.02em!important}.xoem-proof-cell{min-height:144px!important}.xoem-proof-cell b{font-size:32px!important;letter-spacing:-.04em!important}.xoem-proof-cell span{font-size:9px!important;line-height:1.35!important}.xoem-process-step{min-height:172px!important}.xoem-process-step b{font-size:18px!important;line-height:1.22!important;letter-spacing:-.015em!important}.xoem-process-step span{font-size:11px!important;line-height:1.55!important}.xoem-cta-block h2{font-size:32px!important;line-height:1.12!important;letter-spacing:-.035em!important}.xoem-cta-block p{font-size:14px!important;line-height:1.65!important}.xoem-section .xkb-cta{min-height:44px!important;padding:0 16px!important;font-size:10px!important;line-height:1!important;letter-spacing:.055em!important}@media(max-width:860px){body[data-page="oem"] .m-page-copy h1{font-size:36px!important}.xoem-nb-title{font-size:29px!important}.xoem-low-grid .xoem-giant{font-size:38px!important}}@media(max-width:560px){body[data-page="oem"] .m-page-copy h1{font-size:34px!important;line-height:1.08!important}.xoem-nb-title{font-size:28px!important;line-height:1.18!important}.xoem-low-grid .xoem-giant{font-size:36px!important}.xoem-entry-card b{font-size:28px!important}.xoem-cta-block h2{font-size:30px!important}.xoem-section .xkb-cta{font-size:9px!important}}
    `;
    document.head.appendChild(style);
  }

  function upgradeOemNineBlocks() {
    var section = document.querySelector('[data-xkb-oem]');
    if (!section || section.dataset.xkbOemNine === 'true') return;
    addOemNineBlockStyles();
    addOemTypographyCalibration();
    section.dataset.xkbOemNine = 'true';
    section.innerHTML = '<div class="xkb-shell xoem-nine">'
      + '<section class="xoem-block xoem-low-moq"><div class="xoem-low-grid"><div><p class="xoem-nb-num">01 / LOW-MOQ PROJECT ENTRY</p><h2 class="xoem-giant">Start with<br><b>10 pcs.</b></h2><p>A product conversation should not begin with a warehouse-sized commitment. Start from ZY01BG1-2, define your market and decide which medical portable ultrasonic nebulizer route makes sense for your brand or channel.</p><a class="xkb-cta" href="contact.html?type=oem">START YOUR OEM/ODM PROJECT ↗</a></div><aside class="xoem-entry-card"><small>PROJECT ENTRY POINT</small><b>MOQ from 10 pcs</b><p>A focused first conversation around product information, target market, brand direction and the cooperation route you want to explore.</p></aside></div><div class="xoem-entry-points"><div><b>PRODUCT</b><span>Start with ZY01BG1-2</span></div><div><b>MARKET</b><span>Bring your country and channel</span></div><div><b>PROJECT</b><span>Choose your cooperation route</span></div></div></section>'
      + '<section class="xoem-block xoem-tier-block"><div class="xoem-nb-head"><div><p class="xoem-nb-num" style="color:#bcebed">02 / FLEXIBLE PROJECT TIERS</p><h2 class="xoem-nb-title">A clear path from first discussion to commercial planning.</h2></div><p class="xoem-nb-copy">The entry quantity and commercial tiers have different jobs. The table makes that difference easy for a buyer to understand.</p></div><div class="xoem-table-scroll"><table class="xoem-table"><thead><tr><th>PROJECT STAGE</th><th>QUANTITY</th><th>BEST FOR</th><th>PROJECT CONVERSATION</th></tr></thead><tbody><tr><td>Entry</td><td><strong>From 10 pcs</strong><br><span class="xoem-chip">START HERE</span></td><td>Product evaluation and first brand direction</td><td>ZY01BG1-2 product information, target market and project brief.</td></tr><tr><td>Pilot</td><td><strong>500–999 pcs</strong></td><td>Initial branded product programme</td><td>Brand presentation, packaging direction and channel planning discussion.</td></tr><tr><td>Growth</td><td><strong>1,000–4,999 pcs</strong></td><td>Broader private-label or distributor rollout</td><td>Commercial route, market requirements and product presentation alignment.</td></tr><tr><td>Scale</td><td><strong>5,000+ pcs</strong></td><td>Longer-term category planning</td><td>Ongoing supply, range planning and market-specific project discussion.</td></tr></tbody></table></div><p class="xoem-tier-note"><b>MOQ from 10 pcs</b> is the user-requested project-entry point. Final configuration, scope and commercial quotation follow a direct discussion about your market, branding and product requirements.</p></section>'
      + '<section class="xoem-block xoem-compare"><div class="xoem-nb-head"><div><p class="xoem-nb-num">03 / OEM OR ODM</p><h2 class="xoem-nb-title">Two routes. One product category.</h2></div><p class="xoem-nb-copy">The page separates existing-platform cooperation from a broader product-direction discussion so buyers can start in the right place.</p></div><div class="xoem-compare-grid"><article class="xoem-compare-item"><small>OEM / ORIGINAL EQUIPMENT MANUFACTURING</small><h3>Your market direction. Our product platform.</h3><p>Start from ZY01BG1-2 when you have a product position, retail channel or brand route in mind and want to discuss a private-label medical nebulizer project.</p><ul class="xoem-checks"><li>Existing model platform</li><li>Private-label discussion</li><li>Packaging direction</li><li>Market-facing product story</li></ul></article><article class="xoem-compare-item"><small>ODM / ORIGINAL DESIGN MANUFACTURING</small><h3>Bring a brief. Shape the project conversation.</h3><p>For teams mapping a new direction, the discussion begins with intended market, target user, visual language and requested project scope.</p><ul class="xoem-checks"><li>Product-direction brief</li><li>Brand and channel context</li><li>Configuration dialogue</li><li>Manufacturer project review</li></ul></article></div></section>'
      + '<section class="xoem-block xoem-custom"><div class="xoem-nb-head"><div><p class="xoem-nb-num">04 / CUSTOMIZATION CONVERSATION</p><h2 class="xoem-nb-title">Six details buyers bring to the first serious discussion.</h2></div><p class="xoem-nb-copy">Each card gives a project team a practical way to explain what they need without turning the page into a list of generic promises.</p></div><div class="xoem-custom-grid"><article class="xoem-custom-card"><i></i><b>Product focus</b><p>Begin with the ZY01BG1-2 handheld ultrasonic nebulizer platform and the role it should play in your range.</p></article><article class="xoem-custom-card"><i></i><b>Brand direction</b><p>Share logo, visual language and how you want the product to appear in your market.</p></article><article class="xoem-custom-card"><i></i><b>Packaging plan</b><p>Discuss retail packaging, labels, inserts and the product information journey.</p></article><article class="xoem-custom-card"><i></i><b>Channel context</b><p>Explain whether your focus is distribution, pharmacy, home-care, clinic procurement or online retail.</p></article><article class="xoem-custom-card"><i></i><b>Market brief</b><p>Bring country, buyer profile and product-positioning expectations to the project conversation.</p></article><article class="xoem-custom-card"><i></i><b>Quantity plan</b><p>Use the project tier that best matches your intended first step and commercial direction.</p></article></div></section>'
      + '<section class="xoem-block xoem-platform"><div class="xoem-nb-head"><div><p class="xoem-nb-num" style="color:#bcebed">05 / THE PRODUCT PLATFORM</p><h2 class="xoem-nb-title">A defined medical portable ultrasonic nebulizer, not a vague category pitch.</h2></div><p class="xoem-nb-copy">The collaboration starts from a named model and clear, confirmed product facts.</p></div><div class="xoem-platform-table"><div><b>MODEL</b><span>ZY01BG1-2</span></div><div><b>NET WEIGHT</b><span>Approx. 92 g</span></div><div><b>FORM FACTOR</b><span>Φ26.5 × 213.5 mm</span></div><div><b>BUILT-IN BATTERY</b><span>600 mAh</span></div></div></section>'
      + '<section class="xoem-block xoem-proof"><div class="xoem-nb-head"><div><p class="xoem-nb-num">06 / WHY XIONXIO</p><h2 class="xoem-nb-title">A focused manufacturer story buyers can take into a project meeting.</h2></div><p class="xoem-nb-copy">These are the existing XIONXIO company facts that support a product, channel and OEM/ODM conversation.</p></div><div class="xoem-proof-grid"><div class="xoem-proof-cell"><b>3+</b><span>YEARS R&D EXPERIENCE</span><small>Focused product-development foundation.</small></div><div class="xoem-proof-cell"><b>30+</b><span>GRANTED PATENTS</span><small>Existing innovation portfolio.</small></div><div class="xoem-proof-cell"><b>100w+</b><span>ANNUAL CAPACITY</span><small>Manufacturing scale stated by XIONXIO.</small></div><div class="xoem-proof-cell"><b>45+</b><span>EXPORT MARKETS</span><small>International channel experience.</small></div></div></section>'
      + '<section class="xoem-block xoem-process"><div class="xoem-nb-head"><div><p class="xoem-nb-num">07 / PROJECT PATH</p><h2 class="xoem-nb-title">A product project needs a visible next step at every stage.</h2></div><p class="xoem-nb-copy">The process stays focused on project definition and commercial discussion rather than invented production timing.</p></div><div class="xoem-process-rail"><article class="xoem-process-step"><span>01</span><b>Share your market</b><span>Country, sales channel, product positioning and expected first quantity.</span></article><article class="xoem-process-step"><span>02</span><b>Choose your route</b><span>Distributor supply, OEM, ODM or private-label project discussion.</span></article><article class="xoem-process-step"><span>03</span><b>Align the platform</b><span>Review ZY01BG1-2 product information and market-facing direction.</span></article><article class="xoem-process-step"><span>04</span><b>Define the brief</b><span>Bring branding, packaging and requested project scope into one conversation.</span></article><article class="xoem-process-step"><span>05</span><b>Request your quote</b><span>Move into a model-specific commercial discussion with the manufacturer.</span></article></div></section>'
      + '<section class="xoem-block xoem-faq-block"><div class="xoem-nb-head"><div><p class="xoem-nb-num">08 / PROCUREMENT FAQ</p><h2 class="xoem-nb-title">Answer the questions before they become barriers.</h2></div><p class="xoem-nb-copy">The FAQ deals with the questions that normally decide whether a buyer starts an OEM/ODM conversation.</p></div><div class="xkb-faq-grid"><article class="xkb-faq-item"><b>WHAT IS THE MINIMUM ORDER QUANTITY?</b><p>The project-entry MOQ shown on this page is from 10 pcs. Share your market and requested scope to discuss the right next step.</p></article><article class="xkb-faq-item"><b>WHAT IS THE DIFFERENCE BETWEEN OEM AND ODM?</b><p>OEM begins from an existing product platform and your market direction. ODM begins from a broader product-direction brief and project scope discussion.</p></article><article class="xkb-faq-item"><b>WHAT SHOULD I PREPARE FOR A PRIVATE-LABEL DISCUSSION?</b><p>Bring your target market, expected quantity, brand direction, desired channel and product presentation requirements.</p></article><article class="xkb-faq-item"><b>WHAT PRODUCT SHOULD WE START WITH?</b><p>Start with ZY01BG1-2 product information, then decide how the medical portable ultrasonic nebulizer platform can fit your market plan.</p></article></div></section>'
      + '<section class="xoem-block xoem-cta-block"><p class="xoem-nb-num">09 / START THE CONVERSATION</p><h2>Bring your brief. Let the product platform open the next discussion.</h2><p>Tell XIONXIO about your market, route, target quantity and product direction. Start with the model, then build the project around the information your team needs.</p><a class="xkb-cta" href="contact.html?type=oem">GET A LOW-MOQ OEM/ODM QUOTE ↗</a></section>'
      + '</div>';
  }

  function restoreManufacturerInBoosts() {
    var oem = document.querySelector('[data-xkb-oem]');
    if (oem) {
      Array.prototype.forEach.call(oem.querySelectorAll('p'), function (item) {
        if (item.textContent.indexOf('Work from model-specific information with XIONXIO') > -1) item.textContent = 'Work from model-specific information with Guangxi Zegang Technology Co., Ltd. as you define the commercial route.';
      });
    }
    canonicalizeDetailRecord();
  }

  function cleanLaunchContent() {
    document.querySelectorAll('[data-registration-record], [data-factory-depth]').forEach(function (item) { item.remove(); });
    document.querySelectorAll('main section').forEach(function (section) {
      var text = section.textContent || '';
      if (text.indexOf('The product questions buyers ask before commercial discussions') > -1 || text.indexOf('Answers for teams that need a controlled product decision') > -1 || text.indexOf('Values extracted from the supplied parameter image') > -1) section.remove();
    });
    if (document.body.dataset.page === 'home') {
      document.querySelectorAll('.m-fact-band, .m-platform').forEach(function (item) { item.remove(); });
      document.querySelectorAll('main > .m-section').forEach(function (section) {
        var text = section.textContent || '';
        if (text.indexOf('03 FROM PRODUCT INTEREST TO COOPERATION') > -1 || text.indexOf('04 PRODUCT & PARTNERSHIP RESOURCES') > -1 || text.indexOf('05 START A PRODUCT CONVERSATION') > -1) section.remove();
      });
    }
    if (document.body.dataset.page === 'products' && !document.querySelector('.m-detail-intro')) {
      document.querySelectorAll('main > section').forEach(function (section) {
        if (!section.classList.contains('m-page-hero') && !section.classList.contains('xkb-section')) section.remove();
      });
    }
    if (document.body.dataset.page === 'oem') {
      document.querySelectorAll('main > section').forEach(function (section) {
        if (!section.classList.contains('m-page-hero') && !section.classList.contains('xkb-section')) section.remove();
      });
    }
    if (document.body.dataset.page === 'about' || document.body.dataset.page === 'quality') {
      document.querySelectorAll('main > section').forEach(function (section) {
        if (!section.classList.contains('m-page-hero') && !section.classList.contains('xkb-section')) section.remove();
      });
    }
    document.querySelectorAll('main a').forEach(function (link) {
      if (/certificate|source image|document checklist/i.test(link.textContent)) link.remove();
    });
  }

  function init() {
    addStyles();
    updateGlobalProductLanguage();
    var page = document.body.dataset.page || '';
    cleanLaunchContent();
    canonicalizeSharedLaunchLanguage();
    normalizeVisibleTerminology();
    if (page === 'home') {
      updateHomeNarrative();
      canonicalizeHomeLaunch();
    }
    if (page === 'about') addAboutSection();
    if (page === 'quality') addQualitySection();
    if (page === 'oem') { addOemSection(); upgradeOemNineBlocks(); }
    if (page === 'products' && document.querySelector('.m-detail-intro')) addDetailSections();
    else if (page === 'products') {
      addProductsSection();
      canonicalizeProductsCard();
    }
    if (page === 'products' && document.querySelector('.m-detail-intro')) {
      addDetailSections();
      restoreManufacturerInBoosts();
    }
    if (page === 'oem') { restoreManufacturerInBoosts(); upgradeOemNineBlocks(); }
    canonicalizeSharedLaunchLanguage();
    canonicalizeHomeLaunch();
    normalizeVisibleTerminology();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
