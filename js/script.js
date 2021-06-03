$('.venobox').venobox(); 


$('.service-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: "0",
    arrows: true,
    prevArrow: '<i class="fa fa-chevron-up prev"></i>',
    nextArrow: '<i class="fa fa-chevron-down next"></i>',
  });
$('.port-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,

  });

