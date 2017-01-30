
$(document).ready(function(){

	//Slider
  $(function() {
    $(".rslides").responsiveSlides({
			auto: false,
			pager: true,
		});
  });

	//menu scrolling
  $('a[href^="#"]').click(function(){
  var el = $(this).attr('href');
  $('html, body').animate({
  scrollTop: $(el).offset().top}, 1000);
  return false;
  });

	//readme
		$(".readmore").click(function(e){
				e.preventDefault();
        var curBlock = $(this).siblings('.hiden');
        curBlock.slideToggle();
		});

});
