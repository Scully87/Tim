function startAd() {
    showFrame(1);
}

var holdFrame = function(frame, time) {
    var delay = time*1000;
    frameWaitTimer = window.setTimeout(function(){showFrame(frame);}, delay);
}

function showFrame(id) {
    console.log('showing frame ' + id);
    tl = TweenLite
    switch(id) {
        case 1:
            tl.to(amex_planes_copy_frame1a,0.6,{x:40,y:20,delay:0});
            tl.to(amex_planes_copy_frame1b,0.6,{x:30,y:45,delay:0.2});
            tl.to(amex_planes_big_plane1,1,{x:15,y:170,delay:1});
            tl.to(amex_planes_big_plane2,1,{x:100,y:120,delay:0.7});
            tl.to(amex_planes_big_plane3,1,{x:175,y:170,delay:0.2});

            tl.to(amex_planes_copy_frame1a,0.5,{x:-500,y:20,delay:2.8});
            tl.to(amex_planes_copy_frame1b,0.5,{x:-500,y:45,delay:2.8});
            tl.to(amex_planes_big_plane1,0.5,{x:150,y:370,rotation:20,delay:2.8});
            tl.to(amex_planes_big_plane2,0.5,{x:500,y:50,rotation:-20,delay:2.8});
            tl.to(amex_planes_big_plane3,0.5,{x:500,y:150,rotation:0,delay:2.8});
            holdFrame(2,3);
            break;

        case 2:
            tl.to(amex_planes_copy_frame2a,0.5,{x:45,y:18,delay:0});
            tl.to(amex_planes_copy_frame2b,0.5,{x:90,y:48,delay:0.15});

            tl.to(amex_planes_plane1,1.5,{x:202,y:100,rotation:-5,delay:0.1});
            tl.to(amex_planes_plane2,1.5,{x:191,y:137,rotation:2,delay:0.5});
            tl.to(amex_planes_plane3,1.5,{x:196,y:188,rotation:10,delay:0.4});

            tl.to(amex_planes_plane4,1.5,{x:150,y:90,rotation:-15,delay:0.5});
            tl.to(amex_planes_plane5,1.5,{x:155,y:157,rotation:0,delay:0.6});
            tl.to(amex_planes_plane6,1.5,{x:160,y:208,rotation:15,delay:0.8});

            tl.to(amex_planes_plane7,1.5,{x:100,y:100,rotation:0,delay:1.1});
            tl.to(amex_planes_plane8,1.5,{x:94,y:137,rotation:0,delay:1.2});
            tl.to(amex_planes_plane9,1.5,{x:97,y:188,rotation:10,delay:1.0});

            tl.to(amex_planes_plane10,1.5,{x:50,y:100,rotation:0,delay:1.3});
            tl.to(amex_planes_plane11,1.5,{x:20,y:137,rotation:0,delay:1.5});
            tl.to(amex_planes_plane12,1.5,{x:15,y:188,rotation:10,delay:1.4});

            tl.to(amex_planes_plane1,1.5,{x:500,y:60,rotation:-20,delay:4.1});
            tl.to(amex_planes_plane2,1.5,{x:500,y:137,rotation:20,delay:4.5});
            tl.to(amex_planes_plane3,1.5,{x:500,y:238,rotation:50,delay:4.4});

            tl.to(amex_planes_plane4,1.4,{x:500,y:40,rotation:-20,delay:4.5});
            tl.to(amex_planes_plane5,1.4,{x:500,y:257,rotation:10,delay:4.6});
            tl.to(amex_planes_plane6,0.3,{x:230,y:278,rotation:80,delay:4.8});

            tl.to(amex_planes_plane7,1.3,{x:500,y:60,rotation:-40,delay:5.1});
            tl.to(amex_planes_plane8,1.3,{x:500,y:137,rotation:0,delay:5.2});
            tl.to(amex_planes_plane9,0.4,{x:200,y:270,rotation:60,delay:5.0});

            tl.to(amex_planes_plane10,1.2,{x:500,y:85,rotation:-10,delay:5.3});
            tl.to(amex_planes_plane11,1.2,{x:500,y:127,rotation:0,delay:5.5});
            tl.to(amex_planes_plane12,1.2,{x:500,y:168,rotation:-10,delay:5.4});

            tl.to(amex_planes_copy_frame2a,0.5,{x:-500,y:20,delay:5.65});
            tl.to(amex_planes_copy_frame2b,0.5,{x:-500,y:45,delay:5.65});
            holdFrame(3,6);
            break;

        case 3:
            tl.to(amex_planes_copy_frame3a,0.5,{x:5,y:90,delay:0});
            tl.to(amex_planes_copy_frame3b,0.5,{x:10,y:125,delay:0.15});
            tl.to(amex_planes_ibiza,1.2,{width:643,height:698,x:80,y:-430,delay:0.2});
            tl.to(amex_planes_copy_frame3a,0.5,{x:-500,y:90,delay:2.5});
            tl.to(amex_planes_copy_frame3b,0.5,{x:-500,y:125,delay:2.65});
            holdFrame(4,3);
            break;

        case 4:
            tl.to(amex_planes_ibiza,2,{width:225,height:244,x:40,y:5,delay:0});
            tl.to(amex_planes_ibiza,1,{opacity:0,delay:3});
            holdFrame(5,3.5);
            break;

        case 5:
            tl.to(amex_planes_endText,0.8,{x:50,y:20,delay:0});
            tl.to(amex_planes_tcs,0.8,{x:10,y:225,delay:0.4});
            tl.to(amex_planes_amexLogo02,0.8,{opacity:1,delay:0.9});
            holdFrame(6,2);
            break;

        case 6:
            tl.to(amex_planes_amexLogo02,0.3,{scaleX:0,scaleY:1,opacity:0,});
            tl.set(amex_planes_amexLogo01,{scaleX:0,scaleY:1,opacity:1});
            tl.to(amex_planes_amexLogo01,0.3,{scaleX:1,scaleY:1,opacity:1,delay:0.3});
            tl.to(amex_planes_ctaLines,1,{x:170,y:190,delay:1});
            tl.to(amex_planes_ctaLines,0.3,{x:200,y:134,rotation:-90,delay:1.3});
            tl.to(amex_planes_ctaLines,0.3,{x:170,y:90,rotation:-180,delay:1.6});
            tl.to(amex_planes_ctaLines,0.3,{x:130,y:134,rotation:-270,delay:1.9});
            tl.to(amex_planes_ctaLines,0.3,{x:170,y:190,rotation:0,delay:2.2});
//            tl.to(amex_planes_ctaLines,1,{x:170,y:190,rotation:360,delay:2.3});
            break;
    }
}
