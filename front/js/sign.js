sign_up_submit = false; // 회원가입 넘어가기

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
    // var list = ["input#sign_user_pw", "span#sign_pw_null"];
    var list = [$("input#sign_user_pw"), $("span#sign_pw_null")];
    // password 가능 특수문자
    var pwList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "?"];

    if ($(list[0]).val() != "") { // 입력을 했다면
        $("label.sign-label.pw").css({ "top": "28%", "font-size": ".9em" }); // label css 
        for (var i = 0; i <= pwList.length; i++) {
            // 입력값에 특문이 있으며 글자 수가 8이상 30이하인가
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
    var pw = document.getElementById("sign_user_pw");
    var mail = document.getElementById("sign_user_mail");
    var phone = document.getElementById("sign_user_phone");

    if (pw != INPUT) { // pw 제외
        switch (INPUT) {
            case mail: if ($(mail).val().indexOf("@") < 0 || $(mail).val().indexOf(".") < 0) sign_boolean = false; break;
            case phone: if ($("input#sign_user_phone").val().split('-').length - 1 != 2) sign_boolean = false; break;
            default: break;
        }
        if (INPUT.value == "" || !sign_boolean) { // input 값이 없다면
            $(INPUT).css({ "border-bottom-color": "#f00" });
            $(SPAN).show();
        } else {
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
    if ($(terms_checkbox[0]).is(":checked")) {
        $(terms_checkbox[2]).prop('checked', true);
    } else {
        $(terms_checkbox[2]).prop('checked', false);
    }
});

// checkbox 전부 클릭 시
$(terms_checkbox[2]).click(function () {
    if ($(terms_checkbox[3]).length > 3) {
        $(terms_checkbox[0]).prop('checked', true);
    } else {
        $(terms_checkbox[0]).prop('checked', false);
    }
});

/* button */
// sign up button
$("button#sign_up_submit").click(function () {
    for (var i = 0; i < input_up.length; i++) {
        if (input_up[i].value == "" || !sign_up_submit) {
            sign_up_submit = false;
            break;
        }
    }
    if ($(terms_checkbox[4]).length == $(terms_checkbox[5]).length && sign_up_submit) {
        document.sign_up_frm.submit();
    } else {
        allShow(input_up, span_up);
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
    } else {
        allShow(input_in, span_in);
    }
    console.error("SIGN IN : " + sign_in_submit);
});