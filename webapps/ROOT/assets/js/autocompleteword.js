$(function () {
    var autocomplete_text = [
        "경조금이 무엇인가요?",
		"경조금 지급기준은 어떻게 되나요?",
		"결혼 경조금 지급기준은 어떻게 되나요?",
		"회갑경조금 지급기준은 어떻게 되나요?",
		"조위 경조금 지급기준은 어떻게 되나요?",
		"자녀출생 경조금 지급기준은 어떻게 되나요?",
		"퇴직 직원은 경조금 지급이 가능한가요?",
		"화환 및 장례용품지금 기준은?",
		"경조금 신청 방법은?",
		"휴직자 및 휴가자도 경조금 신청이 가능합니까?",
		"경조일자 기준 1년 경과건도 지급이 가능합니까?",
		"본인 결혼의 경우 신청입력을 하면 대상자가 왜 공란으로 나옵니까?",
		"장례용품(조화) 지원이란?",
		"장례용품(조화) 지원대상은",
		"장례용품(조화) 지원기준은?",
		"장례용품(조화) 신청방법은? ",
		"축화화환지원은?",
		"축화화환 지원대상 및 내용?",
		"축화화환 신청방법은?",
		"학자급이란?",
		"학자금 수혜 인원은?",
		"학자금 지급기준 및 지급기간 ",
		"자녀학자금 지급 기준 및 지급 기간은?",
		"형제 자매 학자금 지급 기준 및 지급 기간은?",
		"기타학자금 지급 기준은?",
		"입학급 지급 기준은?",
		"수업료 지급 기준은?",
		"기성회비 지급 기준은?",
		"육성 회비 지급기준은?",
		"학교 운영비 지급기준은?",
		"학자금 신청방법은?",
		"장학금을 받은 경우에도 학자금 수혜가 가능합니까?",
		"해외 유학생인 경우 신청 서류는 어떻게 됩니까?",
		"대학교 해외유학생의 자녀학자금 지급한도는 어떻게 됩니까?",
		" 학자금 신청기간 1년을 경과한 경우 지급이 안됩니까?",
		"사내부부인 경우 중복지원 되나요?",
		"학자금 수혜대상 학교에 대한 조건이 따로 있나요?"
    ];

    //keyboard action으로 담을 변수
    var keyboardText = '';  

    //input 출력
    $(".wc-shellinput").autocomplete({
        position: { my: "right bottom-25", at: "right" },
        source: function (request, response) {
            var results = $.ui.autocomplete.filter(autocomplete_text, request.term);
            response(results.slice(0, 5));  //갯수 제한 5개
        },
        focus: function (event, ui) {   //한글만 검색됬을시 자동검색창 닫히는 현상(버전업 버그라고함)
            return false;
        },
        open: function (event, ui) {
            $(document).on('click', '.ui-menu-item-wrapper', function () {
                $('.wc-shellinput').attr('value', $(this).text());
                $('.hiddenText').attr('value', $(this).text());
            }).on('keydown', '.wc-shellinput', function () {
                if ($('.ui-menu-item-wrapper').text()) {
                    keyboardText = $('.ui-state-active').text();
                }
            });
        },
        close: function (event, ui) {
            //keyboard일 경우 닫을때 담아준다
            $('.wc-shellinput').attr('value', keyboardText);
            $('.hiddenText').attr('value', keyboardText);
        }
    });
});
