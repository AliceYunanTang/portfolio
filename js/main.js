
function addHorizontalScroll(event, delta) {
    this.scrollLeft -= (delta );
    event.preventDefault();
}


$(document).ready(function() {
  if ($(window).width() > 768) {
    $('html, body').on('mousewheel', addHorizontalScroll);

    $('html, body').on('keydown', function(event) {
      if (event.keyCode === 39 || event.keyCode === 40) {
          this.scrollLeft += 80;
      } else if (event.keyCode === 37 || event.keyCode === 38) {
        this.scrollLeft -= 80;
      }
    });
  }
});

$(window).resize(function(){
  if ($(window).width() > 768 ){
    $('html, body').on('mousewheel', addHorizontalScroll);
  } else {
    $('html, body').off('mousewheel', addHorizontalScroll);
  }
});
