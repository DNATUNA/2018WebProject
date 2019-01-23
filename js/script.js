function myMove() {
    var elem = document.getElementById("menuScreen");
    if (document.getElementById("menuScreen").style.display == "none") {
        document.getElementById("menuScreen").style.display = "block";

    } else {
        document.getElementById("menuScreen").style.display = "none";
    }
}

function resize() {
    console.log(document.getElementById("box").style.width);
    if (document.getElementById("box").style.width === "100vw") {
        document.getElementById("box").style.animationName = "slideout";
        document.getElementById("box").style.width = "10%";
        document.getElementById("h2").style.display = "none";
        document.getElementById("slider").style.display = "inline-block";
        document.getElementById("form").style.display = "inline-block";
        document.getElementById("click").style.fontSize = "3rem";
    } else {
        document.getElementById("box").style.animationName = "slidein";
        document.getElementById("box").style.width = "100vw";
        document.getElementById("h2").style.display = "block";
        document.getElementById("slider").style.display = "none";
        document.getElementById("form").style.display = "none";
        document.getElementById("click").style.fontSize = "4rem";

    }
}

function myMove() {
    var elem = document.getElementById("menuScreen");
    if (document.getElementById("menuScreen").style.display == "none") {
        document.getElementById("menuScreen").style.display = "block";

    } else {
        document.getElementById("menuScreen").style.display = "none";
    }
}
var modalparent = document.getElementsByClassName("modal_multi");

// Get the button that opens the modal

var modal_btn_multi = document.getElementsByClassName("myBtn_multi");

// Get the <span> element that closes the modal
var span_close_multi = document.getElementsByClassName("close_multi");

// When the user clicks the button, open the modal
function setDataIndex() {

    for (var i = 0; i < modal_btn_multi.length; i++) {
        modal_btn_multi[i].setAttribute('data-index', i);
        modalparent[i].setAttribute('data-index', i);
        span_close_multi[i].setAttribute('data-index', i);
    }
}



for (var i = 0; i < modal_btn_multi.length; i++) {
    modal_btn_multi[i].onclick = function () {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "block";
    };

    // When the user clicks on <span> (x), close the modal
    span_close_multi[i].onclick = function () {
        var ElementIndex = this.getAttribute('data-index');
        modalparent[ElementIndex].style.display = "none";
    };

}

window.onload = function () {

    setDataIndex();
};

window.onclick = function (event) {
    if (event.target === modalparent[event.target.getAttribute('data-index')]) {
        modalparent[event.target.getAttribute('data-index')].style.display = "none";
    }
};
