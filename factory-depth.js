/* Homepage capability metrics: begin at a low value on first paint and count immediately without scroll-gated delay. */
(function () {
  var section = document.querySelector('.factory-metrics');
  if (!section || section.dataset.counterReady) return;
  section.dataset.counterReady = 'true';
  var counters = Array.prototype.slice.call(section.querySelectorAll('.metric-count'));
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var duration = 1500;

  function format(counter, value) {
    return value + (counter.dataset.suffix || '');
  }

  function complete(counter) {
    counter.textContent = format(counter, Number(counter.dataset.count) || 0);
    counter.dataset.animated = 'true';
  }

  if (reduced) {
    counters.forEach(complete);
    return;
  }

  counters.forEach(function (counter) {
    counter.textContent = format(counter, 0);
    delete counter.dataset.staticValue;
  });

  var startedAt = null;
  function frame(timestamp) {
    if (startedAt === null) startedAt = timestamp;
    var progress = Math.min((timestamp - startedAt) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3);
    counters.forEach(function (counter) {
      var target = Number(counter.dataset.count) || 0;
      counter.textContent = format(counter, Math.round(target * eased));
    });
    if (progress < 1) window.requestAnimationFrame(frame);
    else counters.forEach(complete);
  }

  window.requestAnimationFrame(frame);
})();
