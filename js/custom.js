//Navbar Sliding
var previousScroll = 0,
headerOrgOffset = 50;

$(window).scroll(function () {
    var currentScroll = $(this).scrollTop();
    if (currentScroll == 0) {
      $('.navbar').removeClass('shrink');
    }
    if (currentScroll > headerOrgOffset) {
        if (currentScroll > previousScroll) {
            $('.navbar').addClass('shrink',500);
        } else {
            $('.navbar').removeClass('shrink');
        }
    } 
    previousScroll = currentScroll;
    
});
$(document).bind('mousemove',function(e){ 
    if(e.pageY < ($(this).scrollTop() + 20)) {
        $('.navbar').slideDown(500);
    }
    //to modify later:hide navbar when the mouse leaves the top of the window
    /*
    if ((e.pageY > ($(this).scrollTop() + 20)) && ($(this).scrollTop() > $('#home').height())-300) {
        $('.navbar').slideUp(1500);
    }*/
}); 
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        var selector = $(target.selector);
        $('html,body').animate({
          scrollTop: selector.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


    (function($) {
        "use strict";
        function count($this){
        var current = parseInt($this.html(), 10);
        current = current + 1; /* Where 50 is increment */    
        $this.html(++current);
            if(current > $this.data('count')){
                $this.html($this.data('count'));
            } else {    
                setTimeout(function(){count($this)}, 50);
            }
        }            
        $(".stat-count").each(function() {
          $(this).data('count', parseInt($(this).html(), 10));
          $(this).html('0');
          count($(this));
        });
   })(jQuery);
   
