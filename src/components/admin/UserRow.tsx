import { User } from "@/lib/api/user/type";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  on: () => void;
  setUserSelected: Dispatch<SetStateAction<User | undefined>>;
  userData: User;
}

const UserRow = ({ userData, setUserSelected, on }: Props) => {
  return (
    <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600'>
      <th className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'>
        <div className=''>
          <div className='text-base font-semibold'>{userData.nickName}</div>
          <div className='font-normal text-gray-500'>{userData.email}</div>
        </div>
      </th>
      <td className='px-6 py-4'>{userData.role}</td>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>
          {userData.notificationAgreement ? "동의" : "거절"}
        </div>
      </td>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>{`${
          userData.empNumber === "" ? "." : userData.empNumber
        }`}</div>
      </td>
      <td className='px-6 py-4'>
        <div
          onClick={() => {
            setUserSelected({ ...userData });
            on();
          }}
          className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
        >
          수정하기
        </div>
      </td>
    </tr>
  );
};

export default UserRow;
