// window.onload = hoverMenu();

window.addEventListener('load', hoverMenu());

function hoverMenu() {
    var header = $(".proFile");
    var menu = $(".profile-menu");

    $(header).hover(
        function () {
            // over
            $(menu).stop().slideDown("fast");
        }, function () {
            // out
            $(menu).stop().slideUp("fast");
        }
    );

    $(menu).hover(
        function () {
            // over
            $(menu).stop().slideDown("fast");
        }, function () {
            // out
            $(menu).stop().slideUp("fast");
        }
    );
}

function TermsPopUp() {
    var terms = document.getElementsByClassName('terms-box')[0];
    var value = terms.getElementsByTagName('a');

    alert(document.getElementsByTagName('a')[2].id);
    console.log(terms);
    console.log(value);
    
    var htmlLink = null;

    if(value == "terms1") {
        // 서비스 이용약관
        htmlLink = "/Terms_of_Use/service.html";
    } else if(value == "terms2") {
        // 개인정보처리방침
        htmlLink = null;
        alert("아직 안함 좀만 ㄱㄷ");
    } else if(value == "terms3") {
        // 위치 기반 서비스 이용약관
        htmlLink = "/Terms_of_Use/location_based.html";
    } 
    if(htmlLink != null) {
        window.open(htmlLink, "location pop", "location = no");
    }

    return htmlLink, value, terms;
}