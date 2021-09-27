$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    loop:true,
    margin: 2,
    nav: false,
    items: 3,
    autoplay: true,
    autoplayTimeout: 1500,
    autoplayHoverPause: true,
    responsive:{
      0:{
        items:1
      },
      400:{
        items:2
      },
      600:{
        items:3
      }
    }
  });
});
