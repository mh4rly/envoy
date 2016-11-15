$(document).ready(function(){

  jQuery('#hamburger-menu').click(function(e) {
    jQuery(this).toggleClass('active');
    jQuery('nav ul').toggleClass('active');

    e.preventDefault();
  });


  jQuery(document).ready(function($) {
    $('.my-slider').unslider();
  });
});
