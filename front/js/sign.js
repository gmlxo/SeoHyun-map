/* 약관 */ 
var terms_checkbox_all = $("#terms_all");
var terms_checkbox_all_check = $("#terms_all:checked");
var terms_checkbox = $("div.terms-box>label>input[type=checkbox]");
var terms_checkbox_check = $("div.terms-box>label>input[type=checkbox]:checked");

terms_checkbox_all.click(function() {
    console.log("전체 선택 : " + terms_checkbox_all.is(":checked"))
    if(terms_checkbox_all.is(":checked")) {
        terms_checkbox.prop('checked', true);
    } else {
        terms_checkbox.prop('checked', false);
    }
});

terms_checkbox.click(function() {
    console.log("선택된 개수 : " + terms_checkbox_check.length);

    if(terms_checkbox_check.length >= 4) {
        terms_checkbox_all_check.prop('checked', true);
    } else {
        terms_checkbox_all_check.prop('checked', false);
    }
});