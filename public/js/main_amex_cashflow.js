var amex_cashflow_pages;

function getElm(elm){
    return document.getElementById(elm);
}

startAd = function(){
        amex_cashflow_pages = getElm("amex_cashflow_pages");
        tl = TweenLite

        showFrame(1);
}

var holdFrame = function(frame, time) {
    var delay = time*1000;
    frameWaitTimer = window.setTimeout(function(){
        showFrame(frame);
    }, delay);
}

function showFrame(id) {
    console.log('showing frame ' + id);
    tl = TweenLite
    switch(id) {

        case 1:
            tl.to(amex_cashflow_numbers,0,{x:-70,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,delay:0.39});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-48,delay:0.52});
            holdFrame(2,0.55);
            break;

        case 2:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-48,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-48,delay:0.39});
            tl.to(amex_cashflow_droppingPage1,2,{x:150,y:600});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-96,delay:0.52});
            holdFrame(3,0.55);
            break;

        case 3:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-96,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-96,delay:0.39});
            tl.to(amex_cashflow_droppingPage2,2.8,{x:-50,y:600,delay:0.2});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-144,delay:0.52});
            holdFrame(4,0.55);
            break;

        case 4:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-144,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-144,delay:0.39});
            tl.to(amex_cashflow_droppingPage3,4,{x:120,y:600});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-192,delay:0.52});
            holdFrame(5,0.55);
            break;

        case 5:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-192,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-192,delay:0.39});
            tl.to(amex_cashflow_droppingPage4,2.8,{x:-80,y:600,delay:0.4});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-240,delay:0.52});
            holdFrame(6,0.55);
            break;

        case 6:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-240,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-240,delay:0.39});
            tl.to(amex_cashflow_droppingPage5,3,{x:130,y:600});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-288,delay:0.52});
            holdFrame(7,0.55);
            break;

        case 7:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-288,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-288,delay:0.39});
            tl.to(amex_cashflow_droppingPage6,5.8,{x:-40,y:600,delay:0.3});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-336,delay:0.52});
            holdFrame(8,0.55);
            break;

        case 8:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-336,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-336,delay:0.39});
            tl.to(amex_cashflow_droppingPage7,5,{x:150,y:600});
            tl.to(amex_cashflow_droppingPage8,3.1,{x:-70,y:600,delay:0.5});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-384,delay:0.52});
            holdFrame(9,0.55);
            break;

        case 9:
            tl.to(amex_cashflow_numbers,0,{x:-70,y:-384,delay:0.35});
            tl.to(amex_cashflow_numbers,0,{x:-140,y:-384,delay:0.39});
            tl.to(amex_cashflow_droppingPage9,4,{x:120,y:600,delay:1.5});
            tl.to(amex_cashflow_droppingPage10,2.8,{x:-80,y:600,delay:2.4});
            pageFlip();
            tl.to(amex_cashflow_numbers,0,{x:-0,y:-432,delay:0.52});
            tl.to(amex_cashflow_copy1,1,{opacity:1,delay:1.5});
            tl.to(amex_cashflow_copy2,1,{opacity:1,delay:2.5});
            tl.to([amex_cashflow_numberContainer,amex_cashflow_calendarContainer,amex_cashflow_pagesContainer,amex_cashflow_droppingPageContainer,amex_cashflow_calendarCopyContainer],1,{opacity:0,delay:4});
            holdFrame(10,4);
            break;

        case 10:
            tl.to(amex_cashflow_endFrame,1,{opacity:1,delay:0.5});
            holdFrame(11,2);
            break;

        case 11:
            tl.to(amex_cashflow_amexLogo02,0.3,{scaleX:0,scaleY:1,opacity:0,});
            tl.set(amex_cashflow_amexLogo01,{scaleX:0,scaleY:1,opacity:1});
            tl.to(amex_cashflow_amexLogo01,0.3,{scaleX:1,scaleY:1,opacity:1,delay:0.3});
            tl.to(amex_cashflow_cta,0,{x:0,y:-100,opacity:1,delay:0});
            tl.to(amex_cashflow_cta,3,{x:350,y:230,delay:1});
            tl.to(amex_cashflow_cta,0,{x:350,y:160,delay:4});
            tl.to(amex_cashflow_cta,0,{x:300,y:160,rotation:180,alpha:1,delay:4.1});
            tl.to(amex_cashflow_cta,0.5,{x:180,y:160,rotation:180,overwrite:0,delay:4.1});
            tl.to(amex_cashflow_cta,0.3,{x:180,y:200,rotation:0,overwrite:0,delay:4.42});
            tl.to(amex_cashflow_cta,0.5,{x:230,y:200,rotation:0,overwrite:0,delay:4.58});
            break;

    }
}

function pageFlip() {
        tl.to(amex_cashflow_pages,0,{x:0,y:0,opacity:0,delay:0});
        tl.to(amex_cashflow_pages,0,{opacity:1,delay:0.35});
        tl.to(amex_cashflow_pages,0,{x:-140,y:1,opacity:1,delay:0.37});
        tl.to(amex_cashflow_pages,0,{x:-280,y:0,opacity:1,delay:0.39});
        tl.to(amex_cashflow_pages,0,{x:-418,y:-3,opacity:1,delay:0.41});
        tl.to(amex_cashflow_pages,0,{x:-1,y:-162,opactiy:1,delay:0.43});
        tl.to(amex_cashflow_pages,0,{x:-135,y:-162,opactiy:1,delay:0.45});
        tl.to(amex_cashflow_pages,0,{x:-267,y:-162,opactiy:1,delay:0.47});
        tl.to(amex_cashflow_pages,0,{x:-418,y:-162,opactiy:1,delay:0.49});
        tl.to(amex_cashflow_pages,0,{x:-618,y:-500,opactiy:1,delay:0.51});
}
