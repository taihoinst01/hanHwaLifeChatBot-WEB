$(function () {
	$('.bot-wrap').hide();

	var ie = (function (){
		if (window.ActiveXObject === undefined) return null;
		if (!document.querySelector) return 7;
		//if (parseFloat(navigator.appVersion.split("MSIE")[1].split(";")[0].split(" ").join("")) == 8) return 8;
		if(!document.addEventListener) return 8;
		if (!window.atob) return 9;
		if (!document.__proto__) return 10;
		return 11;
	})();
	if(ie == 10 || ie == 9 || ie == 8 || ie == 7){
		$('.bot-wrap').remove();
		$(".banner").remove();
	}
});

function isMobile() {
	var UserAgent = navigator.userAgent;

	if (UserAgent.match(/iPhone|iPad|iPod|Android|Windows CE|BlackBerry|Symbian|Windows Phone|webOS|Opera Mini|Opera Mobi|POLARIS|IEMobile|lgtelecom|nokia|SonyEricsson/i) != null || UserAgent.match(/LG|SAMSUNG|Samsung/) != null) {
		return true;
	} else {
		return false;
	}
}

if (isMobile()) {   //모바일 환경
	$(document).on('click', '#botChatBtn', function () {
		location.href = "index_m.html";
	});
} else {    // 웹 환경
    $(document).on('click', '#botChatBtn', function () {
        
        if ($('.bot-wrap').css('display') == 'block') {
            if ($('.btnMin').css('display') == 'none') {
                $('.wc-chatview-panel').css({ "bottom": "5px" });
                //$('.wc-chatview-panel').css({ "overflow": "visible"});
                $('.wc-chatview-panel').animate({ "height": "528px", "border-radius" : "10px" }, "fast");
                $('.wc-console, wc-message-pane').show();
                $('.btnLayer').removeClass('btnLayerMid').addClass('btnLayerFull');
                $('.btnLayer > button').css({ 'display': 'inline-block' }).removeClass('topIcon02-1').addClass('topIcon02');
                $('.btnMin').css({ 'right': '58px', 'display': 'inline-block' });
            } else {
                $('.wc-chatview-panel').css({ "overflow": "hidden"});
                $('.wc-chatview-panel').animate({ "height": "32px", "border-radius" : "10px" }, "fast");
                $('.wc-console, wc-message-pane').hide();
                $('.btnMin').css({ 'display': 'none' });
                $('.btnLayer').removeClass('btnLayerFull').addClass('btnLayerMid');
                $('.btnLayer > button').removeClass('topIcon02').addClass('topIcon02-1');
            }
        } else {
            //$('.topIcon01').css('top', '25px');
            $('.wc-chatview-panel').css({ "border-radius": "10px" });
            //$('.wc-menu').css('display', 'none');
            //$('.wc-textbox').css('left', '15px');
            $('.wc-chatview-panel').css('bottom', 0).show();
            $('.bot-wrap').show();
        }
	});
}
