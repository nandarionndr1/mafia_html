$(document).ready(() => {
  let pos = 50 - 15

  $(window).scroll((e) => {
    let scrollPos = $(e.target).scrollTop()

    if ($(document).width() > 900) {
      if (scrollPos >= pos) {
        $("#index #navigation").addClass("fixed")
        $("#index #landing").css("margin-top", $("#navigation").height() + "px");
      } else {
        $("#index #navigation").removeClass("fixed")
        $("#index #landing").css("margin-top", 0);
      }
    }
  });

  $("#bars").click(() => {
    if ($(document).width() <= 900)
      $("#navigation > ul").toggleClass("active");
  })

  $("#navigation > ul > li > span").click((e) => {
    if ($(document).width() <= 900) {
      if ($(e.target).siblings("ul").hasClass("active")) {
        $(e.target).siblings("ul").removeClass("active");
      } else {
        $("#navigation > ul > li > ul").removeClass("active");
        $(e.target).siblings("ul").addClass("active");
      }
    }
  })

  $("*:not(#navigation)").click((e) => {
    if ($(e.target).parents("#navigation").length <= 0 && $(document).width() <= 900)
      $("#navigation > ul").removeClass("active");
  })
});