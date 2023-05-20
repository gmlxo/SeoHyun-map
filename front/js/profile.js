function removeCheck(val) {
    if (confirm(val + "하시겠습니까??") == true) { //확인
        if (val == "수정") {
            console.error("ㄱㄷ!!");
        } else { console.error("이걸 " + val + "해?!"); }
    } else { return false; } // 취소
}

var reader = new FileReader();

//값이 변경될때 호출 되는 이벤트 리스너
$("#upload").on('change', function (e) {
    console.log(e.target.files); // 파일 출력
    var file = e.target.files[0]; //선택된 파일
    reader.readAsDataURL(file); //파일을 읽는 메서드 
});

reader.onload = function(){
    document.getElementById("profile_img").src = reader.result; // 받아온 사진로 변경
}