(() => {
  let pageHeader = document.querySelector('.page-header');
  let nav = pageHeader.querySelector('.main-nav');
  let brg = pageHeader.querySelector('.page-header__burger');
  let brgNav = pageHeader.querySelector('.page-header__burger-nav');
  let closeNav = pageHeader.querySelector('.page-header__burger-close-nav');

  function hideBrgNav() {
    brgNav.classList.add('page-header__burger-nav--hidden');
  }


  function showBrgNav() {
    brgNav.classList.remove('page-header__burger-nav--hidden');
  }


   function showNavClose() {
    closeNav.classList.remove('page-header__burger-close-nav--hidden');
  }


   function hideNavClose() {
    closeNav.classList.add('page-header__burger-close-nav--hidden');
  }


  function hideNavigation(hidenavCls, showBrg) {
    nav.classList.add('main-nav--hide');
    hidenavCls();
    showBrg();
  }

  hideNavigation(hideNavClose, showBrgNav);


  function showNavigation() {
    nav.classList.remove('main-nav--hide');
  }


  brg.addEventListener('click', e => {
      nav.classList.toggle('main-nav--hide');
        hideBrgNav();
        showNavClose();

        if (nav.classList.contains('main-nav--hide')) {
          hideNavigation(hideNavClose, showBrgNav);
        } else false
  })
})();
