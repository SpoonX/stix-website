window.addEventListener('scroll', () => {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop;
  const header  = document.getElementsByClassName('fixedHeaderContainer')[0];

  header.style.backgroundColor = distanceY > 30 ? 'white' : 'transparent';
});
