var slide = $(".slide > img");
var sno = 0;
var eno = slide.length - 1;
// var timer = setInterval("autoslide()",2000);

// window.addEventListener('load', autoslide)

function autoslide() {
    $(slide[sno]).animate({
        left: "-100%"
    },1000,function() {
        $(this).css({left:"0%"});
    });
}