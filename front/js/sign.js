id_cite = false; // 아이디 중복 확인
mail_cite = false; // 메일 인증
sign_up_submit = false; // 회원가입 넘어가기
sign_in_submit_num = 0; // 로그인 실패 횟수

// sign up : input, span, label
let input_up = document.querySelectorAll("main#main-sign-box input.sign-input");
let span_up = document.querySelectorAll("main#main-sign-box span.notNull-sign");
let label_up = document.querySelectorAll("main#main-sign-box label.sign-label");

// sign in : input, label 
let input_in = document.querySelectorAll("main#main-sign-box_in input.sign-input");
let span_in = document.querySelectorAll("main#main-sign-box_in span.notNull-sign");
let label_in = document.querySelectorAll("main#main-sign-box_in label.sign-label");

// 약관
var terms_checkbox = ["#terms_all", "#terms_all:checked", "div.terms-box_sign>label>input.terms_checkbox", "div.terms-box_sign>label>input.terms_checkbox:checked", "input.checkbox_checked_class", "input.checkbox_checked_class:checked"];


/* sign up */
$("main#main-sign-box input#sign_user_pw").on("click keyup", function () {
    // input or span list
    var list = ["input#sign_user_pw", "span#sign_pw_null"];
    // var list = [$("input#sign_user_pw"), $("span#sign_pw_null")];
    // password 가능 특수문자
    var pwList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "?"];

    if ($(list[0]).val() != "") { // 입력을 했다면
        $("label.sign-label.pw").css({ "top": "28%", "font-size": ".9em" }); // label css 
        for (var i = 0; i <= pwList.length; i++) {
            if ($(list[0]).val().indexOf(pwList[i]) > 0 && $(list[0]).val().length > 7 && $(list[0]).val().length < 31) {
                inputHideORShow("#00f", list[0], list[1]);
                break;
            } else if ($(list[0]).val().length < 8 || $(list[0]).val().length > 30) { // 글자 수 8미만 30초과라면
                $(list[1]).text("8자 이상 30자 이하로 적어주세요.");
            } else {
                $(list[1]).text("보안에 취약합니다.");
                inputHideORShow("#f00", list[0], list[1]);
            }
        }
    } else { // 입력을 안했다면
        $(list[1]).text("8~30자리/영문, 숫자, 특수문자 조합으로 입력해주세요.");
        inputHideORShow("#f00", list[0], list[1]);
    }
});

// 회원가입 안 input 을 클릭 or 입력시
input_up.forEach((e, index) => {
    e.addEventListener("click", (e) => {
        inputALLHideORShow(input_up[index], span_up[index], label_up[index]);
    });
    e.addEventListener("keyup", (e) => {
        inputALLHideORShow(input_up[index], span_up[index], label_up[index]);
    });
});

// 로그인 안 input 을 클릭 or 입력시
input_in.forEach((e, index) => {
    e.addEventListener("click", (e) => {
        inputALLHideORShow(input_in[index], span_in[index], label_in[index]);
    });
    e.addEventListener("keyup", (e) => {
        inputALLHideORShow(input_in[index], span_in[index], label_in[index]);
    });
});

// 비밀번호 제외 input, span css 제어
function inputALLHideORShow(INPUT, SPAN, LABEL) {
    var sign_boolean = true;
    var notINTPUT = [document.getElementById("sign_user_pw"), document.getElementById("sign_user_mail"), document.getElementById("sign_user_phone"), document.getElementById("sign_user_pw_reconfirm")];

    if (notINTPUT[0] != INPUT) { // pw 제외
        switch (INPUT) {
            case notINTPUT[1]: if ($(notINTPUT[1]).val().indexOf("@") < 0 || $(notINTPUT[1]).val().indexOf(".") < 0) sign_boolean = false; break;
            case notINTPUT[2]: if ($(notINTPUT[2]).val().split('-').length - 1 != 2) sign_boolean = false; break;
            case notINTPUT[3]: if ($(notINTPUT[3]).val() != $(notINTPUT[0]).val()) sign_boolean = false; break;
            default: sign_boolean = true; break;
        }

        if (INPUT.value == "" || !sign_boolean) { // input 값이 없다면
            $(INPUT).css({ "border-bottom-color": "#f00" });
            $(SPAN).show();
        } else if (INPUT.value != "") {
            $(LABEL).css({ "top": "28%", "font-size": ".9em" });
            $(INPUT).css({ "border-bottom-color": "#00f" });
            $(SPAN).hide();
        }
    }
    return sign_boolean;
}

// 비밀번호 input, span css
function inputHideORShow(color, INPUT, SPAN) {
    $(INPUT).css({ "border-bottom-color": color });
    if (color == "#00f") {
        sign_up_submit = true;
        $("#pw-reconfirm").show();
        $(SPAN).hide();
    } else {
        $(SPAN).show();
    }
    return sign_up_submit;
}

// 버튼 클릭시 input, span css 제어
function allShow(input, span) {
    var inputPW = document.getElementById("sign_user_pw");

    for (var i = 0; i < input.length; i++) {
        if (input[i].value == "") {
            $(input[i]).css({ "border-bottom-color": "#f00" });
            if (input[i] == inputPW && span != null) {
                $(span[i]).text("8~30자리/영문, 숫자, 특수문자 조합으로 입력해주세요.");
                inputHideORShow("#f00", input[i], span[i]);
            }
            $(span[i]).show();
        }
    }
}

/* terms */
// 전체 선택 checkbox 클릭 시
$(terms_checkbox[0]).click(function () {
    $("div.terms>h3.terms-title").css({ "color": "#000" });
    $("div.terms>div.terms-box_sign label").css({ "color": "#000" });

    if ($(terms_checkbox[0]).is(":checked")) {
        $(terms_checkbox[2]).prop('checked', true);
    } else {
        $(terms_checkbox[2]).prop('checked', false);
    }
});

// checkbox 전부 클릭 시
$(terms_checkbox[2]).click(function () {
    $("div.terms>h3.terms-title").css({ "color": "#000" });
    $("div.terms>div.terms-box_sign label").css({ "color": "#000" });

    if ($(terms_checkbox[3]).length > 3) {
        $(terms_checkbox[0]).prop('checked', true);
    } else {
        $(terms_checkbox[0]).prop('checked', false);
    }
});

/* button */
// cite button
function cite(ID) {
    console.error("나머진 백엔드가");
    $(ID).css({
        "background-color": "#fff", "color": "#fff", "border": "1px solid #000", "color": "#000"
    });
}

// sign up button
$("button#sign_up_submit").click(function () {
    for (var i = 0; i < input_up.length; i++) {
        if (input_up[i].value == "" || !sign_up_submit) {
            sign_up_submit = false;
            enterkey(100);
            break;
        }
    }
    if ($(terms_checkbox[4]).length == $(terms_checkbox[5]).length && sign_up_submit && mail_cite && id_cite) {
        document.sign_up_frm.submit();
    } else {
        allShow(input_up, span_up);
        if ($(terms_checkbox[4]).length != $(terms_checkbox[5]).length) {
            $("div.terms>h3.terms-title").css({ "color": "#f44" });
            $("div.terms>div.terms-box_sign label").css({ "color": "#f77" });
        }
        if (!id_cite) {
            $("button#id_cite_btn").css({ "background-color": "#f77", "color": "#fff", "border": "none" });
            alert("아이디 중복 확인 좀..");
        }
        if (!mail_cite) {
            $("button#mail_cite_btn").css({ "background-color": "#f77", "color": "#fff", "border": "none" });
            alert("메일 인증 좀..");
        }
    }
    console.error("SIGN UP : " + sign_up_submit);
    return sign_up_submit;
});

// sign in button
$("button#sign_in_submit").click(function () {
    sign_in_submit = true;
    for (var i = 0; i < input_in.length; i++) {
        if (input_in[i].value == "") {
            sign_in_submit = false;
            break;
        }
    }
    if (sign_in_submit) {
        document.sign_in_frm.submit();
        return sign_up_submit_num;
    } else if (sign_in_submit_num > 6) {
        sign_in_submit = false;
        alert("너무 틀렸다 고만해라");
    } else {
        allShow(input_in, span_in);
        enterkey_in(100);
        sign_in_submit_num++;
    }
    console.error("SIGN IN : " + sign_in_submit);
    console.log(sign_in_submit_num);
});

/* key borde*/
// sign up keyboard
function enterkey_up(num) {
    if (window.event.keyCode == 13) {
        if (num == 100) {
            for (var i = 0; i < input_up.length; i++) {
                if ($(input_up[i]).val() == "" || $(input_up[i]).val() == null) {
                    $(input_up[i]).focus();
                    break;
                } else if (i == input_up.length - 1) {
                    $("#sign_up_submit").click();
                }
            }
        } else {
            num = (!sign_up_submit && num == 2) ? num += 1 : num;
            num = (num < input_up.length - 1) ? num += 1 : num = 0;
            $(input_up[num]).focus();
        }
    }
}
// sign in keyboard
function enterkey_in(num) {
    if (window.event.keyCode == 13) {
        if (num == 100) {
            for (var i = 0; i < input_in.length; i++) {
                if ($(input_in[i]).val() == "" || $(input_in[i]).val() == null) {
                    $(input_in[i]).focus();
                    break;
                } else if (i == input_in.length - 1) {
                    $("#sign_in_submit").click();
                }
            }
        } else {
            num = (num < input_in.length - 1) ? num += 1 : num = 0;
            $(input_in[num]).focus();
        }
    }
}