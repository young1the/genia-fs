"use client";
import UserActionDropdown from "./UserActionDropdown";
import GreenButton from "../common/button/GreenButton";
import { useState } from "react";
import UserRow from "./UserRow";
import { useModal } from "@/lib/modal";
import UserDetail from "./UserDetail";
import { UserData } from "@/types/common";

const UserTable = () => {
  const [actionSelected, setActionSelected] = useState("Action");
  const [userSelected, setUserSelected] = useState<UserData>();
  const { state, on, off, ModalBackDrop } = useModal();
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
      <ModalBackDrop state={state} off={off}>
        <UserDetail userData={userSelected} />
      </ModalBackDrop>
      <div className='w-full flex justify-between items-center mb-4'>
        <UserActionDropdown
          actionSelected={actionSelected}
          itemOnclick={setActionSelected}
        />
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
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
          <UserRow
            on={on}
            setUserSelected={setUserSelected}
            userData={{
              notificationAgreement: "",
              email: "test@email.com",
              confirmCode: "",
              password: "",
              nickName: "nick",
              empNumber: "250",
            }}
          />
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
