jQuery(document).ready(function($) {

$("#contactForm").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "./php/contact-form.php",
data: str,
success: function(msg) {
if(msg == 'OK') {
	dataLayer.push({'event': 'added_application'});
result = '<div class="notification_ok">Ваше сообщение было отправлено</div>';
$("#fields").hide();
} else {
result = msg;
}
// $('#reponse_msg').html(result);
    $('#contactForm, .tohide').fadeOut();
    $('#thx').fadeIn(500);
		console.log('hi');
// thx latter
		$.ajax({
		type: "POST",
		url: "./php/contact-form1.php",
		data: str,
		success: function(msg) {
		if(msg == 'OK') {
			dataLayer.push({'event': 'added_application'});
		result = '<div class="notification_ok">Ваше сообщение было отправлено</div>';
		$("#fields").hide();
		} else {
		result = msg;
		}
console.log('hi2');

		}
		});
}
});
return false;
});
});
