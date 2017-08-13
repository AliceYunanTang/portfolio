
function addHorizontalScroll(event, delta) {
    this.scrollLeft -= (delta );
    event.preventDefault();
}


$(document).ready(function() {
  if (window.innerWidth >= 768) {
    $('body').on('mousewheel', addHorizontalScroll);

    $('body').on('keydown', function(event) {
      if (event.keyCode === 39 || event.keyCode === 40) {
          this.scrollLeft += 80;
      } else if (event.keyCode === 37 || event.keyCode === 38) {
        this.scrollLeft -= 80;
      }
    });

  }
});

$(window).resize(function(){
  if (window.innerWidth >= 768 ){
    $('body').on('mousewheel', addHorizontalScroll);
  } else {
    $('body').off('mousewheel', addHorizontalScroll);
  }
})
