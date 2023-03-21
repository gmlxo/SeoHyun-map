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
    window.open("/Terms_of_Use/location_based.html", "location pop", "width = 1000px, left = 1000, location = no");
}