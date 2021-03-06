$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  var $msecond = $('#msecond');
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    $clockText.html(h + ":" + m + ":" + s + ":" + ms);
    $hour.css('width', (360/24 * h) + 'px');
    $minute.css('width', (360/60 * m) + 'px');
    $second.css('left', (360/60 * s) + 'px');
    $msecond.css('left', ms + 'px');

    setTimeout(updateClock, clockUpdateSpeed);
  }

  updateClock();

});


/* original 

$(function() {
  var $clockText = $('#clock-text');
  var $hour = $('#hour');
  var $minute = $('#minute');
  var $second = $('#second');
  
  function updateClock() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var ms = date.getMilliseconds();
    var clockUpdateSpeed = 30; // speed in milliseconds

    $clockText.html(h + ":" + m + ":" + s + ":" + ms);
    $hour.css('transform', 'rotate(' + (360/24 * h) + 'deg)');
    $minute.css('transform', 'rotate(' + (360/60 * m) + 'deg)');
    $second.css('transform', 'rotate(' + (360/60 * s) + 'deg)');

    setTimeout(updateClock, clockUpdateSpeed);
  }

  updateClock();
});

*/