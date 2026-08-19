/* XIONXIO portable chapter rewrite: human product story, not a claim-heavy comparison. */
(function () {
  function rewritePortableChapter() {
    var section = document.querySelector('[data-portable-advantage]');
    if (!section || section.dataset.narrativeRewriteReady) return;
    section.dataset.narrativeRewriteReady = 'true';
    document.querySelectorAll('.file-rail').forEach(function (rail) { rail.remove(); });
    section.className = 'pa pa-immersive pa-narrative';

    var style = document.createElement('style');
    style.id = 'xionxio-portable-narrative-style';
    style.textContent = `
      /* XIONXIO narrative portable chapter: fixed-place desktop format contrasted with carry-with-you form. */
      .pa-narrative { position: relative; overflow: hidden; padding: clamp(72px, 8vw, 126px) 0 clamp(68px, 7vw, 112px); background: linear-gradient(150deg, #f5fbfb 0%, #fbfdfc 43%, #eaf3f6 100%); color: #102c3d; }
      .pa-narrative::before { content: ''; position: absolute; inset: 0; pointer-events: none; background-image: radial-gradient(rgba(11, 57, 76, .10) 1px, transparent 1px); background-size: 20px 20px; mask-image: linear-gradient(90deg, transparent, black 18%, black 84%, transparent); opacity: .35; }
      .pn-wrap { position: relative; z-index: 1; width: min(1160px, calc(100% - 56px)); margin: auto; }
      .pn-compare-head { margin: 0 0 27px; text-align: center; opacity: 0; transform: translateY(18px); transition: opacity .6s cubic-bezier(.23,1,.32,1), transform .6s cubic-bezier(.23,1,.32,1); }
      .is-active .pn-compare-head { opacity: 1; transform: none; }
      .pn-compare-head h2 { margin: 0; color: #102c3d; font: 400 24px/1.14 var(--m-serif, Georgia, serif); letter-spacing: -.04em; }
      .pn-compare-head em { color: #0a46ac; font-style: normal; }
      @media (min-width: 861px) { .pn-compare-head h2 { white-space: nowrap; } }
      .pn-intro { display: grid; grid-template-columns: minmax(0, 1fr) 192px; gap: 30px; align-items: end; margin-bottom: 48px; opacity: 0; transform: translateY(28px); transition: opacity .72s cubic-bezier(.23,1,.32,1), transform .72s cubic-bezier(.23,1,.32,1); }
      .is-active .pn-intro { opacity: 1; transform: none; }
      .pn-eyebrow { display: flex; align-items: center; gap: 10px; margin: 0 0 16px; color: #0a46ac; font: 700 10px/1 var(--m-mono, monospace); letter-spacing: .13em; }
      .pn-eyebrow::before { content: '02'; display: grid; place-items: center; width: 36px; height: 36px; background: #0a46ac; color: #fff; font-size: 13px; }
      .pn-title { max-width: 790px; margin: 0; font: 400 clamp(43px, 5vw, 74px)/1.03 var(--m-serif, Georgia, serif); letter-spacing: -.055em; }
      .pn-title em { color: #0a46ac; font-style: normal; }
      .pn-copy { max-width: 650px; margin: 18px 0 0; color: #5d747d; font-size: 15px; line-height: 1.66; }
      .pn-stamp { justify-self: end; padding: 16px 0 15px 18px; border-left: 2px solid #c5ae58; color: #45616d; font: 600 9px/1.55 var(--m-mono, monospace); letter-spacing: .08em; }
      .pn-stamp b { display: block; color: #102c3d; font: 400 24px/1 var(--m-serif, Georgia, serif); letter-spacing: -.03em; }
      .pn-stage { position: relative; display: grid; grid-template-columns: .83fr 1.17fr; min-height: 570px; overflow: hidden; background: #102f42; box-shadow: 0 30px 64px rgba(15, 48, 67, .17); isolation: isolate; }
      .pn-stage::before { content: ''; position: absolute; z-index: -1; inset: 0; background: radial-gradient(circle at 76% 39%, rgba(109, 222, 228, .28), transparent 22%), linear-gradient(112deg, #203f50 0%, #17394c 43%, #073b9e 100%); }
      .pn-stage::after { content: ''; position: absolute; z-index: -1; width: 65%; height: 145%; top: -23%; left: 42%; border: 1px solid rgba(255,255,255,.14); border-radius: 50%; box-shadow: 0 0 0 58px rgba(255,255,255,.035), 0 0 0 116px rgba(255,255,255,.025); transform: rotate(-20deg); animation: pn-orbit 13s ease-in-out infinite; }
      .pn-desktop, .pn-portable { position: relative; overflow: hidden; }
      .pn-desktop { display: flex; flex-direction: column; justify-content: space-between; padding: 39px 35px 31px; border-right: 1px solid rgba(255,255,255,.17); background: linear-gradient(150deg, rgba(255,255,255,.11), rgba(255,255,255,.02)); opacity: 0; transform: translateX(-42px); transition: opacity .75s .12s cubic-bezier(.23,1,.32,1), transform .75s .12s cubic-bezier(.23,1,.32,1); }
      .pn-portable { display: grid; grid-template-columns: .98fr 1.02fr; align-items: stretch; padding: 39px 37px 32px 48px; opacity: 0; transform: translateX(42px); transition: opacity .75s .27s cubic-bezier(.23,1,.32,1), transform .75s .27s cubic-bezier(.23,1,.32,1); }
      .pn-portable.pn-portable-use-scene { opacity: 1; transform: none; transition: none; }
      .is-active .pn-desktop, .is-active .pn-portable { opacity: 1; transform: none; }
      .pn-label { display: block; margin-bottom: 12px; color: #b8d9df; font: 700 9px/1.2 var(--m-mono, monospace); letter-spacing: .13em; }
      .pn-desktop h3, .pn-portable h3 { margin: 0; font: 400 clamp(29px, 3vw, 45px)/1.04 var(--m-serif, Georgia, serif); letter-spacing: -.045em; }
      .pn-desktop h3 { max-width: 260px; color: #fff; }
      .pn-desktop h3 span { color: #b6ced6; }
      .pn-desktop p { max-width: 263px; margin: 15px 0 0; color: #c1d0d5; font-size: 12px; line-height: 1.62; }
      .pn-desktop-img { align-self: center; width: 94%; height: 234px; object-fit: contain; mix-blend-mode: screen; filter: grayscale(.92) contrast(.9) opacity(.74); transform: translateY(7px); transition: transform .55s cubic-bezier(.23,1,.32,1), filter .55s ease; }
      .pn-desktop:hover .pn-desktop-img { transform: translateY(-6px) scale(1.035); filter: grayscale(.42) contrast(1) opacity(.92); }
      .pn-reference { display: inline-flex; align-items: center; gap: 7px; width: max-content; padding: 8px 10px; background: rgba(255,255,255,.09); color: #cde0e5; font: 600 8px/1.2 var(--m-mono, monospace); letter-spacing: .06em; }
      .pn-reference::before { content: '↳'; font-size: 13px; color: #bddee3; }
      .pn-portable-copy { align-self: end; position: relative; z-index: 2; max-width: 327px; padding-bottom: 5px; }
      .pn-portable h3 { color: #fff; }
      .pn-portable h3 em { color: #91e0e6; font-style: normal; }
      .pn-portable p { margin: 15px 0 0; color: #d3e7ea; font-size: 13px; line-height: 1.64; }
      .pn-moments { display: flex; flex-wrap: wrap; gap: 7px; margin-top: 21px; }
      .pn-moments span { padding: 7px 9px; border: 1px solid rgba(201,242,244,.38); color: #dcfbfc; font: 600 8px/1 var(--m-mono, monospace); letter-spacing: .075em; transition: transform .22s cubic-bezier(.23,1,.32,1), background .22s ease; }
      .pn-moments span:hover { transform: translateY(-3px); background: rgba(173,238,239,.17); }
      .pn-product { position: relative; display: grid; place-items: center; min-height: 425px; perspective: 1000px; }
      .pn-product::before { content: ''; position: absolute; width: 226px; height: 226px; border-radius: 50%; background: radial-gradient(circle, rgba(255,255,255,.88) 0%, rgba(186,239,241,.43) 37%, transparent 71%); animation: pn-pulse 3.7s ease-in-out infinite; }
      .pn-product::after { content: ''; position: absolute; width: 258px; height: 70px; bottom: 51px; border-radius: 50%; background: rgba(2,28,68,.38); filter: blur(22px); }
      .pn-product img { position: relative; z-index: 1; width: min(92%, 322px); height: 366px; object-fit: contain; filter: drop-shadow(0 25px 20px rgba(0,20,51,.28)); transform: rotateY(-7deg) translateY(8px); animation: pn-float 5s ease-in-out infinite; transition: transform .55s cubic-bezier(.23,1,.32,1), filter .55s ease; }
      .pn-product:hover img { transform: rotateY(7deg) translateY(-10px) scale(1.04); filter: drop-shadow(0 35px 24px rgba(0,20,51,.35)); }
      .pn-product.pn-use-scene { display: block; min-height: 425px; margin: 0; overflow: hidden; background: #d9d2c9; }
      .pn-product.pn-use-scene::before, .pn-product.pn-use-scene::after { display: none; }
      .pn-product.pn-use-scene img { width: 100%; max-width: none; height: 100%; object-fit: cover; object-position: 50% 38%; filter: none; transform: none; animation: none; }
      .pn-product.pn-use-scene:hover img { transform: scale(1.025); filter: none; }
      .pn-journey { display: grid; grid-template-columns: 1.15fr 1fr 1fr; gap: 1px; margin-top: 0; background: rgba(16,44,61,.15); opacity: 0; transform: translateY(22px); transition: opacity .72s .48s cubic-bezier(.23,1,.32,1), transform .72s .48s cubic-bezier(.23,1,.32,1); }
      .is-active .pn-journey { opacity: 1; transform: none; }
      .pn-journey article { padding: 24px 25px 22px; background: rgba(255,255,255,.72); transition: background .22s ease, transform .22s cubic-bezier(.23,1,.32,1), box-shadow .22s ease; }
      .pn-journey article:hover { position: relative; z-index: 2; background: #fff; transform: translateY(-7px); box-shadow: 0 14px 25px rgba(16,44,61,.11); }
      .pn-journey i { display: block; width: 25px; height: 2px; margin-bottom: 14px; background: #0a46ac; }
      .pn-journey b { display: block; color: #163345; font-size: 13px; }
      .pn-journey span { display: block; margin-top: 7px; color: #71838b; font-size: 10px; line-height: 1.47; }
      .pn-end { display: flex; align-items: center; justify-content: space-between; gap: 28px; padding-top: 29px; opacity: 0; transform: translateY(18px); transition: opacity .72s .64s cubic-bezier(.23,1,.32,1), transform .72s .64s cubic-bezier(.23,1,.32,1); }
      .is-active .pn-end { opacity: 1; transform: none; }
      .pn-end p { max-width: 650px; margin: 0; color: #224f66; font: 400 clamp(24px, 2.55vw, 36px)/1.12 var(--m-serif, Georgia, serif); letter-spacing: -.04em; }
      .pn-cta { display: inline-flex; align-items: center; justify-content: center; min-width: 210px; padding: 16px 19px; background: #0a46ac; color: #fff; box-shadow: 8px 8px 0 #bcebed; font-size: 10px; font-weight: 700; letter-spacing: .06em; text-decoration: none; transition: transform .2s cubic-bezier(.23,1,.32,1), box-shadow .2s ease, background .2s ease; }
      .pn-cta:hover { transform: translate(4px,4px); background: #1456c4; box-shadow: 4px 4px 0 #bcebed; }
      @keyframes pn-orbit { 50% { transform: rotate(-10deg) translate(19px,-8px); } }
      @keyframes pn-pulse { 50% { transform: scale(1.16); opacity: .72; } }
      @keyframes pn-float { 50% { transform: rotateY(-7deg) translateY(-9px); } }
      @media (max-width: 860px) { .pn-wrap { width: min(100% - 34px, 690px); } .pn-intro { grid-template-columns: 1fr; gap: 19px; } .pn-stamp { justify-self: start; } .pn-stage { grid-template-columns: 1fr; } .pn-desktop { min-height: 430px; border-right: 0; border-bottom: 1px solid rgba(255,255,255,.17); } .pn-portable { grid-template-columns: 1fr; gap: 9px; padding: 38px 28px 28px; } .pn-portable-copy { order: 2; max-width: 100%; } .pn-product { order: 1; min-height: 350px; } .pn-product img { height: 324px; } .pn-journey { grid-template-columns: 1fr; } .pn-end { align-items: flex-start; flex-direction: column; } }
      @media (max-width: 500px) { .pa-narrative { padding: 55px 0 62px; } .pn-wrap { width: min(100% - 28px, 470px); } .pn-title { font-size: 42px; } .pn-copy { font-size: 13px; } .pn-stage { min-height: 0; } .pn-desktop { min-height: 390px; padding: 29px 22px; } .pn-desktop h3, .pn-portable h3 { font-size: 32px; } .pn-desktop-img { height: 210px; } .pn-portable { padding: 30px 22px 24px; } .pn-product { min-height: 313px; } .pn-product img { height: 290px; } .pn-journey article { padding: 20px; } .pn-end p { font-size: 27px; } .pn-cta { width: 100%; } }
      @media (prefers-reduced-motion: reduce) { .pa-narrative *, .pa-narrative::before, .pa-narrative::after { animation: none !important; transition: none !important; } .pn-intro, .pn-desktop, .pn-portable, .pn-journey, .pn-end { opacity: 1 !important; transform: none !important; } }
    `;
    document.head.appendChild(style);

    section.innerHTML = `
      <div class="pn-wrap">
        <header class="pn-compare-head">
          <h2 id="portable-advantage-title">Traditional Desktop Nebulizer <em>vs. XIONXIO Portable Ultrasonic Nebulizer</em></h2>
        </header>
        <section class="pn-stage" aria-label="Traditional desktop nebulizer and XIONXIO portable form comparison">
          <article class="pn-desktop">
            <div>
              <span class="pn-label">TRADITIONAL DESKTOP NEBULIZER</span>
              <h3>Good for a fixed space.<br><span>Usually left there.</span></h3>
              <p>It has a familiar place at home. But when a routine changes, a larger unit with its setup is not always the first thing someone wants to pack.</p>
            </div>
            <img class="pn-desktop-img" src="assets/generic-desktop-compressor-nebulizer.jpg" alt="Generic traditional desktop nebulizer used as a category visual reference">
            <span class="pn-reference">GENERIC DESKTOP CATEGORY VISUAL</span>
          </article>
          <article class="pn-portable pn-portable-use-scene">
            <div class="pn-portable-copy">
              <span class="pn-label">XIONXIO PORTABLE FORMAT</span>
              <h3>Pick it up.<br><em>Take it with you.</em></h3>
              <p>Compact hand-held form gives the product a simple place in an active day: from leaving home, to a workday, to a short trip away.</p>
              <div class="pn-moments"><span>COMMUTE</span><span>OFFICE</span><span>WEEKEND</span><span>FAMILY TRIP</span></div>
            </div>
            <figure class="pn-product pn-use-scene">
              <img src="assets/xionxio-family-use-scene.webp" alt="Family home-use scene showing a XIONXIO portable ultrasonic nebulizer" decoding="async" fetchpriority="high">
            </figure>
          </article>
        </section>
        <section class="pn-journey" aria-label="Everyday portable product moments">
          <article><i></i><b>Leaving home</b><span>A compact product is easier to think about before the door closes.</span></article>
          <article><i></i><b>Moving through the day</b><span>One clear carry-with-you story for commuting, work and everyday plans.</span></article>
          <article><i></i><b>Going away</b><span>Give the product a role in weekend, visit and family-travel communication.</span></article>
        </section>
        <footer class="pn-end"><p>For people who do not stay in one place,<br>the product should not stay in one place either.</p><a class="pn-cta" href="contact.html?type=product-file">EXPLORE PORTABLE PRODUCT INFO</a></footer>
      </div>
    `;

    section.classList.remove('is-active');
    requestAnimationFrame(function () { requestAnimationFrame(function () { section.classList.add('is-active'); }); });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', rewritePortableChapter);
  } else {
    rewritePortableChapter();
  }
})();
