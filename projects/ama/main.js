$(function() {
  
  // Your interactions go here
  	  var count = 0;
	  $('#clickme').on('click', function(event) {
	    // All javascript event handlers give you information about the event type in the event argument.
	    console.log(event);
	    // event.preventDefault() will prevent the default click event from happening in the browser.
	    // This makes it so that clicking a link doesn't actually go to that link.
	    event.preventDefault();

	    count++;
	    $('.table-icon-wrap').append('<a href="sub/sub-' + count + '.html"><img class="table-icon-food" width="250" src="img/icon-' + count + '.png"/></a>');
	  });
	  
	  $('.card').click(function() {
    		$(this).toggleClass('card');
    		$(this).toggleClass('card is-flipped');
	  });
	  

	  /*
	  $('.table-icon-food').mouseover(function() {
	  		$('.table-icon-wrap').append('<div class="table-icon-label table-icon-label-' + count + '"></div>')
	  		$('.table-icon-label').addClass('displayblock')
	  });
	  */
	  

});