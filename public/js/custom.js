function myFunction(x) {
  x.classList.toggle("change");
  document.querySelector(".menu__nav").classList.toggle("active");
}

$(document).ready(function () {
  $("#owl-demo").owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: true,
    navText: [
      "<img src='./images/icon-back.png'>",
      "<img src='./images/icon-next.png'>",
    ],
    items: 1,
    //navigation: true, // Show next and prev buttons
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoplay: true,
  });

  //Init jquery Date Picker
  $(".datepicker").datetimepicker({
    format: "YYYY-MM-DD",
  });

  $(".cm-filter-toggler").on("click", function () {
    $(".cm-filter-container").slideToggle();
  });
});

// $(document).ready(function () {
//   $('.cvalidate').cValidate();
// });

$(function () {
  var count = 0;
  $(document).on("click", "#btnAdd", function () {
    if (count < 2) {
      $("#TextBoxContainer").append(GetDynamicTextBox());
      count++;
      if (count == 2) {
        $(this).remove();
      }
    }
  });
  $("body").on("click", ".remove", function () {
    $(this).closest("div").remove();
    count--;
    if (count == 1) {
      $("#preview-multi-img").append(
        '<button id="btnAdd" type="button" class="btn btn-primary">Thêm ảnh</button>'
      );
    }
  });
});

function GetDynamicTextBox() {
  return (
    '<div class="col-lg-4 mb-3">' +
    '<div class="fileinput fileinput-new" data-provides="fileinput">' +
    '<div class="fileinput fileinput-new" data-provides="fileinput">' +
    '<div class="fileinput-new img-thumbnail mb-3">' +
    '<img class="img" src="http://classictetriz.com/storage/images/know_your_customer_images/preview.png"  alt="">' +
    "</div>" +
    '<div class="fileinput-preview fileinput-exists mb-3 img-thumbnail"></div>' +
    "<div>" +
    '<span class="btn btn-sm btn-outline-success btn-file mr-2" >' +
    '<span class="fileinput-new">Select</span>' +
    '<span class="fileinput-exists">Change</span>' +
    '<input class="multi-input" id="fake_215" name="images[]" type="file">' +
    "</span>" +
    '<a href="#" class="btn btn-sm btn-outline-danger fileinput-exists" data-dismiss="fileinput">Remove</a>' +
    "</div>" +
    "</div>" +
    "</div>" +
    '<td><button type="button" class="btn btn-danger remove"><i class="fa fa-minus"></i></button></td>' +
    "</div>"
  );
}

$(function () {
  $(document).on("click", ".toggle-menu__button--inactive", function () {
    $(".toggle-menu").removeClass("d-none");
    $(".toggle-menu__button--inactive").addClass("d-none");
  });
  $(document).on("click", ".toggle-menu__button--active", function () {
    $(".toggle-menu").addClass("d-none");
    $(".toggle-menu__button--inactive").removeClass("d-none");
  });
  $("#toggle-menu__title-1").click(function () {
    $("#toggle-menu__title-1 + ul").slideToggle(500);
  });
  $("#toggle-menu__title-2").click(function () {
    $("#toggle-menu__title-2 + ul").slideToggle(500);
  });
});


function checkInput() {
  let inputA = document.querySelector('.custom-modal__input');
  console.log("input: ", inputA.value, "input: ", inputA)
}

checkInput();