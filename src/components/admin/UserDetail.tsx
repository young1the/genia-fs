import React, { useState } from "react";
import GreenButton from "../common/button/GreenButton";
import { User, UserRole } from "@/lib/api/user/type";
import { permissionUser, putUser } from "@/lib/api/admin/method";
import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

interface Props {
  userData: User | undefined;
  off: () => void;
}

const UserDetail = ({ userData, off }: Props) => {
  const [nickName, setNickName] = useState(userData?.nickName ?? "");
  const [profileImage, setProfileImage] = useState("유지");
  const [role, setRole] = useState<UserRole>(userData?.role ?? "USER");
  const [empNumber, setEmpNumber] = useState(userData?.empNumber ?? "");
  const queryClient = useQueryClient();
  const onClickHandler = async () => {
    await toast.promise(
      new Promise(async (resolve, reject) => {
        try {
          if (
            (nickName != userData?.nickName ?? "") ||
            (empNumber != userData?.empNumber ?? "")
          )
            await putUser({
              nickName,
              email: userData?.email ?? "",
              empNumber,
            });
          if (role != userData?.role) {
            await permissionUser({ email: userData?.email ?? "", role });
          }
          queryClient.invalidateQueries(["admin", "users"]);
          resolve(true);
        } catch (e) {
          reject(e);
        }
      }),
      {
        loading: "기다려주세요...",
        success: "완료",
        error: "Error",
      }
    );
    off();
  };
  return (
    <section className='bg-white dark:bg-gray-900 rounded-md'>
      <form className='px-8 py-4 mx-auto max-w-2xl lg:py-16'>
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
              value={userData?.email}
              readOnly
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            />
          </div>
          <div className='w-full'>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              닉네임
            </label>
            <input
              type='text'
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            />
          </div>
          <div className='w-full'>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              프로필사진
            </label>
            <select
              value={profileImage}
              onChange={(e) => setProfileImage(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            >
              <option value='유지'>유지</option>
              <option value='삭제'>삭제</option>
            </select>
          </div>
          <div>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              권한
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as any)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            >
              <option value='MANAGER'>관리자</option>
              <option value='EMPLOYEE'>사원</option>
              <option value='USER'>일반유저</option>
            </select>
          </div>
          <div>
            <label className='block mb-2 text-sm font-bold text-gray-900 dark:text-white'>
              사번
            </label>
            <input
              type='text'
              value={empNumber}
              onChange={(e) => setEmpNumber(e.target.value)}
              className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
            />
          </div>
          <div className='col-span-2 justify-self-end'>
            <button
              onClick={() => {}}
              type='button'
              className='text-white bg-red-500 hover:bg-red-500 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
            >
              이 유저 삭제하기
            </button>
            <GreenButton title={"적용하기"} onClickHandler={onClickHandler} />
          </div>
        </div>
      </form>
    </section>
  );
};

export default UserDetail;
