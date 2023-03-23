/* version 2_2 Start */
window.onload = map_version_2_2();


function closeOverlay() {
    overlay.setMap(null);
}

function map_version_2_2() {
    var mapContainer = document.getElementById('map'), // 지도의 중심좌표
        mapOption = {
            center: new kakao.maps.LatLng(37.373583, 127.140544), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 지도에 마커를 표시합니다 
    var marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(37.373583, 127.140544)
    });

    // 커스텀 오버레이에 표시할 컨텐츠 입니다
    // 커스텀 오버레이는 아래와 같이 사용자가 자유롭게 컨텐츠를 구성하고 이벤트를 제어할 수 있기 때문에
    // 별도의 이벤트 메소드를 제공하지 않습니다 
    var content = '<div class="map-wrap">' +
        '    <div class="map-info">' +
        '        <div class="title">' +
        '            양영디지털 고등학교' +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuQhWARKWeq8DMobQ2SSC0Cc-fTch86KK1waDfSKyMw&s" width="73" height="70">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">경기도 성남시 분당구 불정로386번길 35</div>' +
        '                <div><a href="https://yy-h.goesn.kr/" target="_blank" class="link">홈페이지</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    var content1 = '<div class="map-wrap">' +
        '    <div class="map-info">' +
        '        <div class="title">' +
        '            양영디지털 초등학교' +
        '            <div class="close" onclick="closeOverlay()" title="닫기"></div>' +
        '        </div>' +
        '        <div class="body">' +
        '            <div class="img">' +
        '                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngr9ReUirc2FZYbONLTVRsQunkuHhCdHiDVWhFk0LiQ&s" width="73" height="70">' +
        '           </div>' +
        '            <div class="desc">' +
        '                <div class="ellipsis">경기도 성남시 분당구 서현2동 불정로406번길 17</div>' +
        '                <div><a href="https://yy-e.goesn.kr/" target="_blank" class="link">홈페이지</a></div>' +
        '            </div>' +
        '        </div>' +
        '    </div>' +
        '</div>';

    // 마커 위에 커스텀오버레이를 표시합니다
    // 마커를 중심으로 커스텀 오버레이를 표시하기위해 CSS를 이용해 위치를 설정했습니다
    var overlay = new kakao.maps.CustomOverlay({
        content: content,
        map: map[0],
        position: marker.getPosition()
    });
    // var overlay = new kakao.maps.CustomOverlay({
    //     content: content1,
    //     map: map[1],
    //     position: marker.getPosition()
    // });
}
// 마커를 클릭했을 때 커스텀 오버레이를 표시합니다
kakao.maps.event.addListener(marker, 'click', function () {
    overlay.setMap(map);
});