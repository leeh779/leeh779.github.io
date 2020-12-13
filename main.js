$(document).ready(function() {
    $(".top-navi-right-hamburger").click(function () {
      $(".top-navi-right-hamburger-inner").slideToggle();
    });

    $(".top-navi-right-hamburger-inner-close").click(function () {
     	$(".top-navi-right-hamburger-inner").slideToggle();
  	});

    $('a').click(function(){
      $(this).toggleClass("visited");
	});

	$('.list-content').hover(
    function() {
        var $this = $(this); // caching $(this)
        $this.data('defaultText', $this.text());
        $this.text("Click to View");
    },
    function() {
        var $this = $(this); // caching $(this)
        $this.text($this.data('defaultText'));
    });


    /** SEP 21 **/

    /*div #section1 childs*/
    var appendToSectionOne = function(id, output) {
      document.getElementById(id).insertAdjacentHTML('beforeend',output);
    }

    var sectionOneFirst = `<div id="section1-1-1" class="section1-1" style="background-image:URL(assets/imgs/main-section1-img1.jpg)"></div>`;
    var sectionOneSecond = `<div id="section1-1-2" class="section1-1" style="background-image:URL(assets/imgs/main-section1-img2.jpg)"></div>`;
    var sectionOneThird = `<div id="section1-1-3" class="section1-1" style="background-image:URL(assets/imgs/main-section1-img3.jpg)"></div>`;

    appendToSectionOne("section1", sectionOneFirst);
    appendToSectionOne("section1", sectionOneSecond);
    appendToSectionOne("section1", sectionOneThird);


    /*div #section1 margin-bottom*/
    var appendToSectionMarginBottom = function(id, output) {
      document.getElementById(id).insertAdjacentHTML('afterend',output);
    }

    var sectionMarginBottom = `<div class="sectionmargin"></div>`

    appendToSectionMarginBottom("section1", sectionMarginBottom);



    /*section title letter animation*/
    var appendToSectionTitle = function(id, output) {
      document.getElementById(id).insertAdjacentHTML('beforeend',output);
    }


    var sectionTitleArray = [
                              // ['C','o','l','l','a','b'],
                              // ['U','I','U','X'],
                              ['I','n','t','e','r','a','c','t','i','o','n'],
                              // ['M','o','t','i','o','n'],
                              // ['H','C','I'],
                              // ['G','r','a','p','h','i','c']
                            ];

    for (var i = 0; i < sectionTitleArray.length; i++) {
      if(Array.isArray(sectionTitleArray[i])) {
        for (var j = 0; j < sectionTitleArray[i].length; j++) {
          var sectionTitleLetter = '<span class="section-title-letter">'+sectionTitleArray[i][j]+'</span>';
          appendToSectionOne("section-title", sectionTitleLetter);
        }
      }


      // if(i=0) {

      // }

    };

    

    /*Main-wrapper Background Color Change*/

    // if($(window).scrollTop() > $('#section2-1'.offset().top)
    //   && $(window).scrollTop() < $('#section2-1').offset().top + $('#section2-1').outerHeight(true)) {
    //     $('#main-wrapper').css('background-color','FFE500');
    //   };



    // var sectionTwoScrollTop = $("#section2-1").scrollTop();
    // var sectionOneScrollTop = $("#section1").scrollTop();

    // $(document).scroll(function(){
    //     if($(this).scrollTop() > sectionTwoScrollTop){
    //         $('#main-wrapper').addClass('main-wrapper-bganimation');
    //     }else if($(this).scrollTop() = sectionOneScrollTop){
    //         $('#main-wrapper').removeClass('main-wrapper-bganimation');
    //         $('#main-wrapper').addClass('main-wrapper-bgwhite');
    //     }
    // });




    /** SEP 21 **FIN///







  /*title randomize*/
  var skillset = [
      "prototyping"
    , "wireframing"
    , "motion graphics"
    , "physical computing"
    , "HCI"
    , "branding"
    , "UX research"
    , "HTML/CSS"
    , "javascript"
    , "jQuery"
    , "P5.js"
    , "3D printing"
    , "time management"
    , "team leadership"
    , "visual communication"
    , "problem-solving"
    , "drawing"
  ];

  setInterval(function() {
    var skillset_id = Math.floor(Math.random() * skillset.length);
    document.getElementById('h1-highlight').innerHTML = skillset[skillset_id];
  },700);





	/*NDA Alert*/
	$("#modal").hide();
	$("#prompt").hide();

	$(".open-modal").on("click", function(event){
	  event.preventDefault();
	  event.stopPropagation();
	  $("#modal").show("closed");
	});

	$("button").on("click", function(){
	  $("#modal").fadeOut();
	});

	$(".modal-container").on("click", function(){
	  $("#modal").fadeOut();
	});

});