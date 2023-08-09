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
      <td className='w-4 p-4'>
        <div className='flex items-center'>
          <input
            id='checkbox-table-search-1'
            type='checkbox'
            className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
          />
        </div>
      </td>
      <th className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'>
        <span className='w-10 h-10 bg-yellow-200 rounded-full' />
        <div className='pl-3'>
          <div className='text-base font-semibold'>{userData.nickName}</div>
          <div className='font-normal text-gray-500'>{userData.email}</div>
        </div>
      </th>
      <td className='px-6 py-4'>{userData.role}</td>
      <td className='px-6 py-4'>
        <div className='font-normal text-gray-500'>
          {userData.notificationAgreement}
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
