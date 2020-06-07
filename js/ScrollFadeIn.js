$(document).on("scroll", function () {
var pageTop = $(document).scrollTop()
var pageBottom = pageTop + $(window).height()
var smooth = [$(".smooth"), $(".smooth1"), $(".smooth2"), $(".smooth3"), $(".smooth4"), $(".smooth5"), $(".smooth6"), $(".smooth7")]

for (var i = 0; i < smooth.length; i++) {
var tag = smooth[i]

if ($(tag).position().top < pageBottom) {
$(tag).addClass("visible")
} else {
  $(tag).removeClass("visible")
}
}
})