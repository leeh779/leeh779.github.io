$(document).ready(function() {

    var url = 'https://api.openweathermap.org/data/2.5/weather?zip=10011,us&appid=5e354627f0a96016aa286212514a73e4'

    $.get(url, function(data) {
        var humidity = data.main.humidity;
        console.log('humidity',humidity);

        if (humidity >= 1 & humidity <= 9) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-1.png) repeat");
        }
        else if (humidity >= 10 & humidity <= 19) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-2.png) repeat");
        }
        else if (humidity >= 20 & humidity <= 29) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-3.png) repeat");
        }
        else if (humidity >= 30 & humidity <= 39) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-4.png) repeat");
        }
        else if (humidity >= 40 & humidity <= 49) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-5.png) repeat");
        }
        else if (humidity >= 50 & humidity <= 59) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-6.png) repeat");
        }
        else if (humidity >= 60 & humidity <= 69) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-7.png) repeat");
        }
        else if (humidity >= 70 & humidity <= 79) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-8.png) repeat");
        }
        else if (humidity >= 80 & humidity <= 89) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-9.png) repeat");
        }
        else if (humidity >= 90 & humidity <= 100) {
            $('.main-pattern').css("background","URL(assets/imgs/bgpattern-month-10.png) repeat");
        }
    });


    $('#button').click(function(event) {
        var month = $("#input-1").val();
        var day = $("#input-2").val();
        var year = $("#input-3").val();
        var year2 = year.slice(-2);

        console.log(month);
        console.log(day);
        console.log(year2);

        $('#container').toggleClass('display-none');

        $('body').css('background-color', '#d226'+year2);
        $('<div style="z-index: 10; position: absolute; top:'+2*month+'vw; left:'+3*month+'vw; width: 0; height: 0; border-left: '+month+'vw solid transparent; border-right: '+month+'vw solid transparent; border-bottom: '+2*month+'vw solid black;"></div>').appendTo('body');
        $('<div class="rotate3" style="z-index: 10; position: absolute; top:'+day+'%; border-radius: 50%; height: auto; background: URL(assets/imgs/bgpattern-5.png) repeat; border: 1px solid black; width:'+day+'%; padding-top:'+day+'%;"></div>').appendTo('body');
        $('<div style="z-index: 10; position: absolute; top:'+0.5*year2+'%; left:'+0.5*year2+'%; width: 30%; height: '+day*10+'%; background: URL(assets/imgs/bgpattern-4.png); border: 10px solid #cccccc;"></div>').appendTo('body');
        $('<div style="z-index: 1; position: absolute; top:0; left:'+year2+'%; width: 35%; height: 100%; background: URL(assets/imgs/bgpattern-1.png) repeat"></div>').appendTo('body');
        $('<div style="z-index: 2; position: absolute: top:0; left:'+day+'%; width:'+200*0.5*month+'px; height:'+40*month+'px; background: URL(assets/imgs/bgpattern-2.png) repeat;"></div>').appendTo('body');
        $('<div style="z-index: 2; position: absolute; top: 30% left:0; width: 100%; height: 20%; background: URL(assets/imgs/bgpattern-month-'+month+'.png) repeat;"></div>').appendTo('body');
        $('<div style="z-index: 2; position: absolute; top: 60%; left: 20%; width: 25%; height: 30%; border: 10px solid black;"></div>').appendTo('body');
        $('<div class="rotate1" style="z-index: 2; position: absolute; top: 20%; left: 60%; width: 20%; height: 40%; border: 10px solid white;"></div>').appendTo('body');
        $('<div class="rotate2" style="z-index: 2; position: absolute; left: 75%; width: 4%; height: 5%; border: 10px solid black;"></div>').appendTo('body');
    });

    $('#btn-refresh').click(function() {
        location.reload();
    });
    
});