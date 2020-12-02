document.addEventListener('mousemove', function(e) {

    var img = new Image;
    img.src = 'imgs/img-sm-3.png';

    if (e.pageX < 200) {
        img.src = 'imgs/img-sm-1.png';
    }
    else if (e.pageX < 300) {
        img.src = 'imgs/img-sm-2.png';
    }
    else if (e.pageX < 400) {
        img.src = 'imgs/img-sm-3.png';
    }
    else if (e.pageX < 500) {
        img.src = 'imgs/img-sm-4.png';
    }
    else if (e.pageX < 600) {
        img.src = 'imgs/img-sm-5.png';
    }
    else if (e.pageX < 700) {
        img.src = 'imgs/img-sm-6.png';
    }
    else if (e.pageX < 800) {
        img.src = 'imgs/img-sm-7.png';
    }
    else if (e.pageX < 900) {
        img.src = 'imgs/img-sm-8.png';
    }
    else if (e.pageX < 1000) {
        img.src = 'imgs/img-sm-9.png';
    }
    else if (e.pageX < 1100) {
        img.src = 'imgs/img-sm-10.png';
    }
    else if (e.pageX < 1200) {
        img.src = 'imgs/img-sm-11.png';
    }

    e = e || window.event;
    var tag = document.createElement('img');
    console.log(e);
    tag.src = img.src;
    tag.style.position = 'absolute';
    tag.style.top = (e.pageY || e.clientY) + 'px';
    tag.style.left = (e.pageX || e.clientX) + 'px';

    this.body.appendChild(tag);

}, false);



/* Make Old window DRAGGABLE */
dragElement(document.getElementById("body-new-1"));

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

/* Make Old window DRAGGABLE */
dragElement(document.getElementById("body-new-2"));

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

/* Make Old window DRAGGABLE */
dragElement(document.getElementById("body-new-3"));

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

/* Add 2nd window on readmore */
document.getElementById("btn-to2").addEventListener("click", function(){
        var alert = document.getElementById("body-new-2");
        alert.setAttribute(
            "style", 
            "display: block;"
        );
});

/* Add 3rd window on readmore */
document.getElementById("btn-to3").addEventListener("click", function(){
        var alert = document.getElementById("body-new-3");
        alert.setAttribute(
            "style", 
            "display: block;"
        );
});
