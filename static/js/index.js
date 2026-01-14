$(document).ready(function() {
  // Navbar burger toggle (safe even if navbar not present)
  $(".navbar-burger").click(function() {
    $(".navbar-burger").toggleClass("is-active");
    $(".navbar-menu").toggleClass("is-active");
  });

  // Bulma carousel init (safe even if no carousel exists)
  var options = {
    slidesToScroll: 1,
    slidesToShow: 3,
    loop: true,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 3000
  };

  bulmaCarousel.attach('.carousel', options);
  bulmaSlider.attach();
});
