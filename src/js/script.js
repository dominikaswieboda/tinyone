$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    autoplay: true
  });

  // $(".hamburger").on("click", function() {
  //   $(".navigation").toggleClass("active");
  // });
});

document.querySelector(".hamburger").addEventListener("click", function() {
  document.querySelector(".navigation").classList.add("active");
});
document
  .querySelector(".hamburger-close")
  .addEventListener("click", function() {
    document.querySelector(".navigation").classList.remove("active");
  });
