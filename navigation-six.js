/* Six-entry manufacturer navigation — pure native JavaScript. */
(function(){
  function replaceNavigation(){
    var desktop=document.querySelector('.desktop-nav'),mobile=document.querySelector('[data-mobile-panel]');
    function build(markup){return '<a href="index.html">Home</a><a href="products.html">Products</a><a href="about.html">About</a><a href="oem-odm.html">OEM/ODM</a><a href="blog.html">Blog</a><a href="contact.html">Contact</a>'+markup}
    if(desktop&&!desktop.classList.contains('desktop-nav-pro')){var current=desktop.querySelector('.active');var active=current?current.getAttribute('href'):'';desktop.innerHTML=build('');desktop.querySelectorAll('a').forEach(function(a){if(a.getAttribute('href')===active)a.classList.add('active')})}
    if(mobile&&!mobile.classList.contains('mobile-panel-pro')){mobile.innerHTML=build('<a class="button primary" href="contact.html?type=product-file">ENQUIRE ABOUT SUPPLY ↗</a>')}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',replaceNavigation);else replaceNavigation();
})();
