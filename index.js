// jscs: disable maximumLineLength

document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('scroll', () => {
    let headerHeight = document.querySelector('header').offsetHeight;
    let ctaBanner = document.querySelector('.cta-banner');

    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
      ctaBanner.style.display = 'block';
    } else {
      ctaBanner.style.display = 'none';
    }
  });
});
