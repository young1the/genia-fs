"use client";

import { useState } from "react";
const BOARD = 4;
const DESKTOP = 2;
const BEAM = 1;
const Test = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [roomName, setRoomName] = useState("");
  const [roomType, setRoomType] = useState("");
  const signUpTest = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_TEST_URL}/api/user.json`, {
      method: "POST",
      body: JSON.stringify({
        email: userEmail,
        password: "1234",
        nickName: userName,
        profileImage: "string",
        empNumber: "",
        notificationAgreement: "false",
      }),
    });
  };
  const makeRoomTest = async () => {
    await fetch(`${process.env.NEXT_PUBLIC_TEST_URL}/api/room.json`, {
      method: "POST",
      body: JSON.stringify({
        roomName: roomName,
        beamProject: (+roomType & BEAM) == BEAM,
        blackBoard: (+roomType & BOARD) == BOARD,
        computer: (+roomType & DESKTOP) == DESKTOP,
      }),
    });
  };
  return (
    <div>
      <div className='p-6 border'>
        <input
          className='border'
          type='text'
          placeholder='userName'
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          className='border'
          type='text'
          placeholder='email'
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <button className='bg-red-500' onClick={signUpTest}>
          SignUp
        </button>
      </div>
      <div className='p-6 border'>
        <input
          className='border'
          type='text'
          placeholder='roomname'
          value={roomName}
          onChange={(e) => {
            setRoomName(e.target.value);
          }}
        />
        <input
          className='border'
          type='number'
          placeholder='roomtype'
          value={roomType}
          onChange={(e) => {
            setRoomType(e.target.value);
          }}
        />
        <button className='bg-red-500' onClick={makeRoomTest}>
          MakeRoom
        </button>
      </div>
    </div>
  );
};

export default Test;
