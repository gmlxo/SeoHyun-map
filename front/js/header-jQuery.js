// window.onload = hoverMenu();

window.addEventListener("load", /* notHover(),  */hoverMenu());


// function notHover() {
//     $(".search").hover(function(){
//         $(".profile-menu").remove();
//     }), function() {
//         $(".profile-menu").append();
//     }
//   };

/* header profile menu hover */
function hoverMenu() {
    $(".proFileSvg").hover(
        function () {
            // over
            $(".profile-menu").stop().slideDown("fast");
        }, function () {
            // out
            $(".profile-menu").stop().slideUp("fast");
        }
    );
    $(".profile-menu").hover(
        function () {
            // over
            $(".profile-menu").stop().slideDown("fast");
        }, function () {
            // out
            $(".profile-menu").stop().slideUp("fast");
        }
    );
    // return false;
}

/* footer 이용약관 새창 띄우기 */
function termsPopUp(number) {

    var htmlLink = null;

    switch (number) {
        case "terms1": // 서비스 이용약관
            htmlLink = "/Terms_of_Use/service.html";
            break;
        case "terms2": // 개인정보처리방침
            htmlLink = "/Terms_of_Use/privacy_policy.html";
            break;
        case "terms3": // 위치 기반 서비스 이용약관
            htmlLink = "/Terms_of_Use/location_based.html";
            break;
        default:
            console.error('JS Terms : ' + number);
            return htmlLink, terms;
    }
    window.open(htmlLink, "location pop", "location = no");

    return htmlLink, terms;
}