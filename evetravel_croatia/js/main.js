$(document).ready(function(){

    //popUp
        $('.take').click(function(){
            $('#tour_book_wrapper').fadeIn(500);
        });

        $('#booking_cancel_btn, .booking_cancel_btn').click(function(){
            $('#tour_book_wrapper').fadeOut(500);
        });

        // $('input[type=submit]').click(function () {
        //     $('#ajax-contact-form').fadeOut();
        //     $('#reponse_msg').fadeIn(500);
        // });

    //include
        $('#also div h3').click(function (ev) {
            ev.preventDefault();
            var thisBlock = $(this).siblings('.include');
            // $('.include').not(thisBlock).hide();
            thisBlock.slideToggle(300);
        });

    $(function(f){
        var element = f('#also')
        f(window).scroll(function(){
            element['fade'+ (f(this).scrollTop() > 100 ? 'In': 'Out')](1000);
        });
    });

    //Scroll by link on page
        $('a[href^="#"]').on('click',function (e) {
            e.preventDefault();

        var target = this.hash;
        var $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top
        }, 800, 'swing', function () {
            window.location.hash = target;
        });
        });

    //Scroll to TOP
        $(window).scroll(function(){
            var calScreenWidth=$(window).width();
            if($(this).scrollTop()>200){
                $('#toTop').stop().css({opacity:0.5,"visibility":"visible"}).animate(
                    {"visibility":"visible"},{duration:1000});
            }
            else if($(this).scrollTop()==0){
                $('#toTop').stop().css({opacity:0,"visibility":"hidden"}).animate(
                    {"visibility":"hidden"},{duration:1500});
            }
        });

        $('#toTop, .hr_totop').click(function(){
            $('body,html').animate({scrollTop:0},800);
        });

    //mobile Menu
        $('#mobile_nav_icon').click(function(e){
            e.preventDefault();
            var curBlock = $(this).siblings('.mobile_menu');
            $('.mobile_menu').not(curBlock).hide();
            curBlock.fadeToggle(300);
        });
    //Map's trash
        $('#map').click(function () {
            $('#map iframe').css("pointer-events", "auto");
        });
    //fancy-box
        $(".fancybox").fancybox({
            prevEffect	: 'none',
            nextEffect	: 'none',
            helpers	: {
                title	: {
                    type: 'outside'
                },
                thumbs	: {
                    width	: 50,
                    height	: 50
                }
            }
        });

        $('.demo-default').tooltipster({
            theme: 'Borderless',
            contentCloning: true,
        });

// arrow down in days

if ($('body').width() > 1000) {
  var days = $('#days');
  days.css({'height':'930px', 'overflow-y':'hidden', 'margin-bottom':'-20px'});
  $('#more_days').css('display','block');
  $('#more_days').click(function(){
    days.animate({height:1790}, 300);
    days.css({'overflow-y':'hidden', 'margin-bottom':'10px'});
    $('#more_days').fadeOut();
  });
}




});
