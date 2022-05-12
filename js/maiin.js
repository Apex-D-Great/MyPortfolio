
$(document).ready(()=>{
    $('.owl-carousel').owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 4000,
      dots: false,
      nav: true,
      navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
      responsive: responsive,
    }); //carousel;
    
    // AOS init
    AOS.init();
  });
  const responsive = {
    0:{
        items:1
    },
    320:{
        items:1
    },
    560:{
        items:2
    },
    960:{
        items:3
    }
}