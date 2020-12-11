/* 
    pointer.js was created by OwL for use on websites, 
     and can be found at https://seattleowl.com/pointer.
*/

/* Place Image Randomly */
// var counter = 0;

// document.getElementById("body-old").addEventListener("click", function(){
//     ++counter;

//     function generateBadges() {
//       var img = document.createElement('img');
//       var position = Math.floor(Math.random() * 500);
//       img.src = 'imgs/img-gc-'+counter+'.gif';
//       img.setAttribute('style', 'position: relative;');
//       img.setAttribute('top', position);
//       img.setAttribute('left', position);
//       document.getElementById('body-old').appendChild(img);
//     }
//     generateBadges();
// });


/* Make Old window DRAGGABLE */
dragElement(document.getElementById("window-old"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

/* MINIMIZE Old window COSE button */
document.getElementById("window-old-btn-close").addEventListener("click", function(){
        var old = document.getElementById("window-old");
        var old1 = document.getElementById("window-old-toptext");
        var old2 = document.getElementById("window-old-topbtn");
        var old3 = document.getElementById("window-old-toplocation");

        old.setAttribute(
            "style",
            "height: 20px;"
        );

        old1.setAttribute(
            "style", 
            "display: none;"
        );

        old2.setAttribute(
            "style", 
            "display: none;"
        );

        old3.setAttribute(
            "style", 
            "display: none;"
        );

});

/* MINIMIZE Old window MIN button */
document.getElementById("window-old-btn-min").addEventListener("click", function(){
        var old = document.getElementById("window-old");
        var old1 = document.getElementById("window-old-toptext");
        var old2 = document.getElementById("window-old-topbtn");
        var old3 = document.getElementById("window-old-toplocation");

        old.setAttribute(
            "style",
            "height: 20px;"
        );

        old1.setAttribute(
            "style", 
            "display: none;"
        );

        old2.setAttribute(
            "style", 
            "display: none;"
        );

        old3.setAttribute(
            "style", 
            "display: none;"
        );
});

/* MAXIMIZE Old window MAX button */
document.getElementById("window-old-btn-max").addEventListener("click", function(){
        var old = document.getElementById("window-old");
        var old1 = document.getElementById("window-old-toptext");
        var old2 = document.getElementById("window-old-topbtn");

        old.setAttribute(
            "style",
            "height: 45%;"
        );

        old1.setAttribute(
            "style", 
            "display: block;"
        );

        old2.setAttribute(
            "style", 
            "display: block;"
        );

});

/* FORWARD BUTTON to relocate */
document.getElementById("img-gc-window-btn-forward").addEventListener("click", function(){
        var alert = document.getElementById("window-old-alert");
        alert.setAttribute(
            "style", 
            `display: block;
    position: relative;
    top: 35%;
    left: 10%;
    width: 80%;
    height: 50%;
    background-color: #c0c0c0;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 1px solid black;`
        );
});

/* ALERT window CLOSE button */
document.getElementById("alert-close").addEventListener("click", function(){
        var alert = document.getElementById("window-old-alert");
        alert.setAttribute(
            "style", 
            "display: none;"
        );
});
