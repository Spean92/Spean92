$(document).ready(function() {

	//Таймер обратного отсчета
	//Документация: http://keith-wood.name/countdown.html
	//<div class="countdown" date-time="2015-01-07"></div>
	var austDay = new Date($(".countdown").attr("date-time"));
	$(".countdown").countdown({until: austDay, format: 'yowdHMS'});

	//Попап менеджер FancyBox
	//Документация: http://fancybox.net/howto
	//<a class="fancybox"><img src="image.jpg" /></a>
	//<a class="fancybox" data-fancybox-group="group"><img src="image.jpg" /></a>
	// $(".fancybox").fancybox();

	//Навигация по Landing Page
	//$(".top_mnu") - это верхняя панель со ссылками.
	//Ссылки вида <a href="#contacts">Контакты</a>
	// $(".top_mnu").navigation();

	//Добавляет классы дочерним блокам .block для анимации
	//Документация: http://imakewebthings.com/jquery-waypoints/
	$(".block").waypoint(function(direction) {
		if (direction === "down") {
			$(".class").addClass("active");
		} else if (direction === "up") {
			$(".class").removeClass("deactive");
		};
	}, {offset: 100});

	//Плавный скролл до блока .div по клику на .scroll
	//Документация: https://github.com/flesler/jquery.scrollTo
	$("a.scroll").click(function() {
		$.scrollTo($(".div"), 800, {
			offset: -90
		});
	});

	//Каруселька
	//Документация: http://owlgraphic.com/owlcarousel/
	var owl = $(".carousel");
	owl.owlCarousel({
		// jsonPath : 'customData.json'
		navigation : true,
		slideSpeed : 300,
		pagination : false,
		paginationSpeed : 400,
		      singleItem:true,
					loop:true,
		      items : 1,
					mouseDrag : false,
					nav: true,
					smartSpeed: 1500,
						navText: ["<img src='img/left_arrow.png'>","<img src='img/right_arrow.png'>"],
								items : 1,
								onInitialized: function(e) {
								$('.counter').text('1 / ' + this.items().length)
								console.log();
								}

	});

	var owl1 = $(".carousel1");
	owl1.owlCarousel({
		// jsonPath : 'customData1.json'
		navigation : true,
		slideSpeed : 300,
		pagination : false,
		paginationSpeed : 400,
					singleItem:true,
					loop:true,
					items : 1,
					mouseDrag : false,
					nav: true,
					smartSpeed: 1500,
					  navText: ["<img src='img/left_arrow.png'>","<img src='img/right_arrow.png'>"],
					      items : 1,
					      onInitialized: function(e) {
					      $('.counter').text('1 / ' + this.items().length)
					      console.log();
					      }
	});

	var owlIn = $(".carouselIn");
	owlIn.owlCarousel({
		// jsonPath : 'customData1.json'
		navigation : true,
		slideSpeed : 300,
		pagination : false,
		paginationSpeed : 400,
					singleItem:true,
					loop:true,
					items : 1,
					mouseDrag : false,
					nav: true,
					smartSpeed: 1500,
					  navText: ["<img src='img/left_arrow.png'>","<img src='img/right_arrow.png'>"],
					      items : 1,
					      onInitialized: function(e) {
					      $('.counter').text('1 / ' + this.items().length)
					      console.log();
					      }
	});


	$(".next_button").click(function(){
		owl.trigger("owl.next");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.prev");
	});

	$(".next_butt").click(function(){
		$(".carousel1").trigger("owl.next");
	});
	$(".prev_butt").click(function(){
		$(".carousel1").trigger("owl.prev");
	});
	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	// $("form").submit(function() {
	// 	$.ajax({
	// 		type: "GET",
	// 		url: "mail.php",
	// 		data: $("form").serialize()
	// 	}).done(function() {
	// 		alert("Спасибо за заявку!");
	// 		setTimeout(function() {
	// 			$.fancybox.close();
	// 		}, 1000);
	// 	});
	// 	return false;
	// });
// PopUp
//

 $("section.box-7 .pic").click(function(){
  $(".popUp_list.list").fadeIn();
 });
 $(".popUp_list .left_arrow, .popUp_list .right_arrow").click(function(){
	 $(".list").hide();
	 $(".list1").fadeIn(300);

 });
 $(".popUp_list1 .left_arrow, .popUp_list1 .right_arrow").click(function(){
	 $(".list1").hide();
	 $(".list").fadeIn(300);
 });
$(".call_us").click(function(){
	$(".popUp").fadeIn();
});


$(".popUp, .popUp_list, .popUp_list1").click(function(e) {
    if($(e.target).closest(".window").length==0) $(".popUp, .popUp_list").fadeOut();
});
$(".close").click(function(){
	$(".popUp_list, .popUp_list1, .popUp").fadeOut();
});

$('.sections>i').click(function(){
	$("ul.sendvich").show(300);
});
$('ul.sendvich img').click(function(){
	$("ul.sendvich").hide(300);
});

// FadeIn
//
/* Every time the window is scrolled ... */
// $(window).scroll( function(){
//
// 		/* Check the location of each desired element */
// 		$('.hideme').each( function(i){
//
// 				var bottom_of_object = $(this).offset().top + $(this).outerHeight();
// 				var bottom_of_window = $(window).scrollTop() + $(window).height();
//
// 				/* If the object is completely visible in the window, fade it it */
// 				if( bottom_of_window > bottom_of_object ){
//
// 						$(this).animate({'opacity':'1'},2000);
// 				} else {
// 					$(this).css('opacity','0');
// 				}
//
// 		});
//
// });


// onepage_scroll
//
$('#fullpage').fullpage({
	 //Navigation
	 menu: '#menu',
	 lockAnchors: false,
	 anchors:['1Page', '2Page',  '3Page',  '4Page',  '5Page',  '6Page',  '7Page', '8Page'],
	 navigation: false,
	 navigationPosition: 'right',
	 navigationTooltips: ['firstSlide', 'secondSlide'],
	 showActiveTooltip: false,
	 slidesNavigation: false,

	 //Scrolling
	 css3: true,
	 scrollingSpeed: 1500,
	 autoScrolling: true,
	 fitToSection: true,
	 fitToSectionDelay: 500,
	 scrollBar: true,
	 easing: 'easeInOutCubic',
	 easingcss3: 'ease',
	 loopBottom: false,
	 loopTop: false,
	 loopHorizontal: true,
	 continuousVertical: false,
	 continuousHorizontal: false,
	 scrollHorizontally: false,
	 interlockedSlides: false,
	 resetSliders: false,
	 normalScrollElements: '#element1, .element2',
	 scrollOverflow: false,
	 scrollOverflowOptions: null,
	 touchSensitivity: 15,
	 normalScrollElementTouchThreshold: 5,
	 bigSectionsDestination: null,

	 //Accessibility
	 keyboardScrolling: true,
	 animateAnchor: true,
	 recordHistory: true,

	 //Design
	 controlArrows: false,
	 verticalCentered: false,
	 responsiveWidth: 0,
	 responsiveHeight: 0,
	 responsiveSlides: false,

	 //Custom selectors
	 sectionSelector: '.section',
	 slideSelector: '.slide',

	 //events
	 onLeave: function(index, nextIndex, direction){
		 switch (nextIndex) {
			 case 1:
			 $('.fixedElements .fixedHeader, .fixedFooter_white, .fixedHeader_black, .fixedFooter_black').hide();
			 $('section .hideme').css({'opacity':'0'}, 1000);

			 break;
		 	case 2:
			$('.fixedElements .fixedHeader_black, .fixedFooter_black').show(2000);
			$('.fixedElements .fixedHeader, .fixedFooter_white').hide(1000);
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(2) a').css('font-family', 'Circe-light');
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(3) a').css('font-family', 'Circe-Bold');
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(4) a').css('font-family', 'Circe-Bold');
			$('section .hideme').css({'opacity':'0'}, 1000);
			$('#section2 .hideme').animate({'opacity':'1'},1500);

			// $('.hideme').css('opacity', '0');
			break;
			case 3:
			$('.fixedElements .fixedHeader_black, .fixedFooter_black').hide(1000);
			$('.fixedElements .fixedHeader, .fixedFooter_white').show(2000);
			$('.fixedElements .fixedHeader nav.sections ul li:nth-child(2) a').css('font-family', 'Circe-light');
			$('section .hideme').css({'opacity':'0'}, 1000);
			$('#section3 .hideme').animate({'opacity':'1'},1500);

			break;
			case 4:
			$('.fixedElements .fixedHeader_black, .fixedFooter_black').hide(1000);
			$('.fixedElements .fixedHeader, .fixedFooter_white').show(2000);
			$('.fixedElements .fixedHeader nav.sections ul li:nth-child(2) a').css('font-family', 'Circe-light');
			$('section .hideme').css({'opacity':'0'}, 1000);
			$('#section4 .hideme').animate({'opacity':'1'},1500);
			break;
			case 5:
			$('.fixedElements .fixedHeader_black, .fixedFooter_black').hide(1000);
			$('.fixedElements .fixedHeader, .fixedFooter_white').show(2000);
			$('.fixedElements .fixedHeader nav.sections ul li:nth-child(2) a').css('font-family', 'Circe-light');
			$('section .hideme').css({'opacity':'0'}, 1000);
			$('#section5 .hideme').animate({'opacity':'1'},1500);
			break;
			case 6:
			$('.fixedElements .fixedHeader_black, .fixedFooter_black').show(2000);
			$('.fixedElements .fixedHeader, .fixedFooter_white').hide(1000);
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(2) a').css('font-family', 'Circe-Bold');
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(3) a').css('font-family', 'Circe-light');
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(4) a').css('font-family', 'Circe-Bold');
			$('section .hideme').css({'opacity':'0'}, 1000);
			$('#section6 .hideme').animate({'opacity':'1'},1500);
			break;
			case 7:
			$('.fixedElements .fixedHeader_black, .fixedFooter_black').show(2000);
			$('.fixedElements .fixedHeader, .fixedFooter_white').hide(1000);
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(2) a').css('font-family', 'Circe-Bold');
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(3) a').css('font-family', 'Circe-Bold');
			$('.fixedElements .fixedHeader_black nav.sections ul li:nth-child(4) a').css('font-family', 'Circe-light');
			$('section .hideme').css({'opacity':'0'}, 1000);
			$('#section7 .hideme').animate({'opacity':'1'},1500);
			break;
			case 8:
			$('.fixedElements .fixedHeader, .fixedFooter_white, .fixedHeader_black, .fixedFooter_black').hide();
			$('section .hideme').css({'opacity':'0'}, 1000);
			break;
		 }
	 },
	 afterLoad: function(anchorLink, index){
            if(index == 1){
								$('.fixedElements .fixedHeader, .fixedFooter_white, .fixedHeader_black, .fixedFooter_black').css('display', 'none');
            }
	 },
	 afterRender: function(){},
	 afterResize: function(){},
	 afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
	 onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){	 }
});

// BGVideo
// var myVideo = document.getElementById("bgvideo");
// function playPause() {
//     if (myVideo.paused)
// 				myVideo.play();
//     else
//         myVideo.pause();
// }
		var mark = 0;
	$('#play').click(function() {
		$('#closeVideo').fadeIn(500);
		$('#closeVideo').click(function() {
			player.stopVideo()
			$('.video img').fadeIn(500);
			$('#section1 .wrapper .main_text>h1, #section1 .wrapper .main_text>p').fadeIn(500);
			$('#play i:first-child').css('opacity', '1');
			$('#play i:last-child').css('opacity', '0');
			$('#closeVideo').fadeOut();
			mark = 0;
		});
		if (mark == 0) {
			$('#play i:first-child').css('opacity', '0');
			$('#play i:last-child').css('opacity', '1');
			$('.video img').fadeOut(500);
			$('#section1 .wrapper .main_text>h1, #section1 .wrapper .main_text>p').fadeOut(500);
			player.playVideo();
			mark = 1;
		} else {
			player.pauseVideo()
			$('#play i:first-child').css('opacity', '1');
			$('#play i:last-child').css('opacity', '0');
			mark = 0;
		}

	});

	var flag = 0;
	$('#section1 .bot_right').click(function() {
		if ( flag == 0) {
			player.unMute();
			$('#section1 .bot_right a:first-child').show();
			$('#section1 .bot_right a:last-child').hide();
			flag = 1;
		} else {
			player.mute();
			$('#section1 .bot_right a:first-child').hide();
			$('#section1 .bot_right a:last-child').show();
			flag = 0;
		}
	});
	// $('#play').click(function(){
	// 	$('#bgvideo').css({"z-index": "9999", "position": "static", "display":"inline-block"});
	// 	$('#closeVideo').show();
	//
	// });
	// $('#closeVideo').click(function(){
	// 	$('#bgvideo, #closeVideo').hide();
	// 	myVideo.pause();
	// });

//Zoomy
$('.zoom').zoom({
	duration: 300,
});

// z-index


// contactForm
$("#contactForm").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "../mail.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
	dataLayer.push({'event': 'added_application'});
result = '<div class="notification_ok">Ваше сообщение было отправлено</div>';
} else {
result = msg;
}
// $('#reponse_msg').html(result);
}
});
$(".popUp p, .popUp form").fadeOut();
$(".popUp .sucs").fadeIn(300);
return false;
});


// popUpSlide6
var endless = 1;

	$('section.box-6 .some_slider .pic a img, .pic1 a img, .pic3 a img' ).click(function() {
		var source =	$(this).attr('src');
		$('section.box-6 .popUpSlide6').fadeIn(200);
		$('#popUp6').attr('src', source);
		// var hi = $(this).attr('src');
	});
	// var some_value = $('section.box-6 .popUpSlide6')
	$('section.box-6 .popUpSlide6').click(function() {
			$('section.box-6 .popUpSlide6').fadeOut();
	});
});
