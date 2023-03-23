/* version 1 Start */
window.onload = map_version_1();

/* version 1 */
function map_version_1() {// 지도 생성 위치와 마커 생성
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div  
        mapOption = {
            center: new kakao.maps.LatLng(37.373583, 127.140544), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    map.setMinLevel(1); // 지도 최저 크기 설정
    map.setMaxLevel(5); // 지도 최고 크기 설정

    // f_no 세션에 저장된 값이 음식점일 시
    if (sessionStorage.getItem('f_no') == '음식점') {
        // 마커를 표시할 위치와 title 객체 배열입니다
        var positions = [
            {
                title: '효자촌 미래타운 수제돈까스',
                latlng: new kakao.maps.LatLng(37.373058, 127.137566)
            },
            {
                title: '국시 엔 국수',
                latlng: new kakao.maps.LatLng(37.371743, 127.139374)
            },
            {
                title: '앙토낭 카렘',
                latlng: new kakao.maps.LatLng(37.373933, 127.136649)
            }
        ];
        // 아닌 다른 값일 시
    } else {
        positions = [{
            title: 'Test',
            latlng: new kakao.maps.LatLng(37.373246, 127.136649)
        }]
    }

    // 마커 이미지의 이미지 주소입니다
    var imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    // positions 값 출력
    console.log('positions : ' + positions)
    // null 값이 아닐 시
    if (positions != null) {
        for (var i = 0; i < positions.length; i++) {

            // 마커 이미지의 이미지 크기 입니다
            var imageSize = new kakao.maps.Size(24, 35);

            // 마커 이미지를 생성합니다    
            var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

            // 마커를 생성합니다
            var marker = new kakao.maps.Marker({
                map: map, // 마커를 표시할 지도
                position: positions[i].latlng, // 마커를 표시할 위치
                // content: content[i].title,
                title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image: markerImage // 마커 이미지 
            });
        }
    }
    // positions 값 리턴
    return positions;
}

// /* select 에서 고른 값을 세션에 넣어줌 */
// function setFacility() {
//     // select 에서 선택한걸 알려줌
//     var f_no = document.getElementById("facilities").options[document.getElementById("facilities").selectedIndex].value;
//     // f_no 값 출력
//     console.log("시설 : " + f_no);
//     // f_no 값을 key라는 이름에 세션에 넣어줌
//     sessionStorage.setItem('f_no', f_no);

//     map_version_1(); // mapD 실행
//     // location.replace('mainPage.html') // html로 가면 안됨 _현 임시방편
// }

// /* 학교 위치로 다시 이동 */
// function panTo() {
//     // 이동할 위도 경도 위치를 생성합니다 
//     var moveLatLon = new kakao.maps.LatLng(37.373583, 127.140544);

//     // 지도 중심으로 이동시킵니다
//     map.panTo(moveLatLon);
// }