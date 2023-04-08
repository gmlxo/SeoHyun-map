document.addEventListener('load', headerAndFooter());

function headerAndFooter() {
    $("header#header").load("/html/header.html");
    $("footer#footer").load("/html/footer.html");
}