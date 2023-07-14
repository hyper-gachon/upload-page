import React, { useState } from "react";
import Kakao from "./Kakao";
import instance from "../../shared/Request";
import axios from 'axios';


const MainPage = () => {

  function uploadAd(title, content, name, email, startDate, endDate, latitude, longitude) {
    instance.post("/advertise", {
      title: title,
      content: content,
      name: name,
      email: email,
      startDate: startDate,
      endDate: endDate,
      latitude: latitude,
      longitude: longitude,
    }).then((response) => {
      if (response.data.code == 200) {
        console.log(response.data.result);
      } else {
        console.log(response.data.message);
      }
    }).catch((error) => {
      console.log(error);
    });
    console.log("function : ", title, content, name, email, startDate, endDate);
  }
  const [titleValue, setTitle] = useState('');
  const [contentValue, setContent] = useState('');
  const [nameValue, setName] = useState('');
  const [emailValue, setEmail] = useState('');
  const [startPeriodValue, setStartPeriod] = useState('');
  const [endPeriodValue, setEndPeriod] = useState('');
  const [latitude, setLatitude] = useState(37.450416956915774);
  const [longitude, setLongitude] = useState(127.12994454291355);

  const saveTitle = event => {
    setTitle(event.target.value);
  };

  const saveContent = event => {
    setContent(event.target.value);
  };

  const saveName = event => {
    setName(event.target.value);
  };

  const saveEmail = event => {
    setEmail(event.target.value);
  };

  const saveStartPeriod = event => {
    setStartPeriod(event.target.value);
  };

  const saveEndPeriod = event => {
    setEndPeriod(event.target.value);
  };

  const saveLatitude = (number) => {
    setLatitude(number);
  };

  const saveLongitude = (number) => {
    setLongitude(number);
  };


  console.log(
    "제목" +
    titleValue +
    "\n내용" + contentValue +
    "\n작성자" + nameValue +
    "\n이메일" + emailValue +
    "\n시작일" + startPeriodValue +
    "\n종료일" + endPeriodValue +
    "\n클릭한 위치의 위도는 " +
    String(latitude) +
    " 이고, " +
    "\n경도는 " +
    String(longitude) +
    " 입니다"
  )

  return (
    <div class="flex flex-wrap w-full">
      <div class="flex flex-col w-full md:w-1/2">
        <div class="flex justify-center pt-12 md:justify-start md:pl-12 md:-mb-24">
          <a href="#" class="p-4 text-xl font-bold text-white bg-sky-400">
            Hyper_Gachon
          </a>
        </div>
        <div class="flex flex-col justify-center px-8 pt-8 my-auto md:justify-start md:pt-10 md:px-24 lg:px-32">
          <p class="text-3xl text-left">Upload your advertisement !</p>
          <form class="flex flex-col pt-3 md:pt-10">
            <div class="flex flex-col pt-4">
              <div class="flex">
                <p class="text-1xl text-center font-semibold">Title</p>
              </div>

              <input
                type="text"
                id="title"
                class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent"
                placeholder="Title"
                value={titleValue}
                onChange={saveTitle}
              />
            </div>

            <div class="flex flex-col pt-4">
              <div class="flex">
                <p class="text-1xl text-center font-semibold">Content</p>
              </div>

              <input
                type="text"
                id="content"
                class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent"
                placeholder="Content"
                value={contentValue}
                onChange={saveContent}
              />
            </div>

            <div class="flex flex-col pt-4">
              <div class="flex">
                <p class="text-1xl text-center font-semibold">Name</p>
              </div>

              <input
                type="text"
                id="name"
                class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent"
                placeholder="Name"
                value={nameValue}
                onChange={saveName}
              />
            </div>

            <div class="flex flex-col pt-4">
              <div class="flex">
                <p class="text-1xl text-center font-semibold">E-mail</p>
              </div>

              <input
                type="text"
                id="email"
                class="rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-sky-200 focus:border-transparent"
                placeholder="E-mail"
                value={emailValue}
                onChange={saveEmail}
              />
            </div>

            <div class="flex flex-col pt-4 ">
              <div class="flex">
                <p class="text-1xl text-center font-semibold">Period</p>
              </div>
              <div class="text-1xl text-center font-semibold">
                <label class="text-gray-700" for="date">
                  <input
                    type="date"
                    class="flex-1 w-5/12 float-left px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:sky-200 focus:border-transparent"
                    value={startPeriodValue}
                    onChange={saveStartPeriod}
                  />
                </label>
                ~
                <label class="text-gray-700" for="date">
                  <input
                    type="date"
                    class="flex-1 w-5/12 float-right px-4 py-2 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:sky-200 focus:border-transparent"
                    value={endPeriodValue}
                    onChange={saveEndPeriod}
                  />
                </label>
              </div>
            </div>
            <button
              type="button"
              class="w-full px-4 py-2 text-base font-semibold mt-10 text-center text-white transition duration-200 ease-in bg-sky-400 shadow-md hover:text-slate-400 hover:bg-sky-200 focus:outline-none focus:ring-2"
              onClick={() => uploadAd(titleValue, contentValue, nameValue, emailValue, startPeriodValue, endPeriodValue, latitude, longitude)}
            >
              <span class="w-full">Submit</span>
            </button>
          </form>
        </div>
      </div>
      <Kakao latitude={latitude} longitude={longitude} saveLatitude={saveLatitude} saveLongitude={saveLongitude} />
    </div>
  );

};

export default MainPage;
