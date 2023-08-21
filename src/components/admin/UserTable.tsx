"use client";
// import UserActionDropdown from "./UserActionDropdown";
// import GreenButton from "../common/button/GreenButton";
import { useState } from "react";
import UserRow from "./UserRow";
import { useModal } from "@/lib/modal";
import UserDetail from "./UserDetail";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/lib/api/user/type";
import { getAdminUsers } from "@/lib/api/admin/method";

const UserTable = () => {
  // const [actionSelected, setActionSelected] = useState("Action");
  const [userSelected, setUserSelected] = useState<User>();
  const { data } = useQuery<User[]>(["admin", "users"], {
    queryFn: getAdminUsers,
  });
  const { state, on, off, ModalBackDrop } = useModal();
  return (
    <div className='relative overflow-x-auto shadow-md sm:rounded-lg p-4'>
      <ModalBackDrop state={state} off={off}>
        <UserDetail userData={userSelected} off={off} />
      </ModalBackDrop>
      {/* <div className='w-full flex justify-between items-center mb-4'>
        <UserActionDropdown
          actionSelected={actionSelected}
          itemOnclick={setActionSelected}
        />
        <GreenButton title={"전체실행"} />
      </div> */}
      <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th className='px-6 py-3'>유저</th>
            <th className='px-6 py-3'>권한</th>
            <th className='px-6 py-3'>마케팅 수신</th>
            <th className='px-6 py-3'>사번</th>
            <th className='px-6 py-3'>회원관리</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((ele) => {
                return (
                  <UserRow
                    on={on}
                    setUserSelected={setUserSelected}
                    userData={ele}
                    key={ele.email}
                  />
                );
              })
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
