$(document).ready(()=>{
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      dots: false,
      nav: true,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
    }) //carousel;

  });