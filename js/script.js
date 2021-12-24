$(document).ready(function () {
  // filter
  $(".works__btn, .works__btn-down").click(function () {
    $(".works__btn").removeClass("btn_active");
    $(this).addClass("btn_active");

    let value = $(this).attr("filter");
    let elem = $(".works__card");
    if (value == "all") {
      $(elem).show("500");
    } else {
      $(elem)
        .not("." + value)
        .hide("500");
      $(elem)
        .filter("." + value)
        .show("500");
    }
  });
  // ======================================================

  // slider
  $(".slider").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    infinite: false,
    pauseOnHover: true,
  });
});
