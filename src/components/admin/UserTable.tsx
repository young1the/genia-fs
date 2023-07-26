"use client";
import UserActionDropdown from "./UserActionDropdown";
import GreenButton from "../common/button/GreenButton";
import { useState } from "react";
import UserRow from "./UserRow";

const UserTable = () => {
  const [actionSelected, setActionSelected] = useState("");
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
      <p>{actionSelected}</p>
      <div className='w-full flex justify-between items-center mb-4'>
        <UserActionDropdown itemOnclick={setActionSelected} />
        <GreenButton title={"전체실행"} />
      </div>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='p-4'>
              <div className='flex items-center'></div>
            </th>
            <th className='px-6 py-3'>이름</th>
            <th className='px-6 py-3'>권한</th>
            <th className='px-6 py-3'>마지막접속</th>
            <th className='px-6 py-3'>사번</th>
            <th className='px-6 py-3'>회원관리</th>
          </tr>
        </thead>
        <tbody>
          <UserRow userData={{ username: "조영일", email: "test@mail.com" }} />
          <UserRow userData={{ username: "우장희", email: "test@mail.com" }} />
          <UserRow userData={{ username: "안지현", email: "test@mail.com" }} />
          <UserRow userData={{ username: "최광민", email: "test@mail.com" }} />
          <UserRow userData={{ username: "조영일", email: "test@mail.com" }} />
          <UserRow userData={{ username: "우장희", email: "test@mail.com" }} />
          <UserRow userData={{ username: "안지현", email: "test@mail.com" }} />
          <UserRow userData={{ username: "최광민", email: "test@mail.com" }} />
          <UserRow userData={{ username: "조영일", email: "test@mail.com" }} />
          <UserRow userData={{ username: "우장희", email: "test@mail.com" }} />
          <UserRow userData={{ username: "안지현", email: "test@mail.com" }} />
          <UserRow userData={{ username: "최광민", email: "test@mail.com" }} />
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
