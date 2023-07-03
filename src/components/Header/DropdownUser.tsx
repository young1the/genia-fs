import React from "react";
import { USERMENUS } from "../../constants/navigation";
import LinkDropdown from "./LinkDropdown";

const DropdownUser = () => {
  return (
    <div className='hidden md:block absolute top-14 right-0 w-56 bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5'>
      <ul className='py-1'>
        {/**TODO : LOGIN을 User의 Login 상황에 맞게 변경 */}
        {USERMENUS["LOGIN"].map((item) => (
          <LinkDropdown key={item.title} title={item.title} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownUser;
