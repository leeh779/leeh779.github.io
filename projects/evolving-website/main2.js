$(document).ready(function() {

    $("#button").click(function(event) {
        var month = $("#input-1").val();
        var day = $("#input-2").val();
        var year = $("#input-3").val();
        var year2 = year.slice(-2);

        console.log(month);
        console.log(day);
        console.log(year2);

        $('.result-container').css('background-color', '#d226'+year2);
        $('<div style="position: relative; top:'+2*month+'vw; left:'+3*month+'vw; width: 0; height: 0; border-left: '+month+'vw solid transparent; border-right: '+month+'vw solid transparent; border-bottom: '+2*month+'vw solid blue;"></div>').appendTo('.result-container');
        $('<div style="position: relative; top:'+day+'%; left:'+day+'%; border-radius: 50%; height: auto; background-color: red; width:'+day+'%; padding-top:'+day+'%;"></div>').appendTo('.result-container');
        $('<div style="position: relative; top:'+year+'%; left:'+year+'%; width: '+day+'%; height: '+day+'% background-color: blue"></div>').appendTo('.result-container');
    });
    
});