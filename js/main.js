$(function() {
  // Add smooth scrolling to all links
 $("a").on('click', function(event) {
   // Make sure this.hash has a value before overriding default behavior
   if (this.hash !== "") {
     // Prevent default anchor click behavior
     event.preventDefault();
     var hash = this.hash;
     // 800 = milliseconds it takes to scroll; - 50 = vertical location
     $('html, body').animate({
       scrollTop: $(hash).offset().top - 50
     }, 800, function(){
       // Add hash (#) to URL when done scrolling (default click behavior)
       window.location.hash = hash;
     });
   } // End if
 });
});


$(window).scroll(function() {
  $(".slideanim").each(function(){
    var pos = $(this).offset().top;
    var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
  });
});


// Get Started
var intSlide = 0;

function clickGetStarted() {
    document.getElementById("gs-modal").style.display = "block";

    document.getElementById("firstSlide").style.display = "block";
    document.getElementById("secondSlide").style.display = "none";
    document.getElementById("thirdSlide").style.display = "none";
    document.getElementById("body").style.overflowY = "hidden";
}

function clickCancel () {
    document.getElementById("gs-modal").style.display = "none";
    intSlide = 0;
    document.getElementById("body").style.overflowY = "auto";
}


function nextSlide() {
    if (intSlide == 0 ) {
      document.getElementById("firstSlide").style.display = "none";
      document.getElementById("secondSlide").style.display = "block";
      document.getElementById("thirdSlide").style.display = "none";
    }

    if (intSlide == 1 ) {
      document.getElementById("firstSlide").style.display = "none";
      document.getElementById("secondSlide").style.display = "none";
      document.getElementById("thirdSlide").style.display = "block";
    }

    if (intSlide == 2) {
      window.location.href = '#what-to-expect';
      document.getElementById("gs-modal").style.display = "none";
      intSlide = -1;
      document.getElementById("body").style.overflowY = "auto";
    }
    intSlide++;
}