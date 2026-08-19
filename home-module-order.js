/* Homepage order: the six buyer pain points follow capability metrics and precede the portable-format comparison without delayed repaint. */
(function () {
  if (document.body.dataset.page !== 'home') return;
  var manufacturing = document.querySelector('.xwp');
  var comparison = document.querySelector('[data-portable-advantage]');
  var technology = document.querySelector('.tbi');
  if (manufacturing && comparison) comparison.parentNode.insertBefore(manufacturing, comparison);
  if (comparison && technology) comparison.insertAdjacentElement('afterend', technology);
})();
