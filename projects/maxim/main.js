/*
$(function() {
	$('.ffrepeat').text('Four is fair, fair is foul. ');

	var elements = document.getElementsByClassName("ffrepeat");
	for (var i = 0; i < 1000; i++) {
	    $('.ffrepeat').append("Four is fair, fair is foul. ");
	};
});
*/



$('.quote1').click(function(){
	console.log('i clicked this', $(this));
	$('.quote2').fadeOut(0);
	$('.quote2').fadeIn(1000);
	$('html').css({"background" : "linear-gradient(180deg, rgba(255,0,0,1) 0%, rgba(115,0,0,1) 100%)",
				   "background" : "rgb(255,0,0)",
				   "background-repeat" : "no-repeat",
				   "background-attachment" : "fixed"
});

});

$('.quote2').click(function(){
	console.log('i clicked this', $(this));
	$('.quote3').fadeOut(0);
	$('.quote3').fadeIn(1000);
});

$('.quote3').click(function(){
	console.log('i clicked this', $(this));
	$('.quote4').fadeOut(0);
	$('.quote4').fadeIn(1000);
});

$('.quote4').click(function(){
	console.log('i clicked this', $(this));
	$('.quote5').fadeOut(0);
	$('.quote5').fadeIn(1000);
});

$('.quote5').click(function(){
	console.log('i clicked this', $(this));
	$('.quote6').fadeOut(0);
	$('.quote6').fadeIn(1000);
});

$('.quote6').click(function(){
	console.log('i clicked this', $(this));
	$('.quote7').fadeOut(0);
	$('.quote7').fadeIn(1000);
});

$('.quote7').click(function(){
	console.log('i clicked this', $(this));
	$('.quote8').fadeOut(0);
	$('.quote8').fadeIn(1000);
});

$('.quote8').click(function(){
	console.log('i clicked this', $(this));
	$('.quote9').fadeOut(0);
	$('.quote9').fadeIn(1000);
});

$(".quote8").click(function(){
   $('html').css({"backgroundColor" : "#000000"});
   $(".quote1, .quote2, .quote3, .quote4, .quote5, .quote6, .quote7").each(function(){
    $(this).fadeOut(1000);
}); 
});

$('.quote9').click(function(){
	console.log('i clicked this', $(this));
	$('.quote10').fadeOut(0);
	$('.quote10').fadeIn(500);
});

$('.quote10').click(function(){
	console.log('i clicked this', $(this));
	$('.quote11').fadeOut(0);
	$('.quote11').fadeIn(500);
});

$('.quote11').click(function(){
	console.log('i clicked this', $(this));
	$('.quote12').fadeOut(0);
	$('.quote12').fadeIn(500);
});

$('.quote12').click(function(){
	console.log('i clicked this', $(this));
	$('.quote13').fadeOut(0);
	$('.quote13').fadeIn(500);
});

$('.quote13').click(function(){
	console.log('i clicked this', $(this));
	$('.quote14').fadeOut(0);
	$('.quote14').fadeIn(500);
});

$('.quote14').click(function(){
	console.log('i clicked this', $(this));
	$('.quote15').fadeOut(0);
	$('.quote15').fadeIn(500);
});


$('.quote15').click(function(){
	console.log('i clicked this', $(this));
	$('.quote16').fadeOut(0);
	$('.quote16').fadeIn(500);
});

$('.quote16').click(function(){
	console.log('i clicked this', $(this));
	$('.quote17').fadeOut(0);
	$('.quote17').fadeIn(500);
});

$('.quote17').click(function(){
	console.log('i clicked this', $(this));
	$('.quote18').fadeOut(0);
	$('.quote18').fadeIn(500);
});


$('.quote18').click(function(){
	console.log('i clicked this', $(this));
	$('.quote19').fadeOut(0);
	$('.quote19').fadeIn(500);
});


$('.quote19').click(function(){
	console.log('i clicked this', $(this));
	$('.quote20').fadeOut(0);
	$('.quote20').fadeIn(500);
});


$(".quote19").click(function(){
   $('html').css({"backgroundColor" : "#000000"});
   $(".quote1, .quote2, .quote3, .quote4, .quote5, .quote6, .quote7, .quote8, .quote9, .quote10, .quote11, .quote12, .quote13, .quote14, .quote15, .quote16, .quote17, .quote18, .quote19").each(function(){
    $(this).fadeOut(1000);
}); 
});


$('.quote20').click(function(){
	console.log('i clicked this', $(this));
	$('.quote21').fadeOut(0);
	$('.quote21').fadeIn(1000);
});

$('.quote21').click(function(){
	console.log('i clicked this', $(this));
	$('.quote22').fadeOut(0);
	$('.quote22').fadeIn(1000);
});


$(document).ready(function () {
    $("#quote7").click(function () {
        $("#quote7-content").fadeOut(function () {
            $("#quote7-content").text(($("#quote7-content").text() == 'What is done is done.') ? 'What is done' : 'What is done is done.').fadeIn();
        })
    })
});


/*
for (var i = 0; i < 996; i++) {
    document.write("Four is fair, fair is foul. ");
}



for (var i = 0; i < 1000; i++) {
  document.write("<p class='ffrepeat'></p>");
}
*/