$(document).ready(function(){
	
$(function() {
    $(".main-slider").responsiveSlides({
			auto: false,
			pager: true
		});
  });
	
	//menu jumping
  $('a[href="#"]').click(function(){
  var el = $(this).attr('href');
  $('html, body').animate({
  scrollTop: $(el).offset().top}, 1000);
  return false;
  });
	
});