let test = document.getElementsByName('starpoint');
var star = 0.0;

test.forEach((e, index) => {
    e.addEventListener("click", (e) => {
        console.error("별점 : "+test[index].value);
        star = test[index].value;
    });
});