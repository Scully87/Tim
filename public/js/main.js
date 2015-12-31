// JavaScript Document

// config
var currentLoop = 0;
var totalLoops = 10;
var endFrameDelay = 4;
var useReplayBtn = false;

// content
var container;
var animationContainer;
var devImage;
var copy1;
var copy2Container;
var copy2a;
var copy2b;
var copy2c;
var copy3Container;
var copy3a;
var copy3b;
var copy3c;
var copy4Container;
var copy4a;
var copy4b;
var copy4c;

TweenLite.lagSmoothing(0); // stops tweenlite animation messing up when switching between browser tabs

startAnimation = function()
{
    // content
    container = document.getElementById("container-index");
    devImage = document.getElementById("dev-image-container");
    animationContainer = document.getElementById("animation-container");
    copy1 = document.getElementById("copy-1");
    copy2Container = document.getElementById("copy-2-container");
    copy2a = document.getElementById("copy-2a");
    copy2b = document.getElementById("copy-2b");
    copy2c = document.getElementById("copy-2c");
    copy3Container = document.getElementById("copy-3-container");
    copy3a = document.getElementById("copy-3a");
    copy3b = document.getElementById("copy-3b");
    copy3c = document.getElementById("copy-3c");
    copy4Container = document.getElementById("copy-4-container");
    copy4a = document.getElementById("copy-4a");
    copy4b = document.getElementById("copy-4b");
    copy4c = document.getElementById("copy-4c");

    showFrame(1);
}

var holdFrame = function(frame, time) {
    var delay = time*1000;
    frameWaitTimer = window.setTimeout(function(){showFrame(frame);}, delay);
}

function showFrame(id) {
    tl = TweenLite
    switch(id) {

        case 1:
            resetAnimation();
            tl.to(devImage, 2, {opacity:1});
            tl.to(copy1, 2, {opacity:1});
            tl.to(copy1, 1, {x:-5000, delay:2.5});
            holdFrame(2, 3);
            break;

        case 2:
            tl.to(copy2Container, 0.5, {opacity:1})
            tl.to(copy2a, 0, {x:-5000});
            tl.to(copy2b, 0, {x:5000});
            tl.to(copy2c, 0, {x:-5000});
            tl.to(copy2a, 1, {x:0, delay:0});
            tl.to(copy2b, 1, {x:0, delay:1.5});
            tl.to(copy2c, 1, {x:0, delay:2.5});
            tl.to(devImage, 0.50, {y:30, scaleX:0.6, scale:0.6, delay:1.5});
            tl.to(devImage, 0.2, {y:68, scaleX:1.2, scale:1.2, delay:2.1});
            tl.to(devImage, 0.2, {y:83, scaleX:0.8, scale:0.8, delay:2.2});
            tl.to(devImage, 0.2, {y:94, scaleX:1.1, scale:1.1, delay:2.3});
            tl.to(devImage, 0.2, {y:113, scaleX:0.9, scale:0.9, delay:2.4});
            tl.to(devImage, 0.2, {y:158, scaleX:1, scale:1, delay:2.5});
            holdFrame(3, 4.5);
            break;

        case 3:
            tl.to(copy2Container, 0.3, {scaleX:0, scaleY:1, opacity:0});
            tl.to(copy3Container, 0, {scaleX:0, scaleY:1, opacity:1, delay:0.3});
            tl.to(copy3Container, 0.3, {scaleX:1, scaleY:1, delay:0.3});
            tl.to(copy3a, 2.5, {x:5000, delay:3.5});
            tl.to(copy3b, 2.5, {x:-5000, delay:3.7});
            tl.to(copy3c, 2.5, {x:5000, delay:3.9});
            holdFrame(4, 4.5);
            break;

        case 4:
            tl.to(copy4Container, 1, {opacity: 1});
            tl.to(devImage, 0.50, {scaleX:0.6, scale:0.6, delay:2.5});
            tl.to(devImage, 0.2, {y:158, scaleX:1.2, scale:1.2, delay:3.1});
            tl.to(devImage, 0.2, {y:94, scaleX:0.8, scale:0.8, delay:3.2});
            tl.to(devImage, 0.2, {y:94, scaleX:1.1, scale:1.1, delay:3.3});
            tl.to(devImage, 0.2, {y:68, scaleX:0.9, scale:0.9, delay:3.4});
            tl.to(devImage, 0.2, {y:0, scaleX:1, scale:1, delay:3.5});
            tl.to(copy4c, 2.5, {y:-1000, x:700, rotation:400, delay:3.2});
            tl.to(copy4b, 2.5, {y:-1000, x:-700, rotation:-400, delay:3.3});
            tl.to(copy4a, 2.5, {y:-1000, x:0, roation:200, delay:3.4});
            setTimeout(checkForLooping, 2000);
    }
}

/**
 * function checks if banner should loop or show replay btn
 */
function checkForLooping()
{
    if(currentLoop < totalLoops) // loop baner
    {
        TweenLite.delayedCall(endFrameDelay, showFrame, [1]);
        currentLoop++;
    }
    else // show replay btn
    {
        if(useReplayBtn === true)
        {
            btnReplay.style.display = "block";
        }
    }
}

function resetAnimation() {
  tl = TweenLite
  tl.to(devImage, 0, {x:0, y:0, opacity:1});
  tl.to(copy1, 0, {x:0, opacity:0});
  tl.to(copy2a, 0, {x:0, opacity:1});
  tl.to(copy2b, 0, {x:0, opacity:1});
  tl.to(copy2c, 0, {x:0, opacity:1});
  tl.to(copy3a, 0, {x:0, opacity:1});
  tl.to(copy3b, 0, {x:0, opacity:1});
  tl.to(copy3c, 0, {x:0, opacity:1});
  tl.to(copy2Container, 0, {x:0, scaleX:1, scaleY:1, opacity:0});
  tl.to(copy3Container, 0, {x:0, scaleX:1, scaleY:1, opacity:0});
  tl.to(copy4Container, 0, {x:0, scaleX:1, scaleY:1, opacity:0});
  tl.to(copy4a, 0, {x:0, y:0, rotation:0, opacity:1});
  tl.to(copy4b, 0, {x:0, y:0, rotation:0, opacity:1});
  tl.to(copy4c, 0, {x:0, y:0, rotation:0, opacity:1});
}


