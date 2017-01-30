$(document).ready(function () {

  $(function() {
    $(".rslides").responsiveSlides({
			pager: true
		});
  });
	
	$(function () {
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '300', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '^', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });
});
		
		$(".fofm").submit(function() {
		var str = $(this).serialize();
		$.ajax({
			type: "POST",
			url: "formdata.php",
			data: str,
						success: function(msg) {
				if(msg == 'ok') {
					$('.popup2, .overlay').css('opacity','1');
					$('.popup2, .overlay').css('visibility','visible');
					$('.popup').css({'opacity':'0','visibility':'hidden'});
				}
				else {
					$('.popup2 .window').html('<h5>Ошибка</h5><p>Сообщение не отправлено, убедитесь в правильности заполнение полей</p>');
					$('.popup2, .overlay').css('opacity','1');
					$('.popup2, .overlay').css('visibility','visible');
					$('.popup').css({'opacity':'0','visibility':'hidden'});
				}
			}

		});
		return false;
	});
	$('.my_block').click(function(){
		$('#firstBlock').css('background','url(../www/img/big-green-bg.jpg)');
		$('#fouthBlock').css('background', 'url(../www/img/how-we-work-bg-green.jpg)');
		$('#secondBlock .div2').css('background','rgba(71, 209, 71, 0.4)');
		$('#secondBlock .div3').css('background','rgba(71, 209, 71, 0.7)');
		$('#secondBlock .div4').css('background','rgb(71, 209, 71)');
	});
	$('.my_block').dblclick(function(){
		$('#firstBlock').css('background','url(../www/img/big-blue-bg.png)');
		$('#fouthBlock').css('background', 'url(../www/img/how-we-work-bg-blue.png)');
		$('#secondBlock .div2').css('background','rgba(20, 155, 222, 0.4)');
		$('#secondBlock .div3').css('background','rgba(20, 155, 222, 0.7)');
		$('#secondBlock .div4').css('background','rgb(20, 155, 222)');
	});
});		
