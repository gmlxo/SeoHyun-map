var header = $(".proFile");
var menu = $(".profile-menu");

$(".proFile").hover(
    function () {
        // over
        $(menu).stop().slideDown("fast");
    }, function () {
        // out
        $(menu).stop().slideUp("fast");
    }
);