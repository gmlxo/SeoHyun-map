sign_up_subit = false;

/* sign up */
$("main#main-sign-box input#sign_user_pw").on("click keyup", function () {
    // input or span list
    var list = ["input#sign_user_pw", "span#sign_pw_null"];
    // password 가능 특수문자
    var pwList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "?"];

    if ($(list[0]).val() != "") {
        $("label.sign-label.pw").css({ "top": "28%", "font-size": ".9em" });
        for (var i = 0; i <= pwList.length; i++) {
            if ($(list[0]).val().indexOf(pwList[i]) > 0 && $(list[0]).val().length > 7 && $(list[0]).val().length < 31) {
                inputHideORShow("#00f", list[0], list[1]);
                break;
            } else if($(list[0]).val().length < 8 || $(list[0]).val().length > 30) {
                $(list[1]).text("8자 이상 30자 이하로 적어주세요");
            } else {
                $(list[1]).text("보안에 취약합니다.");
                inputHideORShow("#f00", list[0], list[1]);
            }
        }
    } else {
        $(list[1]).text("8~30자리/영문 대소문자, 숫자, 특수문자 조합으로 입력해주세요.");
        inputHideORShow("#f00", list[0], list[1]);
    }
});

function inputHideORShow(color, inputID, SPAN) {
    $(inputID).css({ "border-bottom-color": color });
    if(color == "#00f") { 
        sign_up_subit = true;
        $(SPAN).hide();
    } else {
        $(SPAN).show();
    }
    return sign_up_subit;
}

let input_up = document.querySelectorAll("main#main-sign-box input.sign-input");
let span_up = document.querySelectorAll("main#main-sign-box span.notNull-sign");
let label_up = document.querySelectorAll("main#main-sign-box label.sign-label");

input_up.forEach((e, index) => {
    e.addEventListener("click", (e) => {
        inputALLHideORShow(input_up[index], span[index], label[index]);
    });
    e.addEventListener("keyup", (e) => {
        inputALLHideORShow(input_up[index], span[index], label[index]);
    });
});

function inputALLHideORShow(inputID, inputSPAN, inputLABEL) {
    var inputPW = document.getElementById("sign_user_pw");

    if (inputID != inputPW) {
        if (inputID.value == "") {
            $(inputID).css({ "border-bottom-color": "#f00" });
            $(inputSPAN).show();
        } else {
            $(inputLABEL).css({ "top": "28%", "font-size": ".9em" });
            $(inputID).css({ "border-bottom-color": "#00f" });
            $(inputSPAN).hide();
        }
    }
}

/* 약관 */
var terms_checkbox = ["#terms_all", "#terms_all:checked", "div.terms-box_sign>label>input.terms_checkbox", "div.terms-box_sign>label>input.terms_checkbox:checked", "input.checkbox_checked_class", "input.checkbox_checked_class:checked"];

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

/* sign up button */
$("button#sign_up_submit").click(function() {
    console.error("SIGN UP : " + sign_up_subit);
    for(var i=0; i<input_up.length; i++) {
        if($(terms_checkbox[4]).length == $(terms_checkbox[5]).length && input_up[i] != "" && sign_up_subit) {    
            document.sign_up_frm.submit();
        }
    }
});

let input_in = document.querySelectorAll("main#main-sign-box_in input.sign-input");

/* sign in button */
$("button#sign_in_submit").click(function() {
    console.error("SIGN IN : " + );
    for(var i=0; i<input_in.length; i++) {
        if(input_in[i] != "") {    
            document.sign_in_frm.submit();
        }
    }
});