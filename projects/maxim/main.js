var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    if(!isChrome){
      $('#iframeAudio').remove()
    }
  else{
     $('#playAudio').remove() //just to make sure that it will not have 2x audio in the background 
  }

$('body').click(function(){
	console.log('i clicked this', $(this));
	$('.volume').fadeOut(0);
});

$('.volume').click(function(){
	console.log('i clicked this', $(this));
	$('.quote1').fadeOut(0);
	$('.quote1').fadeIn(1000);
});

$('.quote1').click(function(){
	console.log('i clicked this', $(this));
	$('.quote2').fadeOut(0);
	$('.quote2').fadeIn(1000);
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
   $('html').css({"background" : "#000000"});
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
	$('.quote13, .quote12').fadeOut(0);
	$('.quote13').fadeIn(500);
	$('.quote9').delay(500).fadeOut(350);
	$('.quote10').delay(300).fadeOut(750);
});

$('.quote13').click(function(){
	console.log('i clicked this', $(this));
	$('.quote14').fadeOut(0);
	$('.quote14').fadeIn(500);
	$('.quote12').delay(500).fadeIn(700);
	$('.quote9').delay(270).fadeIn(550);
});

$('.quote14').click(function(){
	console.log('i clicked this', $(this));
	$('.quote15').fadeOut(0);
	$('.quote15').fadeIn(500);
	$('.quote13').delay(300).fadeIn(800);
	$('.quote9').delay(500).fadeOut(350);
	$('.quote10').fadeIn(550);
});


$('.quote15').click(function(){
	console.log('i clicked this', $(this));
	$('.quote16').fadeOut(0);
	$('.quote16').fadeIn(500);
	$('.quote15').fadeIn(200);
	$('.quote13').delay(100).fadeOut(100);
	$('.quote9').delay(200).fadeIn(150);
});

$('.quote16').click(function(){
	console.log('i clicked this', $(this));
	$('.quote17').fadeOut(0);
	$('.quote15').delay(100).fadeOut(200);
	$('.quote17').fadeIn(500);
	$('.quote13').delay(200).fadeIn(350);
	$('.quote12').delay(190).fadeOut(990);
});

$('.quote17').click(function(){
	console.log('i clicked this', $(this));
	$('.quote18').fadeOut(0);
	$('.quote18').fadeIn(500);
	$('.quote18a').fadeOut(0);
	$('.quote18a').fadeIn(500);
	$('.quote14').delay(200).fadeIn(100);
	$('.quote16').fadeOut(50);
	$('.quote12').delay(320).fadeIn(690);
	$('.quote9').fadeIn(350);
});


$('.quote18').click(function(){
	console.log('i clicked this', $(this));
	$('.quote19').fadeOut(0);
	$('.quote19').fadeIn(500);
	$('.quote14').delay(200).fadeIn(100);
	$('.quote17').delay(900).fadeOut(300);
	$('.quote15').delay(200).fadeOut(250);
	$('.quote10').delay(350).fadeOut(350);
});


$('.quote19').click(function(){
	console.log('i clicked this', $(this));
	$('.quote20').fadeOut(0);
	$('.quote20').fadeIn(2000);
	$('.quote16').delay(800).fadeOut(100);
	$('.quote10').delay(150).fadeOut(650);
});


$(".quote19").click(function(){
   $('html').css({"backgroundColor" : "#000000"});
   $('.quote1').delay(100).fadeOut(300);
   $('.quote2').fadeOut(900);
   $('.quote3').fadeOut(350);
   $('.quote4').fadeOut(100);
   $('.quote5').delay(10).fadeOut(510);
   $('.quote6').fadeOut(480);
   $('.quote7').fadeOut(250);
   $('.quote8').fadeOut(700);
   $('.quote9').fadeOut(420);
   $('.quote10').fadeOut(100);
   $('.quote8').fadeIn(200);
   $('.quote11').delay(40).fadeOut(100);
   $('.quote12').fadeOut(300);
   $('.quote13').fadeOut(100);
   $('.quote3').fadeIn(250);
   $('.quote14').fadeOut(700);
   $('.quote7').fadeIn(650);
   $('.quote15').fadeOut(350);
   $('.quote16').fadeOut(100);
   $('.quote17').fadeOut(200);
   $('.quote9').fadeIn(450);
   $('.quote18').fadeOut(190);
   $('.quote13').fadeIn(220);
   $('.quote19').fadeOut(240);
   $('.quote3').fadeOut(150);
   $('.quote9').fadeOut(190);
   $('.quote13').fadeOut(290);
   $('.quote8').fadeOut(300);
   $('.quote7').fadeOut(250);
   $('.quote20').delay(1000).fadeIn(5000);
   /*$(".quote1, .quote2, .quote3, .quote4, .quote5, .quote6, .quote7, .quote8, .quote9, .quote10, .quote11, .quote12, .quote13, .quote14, .quote15, .quote16, .quote17, .quote18, .quote19").each(function(){
    $(this).fadeOut(2000);*/
}); 

$('.quote20').click(function(){
	console.log('i clicked this', $(this));
	$('.quote21').fadeOut(0);
	$('.quote21').fadeIn(3000);
});

$('.quote21').click(function(){
	console.log('i clicked this', $(this));
	$('.quote22').fadeOut(0);
	$('.quote22').fadeIn(3000);
});

$('.quote22').click(function(){
	console.log('i clicked this', $(this));
	$('.quote23').fadeOut(0);
	$('.quote23').fadeIn(3000);
});

$(".quote23").click(function(){
   $(".quote20, .quote21, .quote22, .quote23").each(function(){
    $(this).fadeOut(2000);
}); 
});



$(document).ready(function () {
    $("#quote7").click(function () {
        $("#quote7-content").fadeOut(function () {
            $("#quote7-content").text(($("#quote7-content").text() == 'What is done is done.') ? 'What is done' : 'What is done is done.').fadeIn();
        })
    })
});