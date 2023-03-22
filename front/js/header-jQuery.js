// window.onload = hoverMenu();

window.addEventListener('load', hoverMenu())

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

function locationPopUp() {
    var value = document.getElementById("terms").getAttribute('value-number');
    var htmlLink = "#";
    if(value == 1) {
        // 서비스 이용약관
        htmlLink = "/Terms_of_Use/service.html";
    } else if(value == 2) {
        // 개인정보처리방침
        htmlLink = "#";
    } else if(valuec == 3) {
        // 위치 기반 서비스 이용약관
        htmlLink = "/Terms_of_Use/location_based.html";
    }
    window.open(htmlLink, "location pop", "location = no");
}