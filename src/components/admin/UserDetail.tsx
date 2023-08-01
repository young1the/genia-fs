import { UserData } from "@/types/common";
import React from "react";
import GreenButton from "../common/button/GreenButton";

interface Props {
  userData: UserData | undefined;
}

const UserDetail = ({ userData }: Props) => {
  userData;
  return (
    <section className='bg-white dark:bg-gray-900 rounded-md'>
      <div className='px-8 py-4 mx-auto max-w-2xl lg:py-16'>
        <h2 className='mb-4 text-xl font-bold text-gray-900 dark:text-white pb-4 border-b'>
          유저 정보 수정하기
        </h2>
        <div className='grid gap-4 grid-cols-2'>
          <div className='col-span-2'>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              이메일
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            />
          </div>
          <div className='w-full'>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              닉네임
            </label>
            <input
              type='text'
              name='brand'
              id='brand'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            />
          </div>
          <div className='w-full'>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              프로필사진
            </label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>
              <option value='유지'>유지</option>
              <option value='삭제'>삭제</option>
            </select>
          </div>
          <div>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              권한
            </label>
            <select className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'>
              <option value='관리자'>관리자</option>
              <option value='사원'>사원</option>
              <option value='일반유저'>일반유저</option>
            </select>
          </div>
          <div>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              사번
            </label>
            <input
              type='text'
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            />
          </div>
          <div className='col-span-2 justify-self-end'>
            <GreenButton title={"적용하기"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserDetail;
