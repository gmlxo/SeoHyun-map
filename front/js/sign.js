/* sign up */
$("input#sign_user_pw").on("click keyup", function () {
    var list = ["input#sign_user_pw", "span#sign_pw_null", "span#sign_pw_no"];
    // var input = "input#sign_user_pw";
    // var span = "span#sign_pw_null";
    // var spanNO = "span#sign_pw_no";
    var pwList = ["!", "@", "#", "$", "%", "^", "&", "*", "_"];

    if($(list[0]).val() != "") {
        for(var i = 0; i<=pwList.length; i++) {
            if($(list[0]).val().indexOf(pwList[i])>0 || $(list[1]).val().length > 7) {
                inputHideORShow("#00f", list[0], list[1], list[2]);
                break;
            } else {
                inputHideORShow("#f00", list[0], list[2], list[1]);
            }
        }
    } else {
        inputHideORShow("#f00", list[0], list[2], list[1]);
    }
});

function inputHideORShow(color, inputID, SPAN1, SPAN2) {
    $(inputID).css({ "border-bottom-color": color });
    $(SPAN1).hide();
    if(color == "#f00") {
        $(SPAN2).show();
    } else {
        $(SPAN2).hide();
    }
}

/* version 1 */
// function inputHideORShow(inputID, inputSPAN) {
//     if ($(inputID).val() == "") {
//         $(inputID).css({ "border-bottom-color": "#f00" });
//         $(inputSPAN).show();
//     } else {
//         $(inputID).css({ "border-bottom-color": "#00f" });
//         $(inputSPAN).hide();
//     }
// }

/* version 2 */
let input = document.querySelectorAll("input.sign-input");
let span = document.querySelectorAll("span.notNull-sign");
input.forEach((e, index)=>{
    e.addEventListener("click", (e) => {
        inputALLHideORShow(input[index], span[index]);
    });
    e.addEventListener("keyup", (e) => {
        inputALLHideORShow(input[index], span[index]);
    });
});

function inputALLHideORShow(inputID, inputSPAN) {
    var inputPW = document.getElementById("sign_user_pw");

    if(inputID != inputPW) {
        if(inputID.value == "") {
            $(inputID).css({ "border-bottom-color":"#f00" });
            $(inputSPAN).show();
        }
    }
}

/* 약관 */
var terms_checkbox_all = $("#terms_all");
var terms_checkbox_all_check = $("#terms_all:checked");
var terms_checkbox = $("div.terms-box>label>input[type=checkbox]");
var terms_checkbox_check = $("div.terms-box>label>input[type=checkbox]:checked");

// 전체 선택 checkbox 클릭 시
terms_checkbox_all.click(function () {
    console.log("전체 선택 : " + terms_checkbox_all.is(":checked"))
    if (terms_checkbox_all.is(":checked")) {
        terms_checkbox.prop('checked', true);
    } else {
        terms_checkbox.prop('checked', false);
    }
});

// checkbox 전부 클릭 시
terms_checkbox.click(function () {
    console.log("선택된 개수 : " + terms_checkbox_check.length);

    if (terms_checkbox_check.length >= 4) {
        terms_checkbox_all_check.prop('checked', true);
    } else {
        terms_checkbox_all_check.prop('checked', false);
    }
});