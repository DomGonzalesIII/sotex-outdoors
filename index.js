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

  /************************ Photos Showcase  ***********************/

  // max width is 700px and max height is 400px
  const images = [
    {
      url: 'image-1.jpg',
      width: '400',
      height: '400',
    },
    {
      url: 'image-2.jpg',
      width: '400',
      height: '400',
    },
    {
      url: 'image-3.jpg',
      width: '500',
      height: '400',
    },
    {
      url: 'image-4.jpg',
      width: '400',
      height: '400',
    },
    {
      url: 'image-5.jpg',
      width: '400',
      height: '400',
    },
  ];
  var currentImageIndex = 0;

  //set initial photo
  document.querySelector('#photo').src = `img/${images[currentImageIndex].url}`;
  document.querySelector('#photo').width = images[currentImageIndex].width;
  document.querySelector('#photo').height = images[currentImageIndex].height;

  /*** Event Listeners ***/

  // proceed to next photo when right arrow is clicked
  document.querySelector('#rang').addEventListener('click', function () {
    nextImage();
  });

  // revert to previous photo when left arrow is clicked
  document.querySelector('#lang').addEventListener('click', function () {
    prevImage();
  });

  // prevents highlighting of sight word if user clicks quickly (double-clicks)
  document.body.addEventListener('mousedown', function (event) {
    if (event.detail > 1) {
      event.preventDefault();
    }
  }, false);

  /*** Functions ***/

  // called when right arrow is clicked
  function nextImage() {
    currentImageIndex++;

    // if currentImageIndex is out of range, reset it to zero
    if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }

    // change photo
    document.querySelector('#photo').src = `img/${images[currentImageIndex].url}`;
    document.querySelector('#photo').width = images[currentImageIndex].width;
    document.querySelector('#photo').height = images[currentImageIndex].height;
  }

  // called when left arrow is clicked
  function prevImage() {
    currentImageIndex--;

    // if currentImageIndex is out of range, reset it to zero
    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    }

    // change photo
    document.querySelector('#photo').src = `img/${images[currentImageIndex].url}`;
    document.querySelector('#photo').width = images[currentImageIndex].width;
    document.querySelector('#photo').height = images[currentImageIndex].height;
  }

});
