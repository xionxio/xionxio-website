/* XIONXIO Clinical Instrument Atlas: shared product depth links plus B2B keyword enhancement loader. */
(function(){
  function loadKeywordBoost(){
    if(document.getElementById('xionxio-b2b-keyword-boost'))return;
    var boost=document.createElement('script');boost.id='xionxio-b2b-keyword-boost';boost.src='b2b-keyword-boost.js?v=20260818-zy01bg12';boost.defer=true;document.head.appendChild(boost);
  }
  function init(){
    loadKeywordBoost();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
