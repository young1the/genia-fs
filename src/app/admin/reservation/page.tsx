import GreenButton from "@/components/common/button/GreenButton";
import React from "react";

const page = () => {
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
      <div className='w-full flex justify-between'>
        <div>
          <button
            id='dropdownActionButton'
            data-dropdown-toggle='dropdownAction'
            className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
            type='button'
          >
            <span className='sr-only'>Action button</span>
            Action
            <svg
              className='w-2.5 h-2.5 ml-2.5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 10 6'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='m1 1 4 4 4-4'
              />
            </svg>
          </button>
          <div className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
            <ul className='py-1 text-sm text-gray-700 dark:text-gray-200'>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Reward
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Promote
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
                >
                  Activate account
                </a>
              </li>
            </ul>
            <div className='py-1'>
              <a
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
              >
                Delete User
              </a>
            </div>
          </div>
        </div>
        <GreenButton title={"전체실행"} />
      </div>
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='p-4'>
              <div className='flex items-center'>
                <input
                  id='checkbox-all-search'
                  type='checkbox'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
                />
              </div>
            </th>
            <th scope='col' className='px-6 py-3'>
              이름
            </th>
            <th scope='col' className='px-6 py-3'>
              권한
            </th>
            <th scope='col' className='px-6 py-3'>
              마지막접속
            </th>
            <th scope='col' className='px-6 py-3'>
              회원관리
            </th>
          </tr>
        </thead>
        <tbody>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
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
            <th
              scope='row'
              className='flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white'
            >
              <span className='w-10 h-10 bg-yellow-200 rounded-full' />
              <div className='pl-3'>
                <div className='text-base font-semibold'>조영일</div>
                <div className='font-normal text-gray-500'>test@email.com</div>
              </div>
            </th>
            <td className='px-6 py-4'>일반유저</td>
            <td className='px-6 py-4'>
              <div className='font-normal text-gray-500'>2023년 7월 25일</div>
            </td>
            <td className='px-6 py-4'>
              <a
                href='#'
                className='font-medium text-blue-600 dark:text-blue-500 hover:underline'
              >
                <select defaultValue={"관리자권한"}>
                  <option value={"관리자권한"}></option>
                </select>
              </a>
            </td>
          </tr>
        </tbody>
      </table>
      <nav
        className='flex items-center justify-between pt-4'
        aria-label='Table navigation'
      >
        <span className='text-sm font-normal text-gray-500 dark:text-gray-400'>
          Showing{" "}
          <span className='font-semibold text-gray-900 dark:text-white'>
            1-10
          </span>{" "}
          of{" "}
          <span className='font-semibold text-gray-900 dark:text-white'>
            1000
          </span>
        </span>
        <ul className='inline-flex -space-x-px text-sm h-8'>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Previous
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              1
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              2
            </a>
          </li>
          <li>
            <a
              href='#'
              aria-current='page'
              className='flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
            >
              3
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              4
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              5
            </a>
          </li>
          <li>
            <a
              href='#'
              className='flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default page;
