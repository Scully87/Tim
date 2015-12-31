// JavaScript Document
// config
var philips_bgImgStart = {scale:1.17, xpos:-7, ypos:3}; // start size and position for bg image in collapsed banner
var philips_bgImgEnd = {scale:1, xpos:0, ypos:-5}; // end size and position for bg image in collapsed banner

// content
var philips_container;
var philips_frame01_copy;
var philips_frame02_copy;
var philips_frame03_copy;
var philips_logoPhilips02;
var philips_logoInnovation;
var philips_exitCta;
var philips_exitBtn;
var philips_bgImageMasker;

var frameWaitTimer;


TweenLite.lagSmoothing(0); // stops tweenlite animation messing up when switching between browser tabs


startAd = function()
{
    // content
    philips_container = document.getElementById('philips_container');
    philips_frame01_copy = document.getElementById('philips_frame01_copy');
    philips_frame02_copy = document.getElementById('philips_frame02_copy');
    philips_frame03_copy = document.getElementById('philips_frame03_copy');
    philips_logoPhilips02 = document.getElementById('philips_logoPhilips02');
    philips_logoInnovation = document.getElementById('philips_logoInnovation');
    philips_exitCta = document.getElementById('philips_exitCta');
    philips_bgImageMasker = document.getElementById('philips_bgImageMasker');



    philips_exitBtn = document.getElementById('philips_exitBtn');

    // set bg image url for collapsed banner. We do this in JS so its not inclued in polite load. Could do in CSS but this allows better scaling
    philips_bgImage.src = "http://philips.temp.ogilvyeurope.com/201511/2015-11-25-001-TS/accelerated/PHILIPS_MBBanner_Accelerated_US_EN_728x90_HTML5_DC_15S_1L_150KB/images/bgImage_accelerated_728x90.jpg";
    TweenLite.set(philips_bgImage, {scaleX:philips_bgImgStart.scale, scaleY:philips_bgImgStart.scale, x:philips_bgImgStart.xpos, y:philips_bgImgStart.ypos, rotationZ:0});

    // activate clicktag
    philips_exitBtn.addEventListener('click', exitBtn_clickHandler, false);

    // show Ad
    philips_container.style.display = "block";


    showFrame(1);
}


function exitBtn_clickHandler()
{
    Enabler.exit("ExitClickthrough");
}


var holdFrame = function(frame, time) {
    var delay = time*1000;
    frameWaitTimer = window.setTimeout(function(){showFrame(frame);}, delay);
}


/**
 * switch statement for animating ad
 */
function showFrame(id)
{
    console.log('showing frame ' + id);
    switch(id) {

        //show frame 1
        case 1:

            // show philips crest
            TweenLite.to(philips_logoPhilips02, 0.5, {alpha:0.9, delay:0.5});

            // show frame 01 copy
            TweenLite.to(philips_frame01_copy, 0.5, {alpha:1, delay:1});

            // grow bg image (tiny z rotation fixes jittery movement in IE11)
            TweenLite.to(philips_bgImage, 12, {alpha:1, delay:0, scaleX:philips_bgImgEnd.scale, scaleY:philips_bgImgEnd.scale, x:philips_bgImgEnd.xpos, y:philips_bgImgEnd.ypos, rotationZ: 0.01});

            holdFrame(2, 4);
            break;

       //show frame 2
        case 2:
            // hide prev copy
            TweenLite.to(philips_frame01_copy, 0.3, {alpha:0, delay:0});

            // show frame copy
            TweenLite.to(philips_frame02_copy, 0.5, {alpha:1, delay:1});

            // hide prev copy
            TweenLite.to(philips_frame02_copy, 0.3, {alpha:0, delay:4});

            // show frame copy
            TweenLite.to(philips_frame03_copy, 0.5, {alpha:1, delay:4.5});

            holdFrame(3, 7);
            break;

        //show frame 3
        case 3:

            // hide prev copy
            TweenLite.to(philips_frame03_copy, 0.3, {alpha:0, delay:0});

            // show frame copy
            TweenLite.to(philips_frame04_copy, 0.5, {alpha:1, delay:1.0});

            // show innovation logo
            TweenLite.to(philips_logoInnovation, 0.5, {alpha:1, delay:2.0});

            // show play btn
            TweenLite.to(philips_exitCta, 0.5, {alpha:1, delay:3.0});

            break;
    }
}
