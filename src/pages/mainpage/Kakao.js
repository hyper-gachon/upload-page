import React, { useEffect, useState } from "react";

const { kakao } = window;


const Kakao = ({ latitude, longitude, saveLatitude, saveLongitude }) => {

  // info 윈도우
  // const [location, setLocation] = useState(
  //   "클릭한 위치의 위도는 " +
  //   String(latitude) +
  //   " 이고," +
  //   "경도는 " +
  //   String(longitude) +
  //   " 입니다"
  // );


  useEffect(() => {
    const container = document.getElementById("map");
    var latlng;

    const options = {
      center: new kakao.maps.LatLng(37.450416956915774, 127.12994454291355),
      level: 3,
    };
    // 마커를 표시할 위치입니다
    const position = new kakao.maps.LatLng(37.450416956915774, 127.12994454291355);
    const marker = new kakao.maps.Marker({
      position: position,
      clickable: true, // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
    });

    const map = new kakao.maps.Map(container, options);

    marker.setMap(map);

    // const iwContent = location, // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
    //   iwRemoveable = true;

    // const infowindow = new kakao.maps.InfoWindow({
    //   content: iwContent,
    //   removable: iwRemoveable,
    // });

    kakao.maps.event.addListener(map, "click", function (mouseEvent) {
      // 클릭한 위도, 경도 정보를 가져옵니다
      latlng = mouseEvent.latLng;

      saveLatitude(latlng.getLat())
      saveLongitude(latlng.getLng())
      // 마커 위치를 클릭한 위치로 옮깁니다
      marker.setPosition(latlng);

      // setLocation(
      //   "클릭한 위치의 위도는 " +
      //   String(latitude) +
      //   " 이고, " +
      //   "경도는 " +
      //   String(longitude) +
      //   " 입니다"
      // );
      // infowindow.open(map, marker);
    });

    // kakao.maps.event.addListener(marker, "click", function () {
    //   // 마커 위에 인포윈도우를 표시합니다
    //   infowindow.open(map, marker);
    // });
  }, []);

  return (
    <div class="w-full h-screen justify-center items-center md:w-1/2 bg-transparent">
      <div class="flex h-1/6"></div>
      <div class="w-full h-5/6 px-8 pt-8">
        <div id="map" class="self-center object-cover w-full h-5/6 md:block" />
      </div>
    </div>
  );
}

export default Kakao;
