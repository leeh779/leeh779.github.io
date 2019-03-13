$(function() {
  // Your interactions go here
  	var documentHeight = $(document).height();
	var windowHeight = $(window).height();

	$('body').append('<div id="percentage" style="position: fixed; top: 0; left: 0; height: 30px; background-color: black;"></div>');

	var $percentageIndicator = $('#percentage');

	$(window).on('scroll', function() {
	  var scrollTop = $(this).scrollTop();
	  var percentage = scrollTop / (documentHeight - windowHeight) * 100;

	  console.log(percentage + '%');

	  $percentageIndicator.css({ width: percentage + '%' });
	});


});


var documentHeight = $(document).height();
var $elements = $('.sidebar > *, .page-content > *');

$(window).on('scroll', function() {
  var scrollTop = $(this).scrollTop();
  var scaleFactor = ((scrollTop / documentHeight * 4) % 1.5) + 0.2;

  console.log('scaleFactor', scaleFactor);

  $elements.css({ transform: 'scale(' + scaleFactor + ')' });
});

