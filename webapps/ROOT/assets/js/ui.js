$(function () {
    $('#wrapper').css({ 'height': ($(document).height()) + 'px'});
    $(window).resize(function () {
        //$('#wrapper').css({ 'height': ($(document).height()) + 'px' });
    });
    
    //팝업창 생성
    $("#bot > div").add(
        "<div class='mov-wrapper popupArea'>" +
            "<div class='popHeader'>" +
                "<span id='movTitle' class='popupTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            "<div class='popBody'>" +
                "<iframe id='video' src='' frameborder='0' allowfullscreen='true' style='overflow-x:hidden;overflow:auto;width:100%;height:487px;'></iframe>" +
            "</div>" +
        "</div>").appendTo("#bot");

    //이미지 팝업창 생성(cardDivision : img)
    $("#bot > div").add(
        "<div class='img-wrapper popupArea'>" +
        "<div class='popHeader'>" +
        "<span id='imgTitle' class='popupTitle'></span>" +
        "<button class='btnTopClose'></button>" +
        "</div>" +
        "<div id='imgCarousel' class='popBody' align='center'>" +
        "<img id='imgTag' src='' width='568' height='318'>" +
        "</div> " +
        "</div>").appendTo("#bot");

    //제스처 케릭터 영역 생성
    $("#bot > div").add(
        "<div class='gesture-wrapper gestureArea'>" +
            "<div class='gestureHeader'>" +
                "<span id='gestureTitle' class='gestureTitle'></span>" +
                "<button class='btnTopClose'></button>" +
            "</div>" +
            //"<div class='gestureBody'>" +
                //"<iframe id='gesture' src='https://timesolutiongesture.azurewebsites.net' frameborder='0' allowfullscreen='true' style='overflow-x:hidden;overflow:auto;width:100%;height:322px;'></iframe>" +
            //"</div>" +
            "<div id='animationDiv' style='width:250px;height:488px;background:#000'>" +
                //"<button class='testBtn'>ChatBot_AinTest02</button>" +
                //"<br>" +
                //"<button onclick='playAction(0);'>동작0</button>" +
                //"<button onclick='playAction(1);'>동작1</button>" +
                //"<button onclick='playAction(2);'>동작2</button>" +
                //"<button onclick='playAction(3);'>동작3</button>" +
                //"<button onclick='playAction(4);'>동작4</button>" +
                //"<button onclick='playAction(5);'>동작5</button>" +
                //"<button onclick='playAction(6);'>동작6</button>" +
                //"<button onclick='playAction(7);'>동작7</button>" +
                //"<button onclick='playAction(8);'>동작8</button>" +
                //"<button onclick='playAction(9);'>동작9</button>" +
                //"<button onclick='playAction(10);'>동작10</button>" +
                //"<button onclick='playAction(11);'>동작11</button>" +
                //"<button onclick='playAction(12);'>동작12</button>" +
                //"<button onclick='playAction(13);'>동작13</button>" +
                //"<button onclick='playAction(14);'>동작14</button>" +
                //"<button onclick='playAction(15);'>동작15</button>" +
                //"<button onclick='playAction(16);'>동작16</button>" +
                //"<button onclick='playAction(17);'>동작17</button>" +
                //"<button onclick='playAction(18);'>동작18</button>" +
                //"<button onclick='playAction(19);'>동작19</button>" +
            "</div>" +
            
            
        "</div>").appendTo("#bot");

    //챗봇창 상단 생성
    $(".wc-header > span").add(
        "<span class='chatTitle'></span>" +
        "<span class='chatTitleText'><strong>한화생명</strong> 직원복지</span>" +
        "<span class='topIcon btnClose'><button class='topIcon03'></button></span>" +
        "<span class='topIcon btnLayer btnLayerFull'><button class='topIcon02'></button></span>" +
        "<span class='topIcon btnMin'><button class='topIcon01'></button></span>").appendTo(".wc-header");
        //"<span class='topGestureArea'><button class='topGestureIcon'>C</button></span>").appendTo(".wc-header");
    /*
    //챗봇 메뉴창 생성
    $(".wc-chatview-panel > div").add(
        "<div class='menuBox off'>" +
        "<p class='menuReStartBtn'><span> Menu </span></p>" +
        "<ul>" +
        //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident analysis')'> Accident analysis </span></a></li>" +
        //"<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu('Accident trends')'> Accident trends </span></a></li>" +
        "<li class='menuSelectBtn'><span><a href='#' onclick='viewMenu()'> return home </span></a></li>" +
        "</ul>" +
        "</div > ").appendTo(".wc-chatview-panel");
    */

    //챗봇창 버튼 동작
    $('.btnClose').click(function () {
        $('.wc-chatview-panel').css('bottom', 0).hide();
        $('.bot-wrap').hide().removeClass("chatOn").addClass("chatOff");
    });
    //, "border-radius": "10px"
    $('.btnMin').click(function () {
        $('.wc-chatview-panel').css({ "overflow": "hidden" });
        $('.wc-chatview-panel').animate({ "height": "32px" }, "fast");
        $('.wc-console, wc-message-pane').hide();
        $('.btnMin').css({ 'display': 'none' });
        $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
        $('.btnLayer > button').removeClass('topIcon02').addClass('topIcon02-1');
        $('.btnTopClose').trigger('click');
    });
    $(document).on('click', '.wc-header [class*=btnLayer]', function () {
        if ($(this).hasClass('btnLayerMid')) {
            $('.wc-chatview-panel').css({ "bottom": "5px" });
            $('.wc-chatview-panel').css({ "overflow": "hidden" });
            //$('.wc-chatview-panel').css({ "overflow": "visible" }); //original
            $('.wc-chatview-panel').animate({ "height": "582px" }, "fast");
            $('.wc-console, wc-message-pane').show();
            $('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02-1').addClass('topIcon02');
            $('.btnMin').css({ 'right': '58px', 'display': 'inline-block' });


            var chatHeight = ($(document).height()) - 582 - 6;
            if ($('.topGestureOnImg').attr('alt') == 'on') {
                $('.img-wrapper').animate({ "top": chatHeight + "px" }, "fast");
                $('.wc-chatview-panel').animate({ "right": 0 }, "fast");
            } else if ($('.topGestureOffImg').attr('alt') == 'off') {
                $('.img-wrapper').animate({ "top": chatHeight + "px" }, "fast");
                $('.wc-chatview-panel').animate({ "right": 150 + 'px' }, "fast");
            } else {
                $('.img-wrapper').animate({ "top": chatHeight + "px" }, "fast");
            }
            

        } else {
            $('.wc-chatview-panel').animate({ "height": ($(document).height()) + 'px' }, "fast");
            $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
            $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02').addClass('topIcon02-1');

            
            
            var chatHeight = 0; //$('.wc-chatview-panel .wc-header').offset().top;
            if ($('.topGestureOnImg').attr('alt') == 'on') {
                $('.img-wrapper').animate({ "top": chatHeight + "px" }, "fast");
                $('.wc-chatview-panel').animate({ "right": 0 }, "fast");
            } else if ($('.topGestureOffImg').attr('alt') == 'off') {
                $('.img-wrapper').animate({ "top": chatHeight + "px" }, "fast");
                $('.wc-chatview-panel').animate({ "right": 150 + 'px' }, "fast");
            } else {
                $('.img-wrapper').animate({ "top": chatHeight + "px" }, "fast");
            }
            
        }
        //$('.wc-chatview-panel').css('overflow', 'hidden');
    });

    //챗봇 메뉴 버튼 동작
    $('.menuIcon').click(function (){
        if ($('.menuBox').hasClass("off")) {
            $('.menuBox').removeClass('off').addClass('on');
            $('.menuBox').css({ 'display': 'block' });
        } else {
            $('.menuBox').removeClass('on').addClass('off');
            $('.menuBox').css({ 'display': 'none' });
        }
    });
    
	//챗봇 팝업 동작 (동영상)
    $(document).on('click', '.wc-card-play > .non-adaptive-content', function () {
        
        var movPopTitle = $(this).children().eq(1).attr('alt');
        $('#movTitle').text(movPopTitle);
        var movPopUrl = $(this).children().eq(2).attr('alt');
        $('#video').attr('src', movPopUrl);
        $('.mov-wrapper').show().animate({ "right": "380px", "opacity": "1", "display": "block" }, "fast").fadeIn("fast");

    });
    //챗봇 제스처 동작
    var startJesture = 0;
    $('.topGestureIcon').click(function () {
        if (startJesture == 0) {
            playAnimation('ChatBot_AniAll01');
            startJesture = 1;
        }
        $('.gesture-wrapper').show().animate({ "right": "380px", "opacity": "1" }, "slow").fadeIn("slow");
    });
    //닫기 버튼
    $('.btnTopClose').click(function () {
        $("#video").attr('src', '');
        $('.mov-wrapper, .img-wrapper, .map-wrapper, .reel-wrapper').hide().animate({ "right": "1px", "opacity": "0", "display": "none" }, "fast").fadeOut("fast");

        if ($('.topGestureOnImg').attr('alt') == 'on') {
            $('.wc-chatview-panel').show().animate({ "right": 5 + "%" }, "fast");
        } else if ($('.topGestureOffImg').attr('alt') == 'off') {
            $('.wc-chatview-panel').show().animate({ "right": 27 + '%' }, "fast");
        }
    });


    //제스처 테스트
    //$('.topGestureArea').click(function () {
    //    //playAnimation('ChatBot_AinTest02');
    //    playAnimation('ChatBot_AniAll01');
    //});
});


//팝업 영역 호출
$(document).on('click', '.ac-image', function () {
    var popType = $(this).parent().parent().parent().children().eq(0).children().eq(0).attr('alt');
    console.log("popType :: " + popType);

    $("#video").attr('src', '');

    var chageChatHeight = parseInt($('.wc-chatview-panel').css('height')) - 323;    //팝업창 크기가 변하면 숫자 수정해야함
    if (popType == "img") { // IMG

        if ($('.img-wrapper').css('display') == 'block') {
            $('.img-wrapper').fadeOut("fast");
        } else {
            $('.mov-wrapper, .map-wrapper, .reel-wrapper').fadeOut();
            $('#imgDiv > div').remove();
            var manyImg = false;
            var imgPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
            var imgUrl = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
            var imgCnt = $(this).parent().parent().parent().children().eq(0).children().eq(3).attr('alt');
            $('#imgTag').attr('src', imgUrl);
            $('#imgTitle').text(imgPopTitle);
            var chatHeight = $('.wc-chatview-panel .wc-header').offset().top;
            var chatWidth = $('.wc-chatview-panel').css('width');
            if ($('.topGestureOnImg').attr('alt') == 'on') {
                $('.img-wrapper').show().animate({ "right": chatWidth, "opacity": "1", "bottom": chageChatHeight + "px", "top": chatHeight + "px" }, "fast");
                $('.wc-chatview-panel').show().animate({ "right": 0 }, "fast");
            } else if ($('.topGestureOffImg').attr('alt') == 'off') {
                $('.img-wrapper').show().animate({ "right": chatWidth, "opacity": "1", "bottom": chageChatHeight + "px", "top": chatHeight + "px" }, "fast");
                $('.wc-chatview-panel').show().animate({ "right": 150 + 'px' }, "fast");
            } else {
                $('.img-wrapper').show().animate({ "right": chatWidth, "opacity": "1", "bottom": chageChatHeight + "px", "top": chatHeight + "px" }, "fast");
            }
        }
    } else if (popType == "play") { // PLAY
        $('.img-wrapper, .map-wrapper, .reel-wrapper').fadeOut();
        var movPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
        var movPopUrl = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
        $('#movTitle').text(movPopTitle);
        $('#video').attr('src', movPopUrl);

        if ($('.topGestureOnImg').attr('alt') == 'on') {
            $('.mov-wrapper').show().animate({ "right": "780px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
            $('.wc-chatview-panel').show().animate({ "right": 0 }, "fast");
        } else if ($('.topGestureOffImg').attr('alt') == 'off') {
            $('.mov-wrapper').show().animate({ "right": "930px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
            $('.wc-chatview-panel').show().animate({ "right": 150 + 'px' }, "fast");
        } else {
            $('.mov-wrapper').show().animate({ "right": "421px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
        }
    } else if (popType == "map") {  // MAP
        $('.mov-wrapper, .img-wrapper, .reel-wrapper').fadeOut();
        $('#mapArea > div').remove();
        $('#mapArea').add("<div id='map' style='border:1px solid #000;'></div>").appendTo('#mapArea');
        var mapTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
        $('#mapTitle').text(mapTitle);
        var coordinate = $(this).parent().parent().parent().children().eq(0).children().eq(2).attr('alt');
        var _temp = coordinate.split(',');
        var longitude = _temp[0];
        var latitude = _temp[1];
        /* V3로 변경*/
        var position = new naver.maps.LatLng(longitude, latitude);
        var map = new naver.maps.Map('map', {
            center: position,
            zoom: 12,
            size: new naver.maps.Size(568, 318)
        });
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(longitude, latitude),
            map: map
        });
        $('.map-wrapper').show().animate({ "right": "421px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
    } else if (popType == "reel") { // REEL
        $('.img-wrapper, .map-wrapper, .mov-wrapper').fadeOut();

        var reelPopTitle = $(this).parent().parent().parent().children().eq(0).children().eq(1).attr('alt');
        $('#reelTitle').text(reelPopTitle);
        if ($('.reel-wrapper').css('display', 'block')) {
            $('#image').reel({
                images: "assets/image/car/000##.jpg",
                frames: 60,
                cw: true,
                brake: 10,
                throwable: 10
            });
        }

        $('.reel-wrapper').show().animate({ "right": "421px", "opacity": "1", "bottom": chageChatHeight + "px" }, "fast");
    }
});





//챗봇 메뉴 처음으로 돌아가기
//function viewMenu() {
//    var returnText = "return home";     // 처음으로 돌아가는 텍스트
//    $('div.wc-console').addClass('has-text');
//    $('input[type="text"].wc-shellinput').attr('value', returnText);
//    $('input[type="text"].wc-shellinput').val(returnText);
//    $('label.wc-send').trigger('click');
//    $('input[type="text"].wc-shellinput').attr('value', '');
//    $('input[type="text"].wc-shellinput').val('');
//    $('.wc-console').removeClass('has-text');
//    $('.menuBox').removeClass('on').addClass('off');
//    $('.menuBox').css({ 'display': 'none' });
//}