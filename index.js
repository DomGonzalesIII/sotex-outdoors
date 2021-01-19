// jshint esversion: 8
// jscs: disable maximumLineLength

/* Copyright (c) 2021 Homegrown Digital Marketing */

document.addEventListener('DOMContentLoaded', () => {

  /********************* Call-to-Action Banner *********************/
  document.addEventListener('scroll', () => {
    let headerHeight = document.querySelector('header').offsetHeight;
    let ctaBanner = document.querySelector('.cta-banner');

    if (document.body.scrollTop > headerHeight || document.documentElement.scrollTop > headerHeight) {
      ctaBanner.classList.toggle('invisible', false);
    } else {
      ctaBanner.classList.toggle('invisible', true);
    }
  });

});
