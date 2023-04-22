/* sign up */
$("input#sign_user_pw").on("click keyup", function () {
    // input or span list
    var list = ["input#sign_user_pw", "span#sign_pw_null"];
    // password 가능 특수문자
    var pwList = ["!", "@", "#", "$", "%", "^", "&", "*", "_", "?"];

    if ($(list[0]).val() != "") {
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
        $(list[1]).text("내용이 입력되지 않았습니다.");
        inputHideORShow("#f00", list[0], list[1]);
    }
});

function inputHideORShow(color, inputID, SPAN) {
    $(inputID).css({ "border-bottom-color": color });
    if(color == "#00f") {
        $(SPAN).hide();
    } else {
        $(SPAN).show();
    }
}

let input = document.querySelectorAll("input.sign-input");
let span = document.querySelectorAll("span.notNull-sign");

input.forEach((e, index) => {
    e.addEventListener("click", (e) => {
        inputALLHideORShow(input[index], span[index]);
    });
    e.addEventListener("keyup", (e) => {
        inputALLHideORShow(input[index], span[index]);
    });
});

function inputALLHideORShow(inputID, inputSPAN) {
    var inputPW = document.getElementById("sign_user_pw");

    if (inputID != inputPW) {
        if (inputID.value == "") {
            $(inputID).css({ "border-bottom-color": "#f00" });
            $(inputSPAN).show();
        } else {
            $(inputID).css({ "border-bottom-color": "#00f" });
            $(inputSPAN).hide();
        }
    }
}

/* 약관 */
var terms_checkbox = ["#terms_all", "#terms_all:checked", "div.terms-box>label>input.terms_checkbox", "div.terms-box>label>input.terms_checkbox:checked"];

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