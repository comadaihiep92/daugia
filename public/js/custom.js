function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector('.menu__nav').classList.toggle("active");

}

$(document).ready(function () {

  $('#owl-demo').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: true,
    navText: ["<img src='./images/icon-back.png'>", "<img src='./images/icon-next.png'>"],
    items: 1,
    //navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoplay: true,

  })
});