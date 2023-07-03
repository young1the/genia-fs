import React from "react";
import LinkDropdown from "./LinkDropdown";
import { NAVIGATIONS, USERMENUS } from "../../constants/navigation";

const dropdownContainerStyle =
  "flex flex-col font-medium p-2 border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700";

const DropdownMobile = () => {
  return (
    <nav
      className='absolute bg-white border-gray-200 dark:bg-gray-900
		top-16 left-0
		items-center justify-between
		divide-y
		w-full md:hidden'
    >
      <ul className={dropdownContainerStyle}>
        {/* TODO: Login 상태에 따라 Navbar 다르게 구현 */}
        {NAVIGATIONS["LOGOUT"].map((item) => (
          <LinkDropdown key={item.title} title={item.title} href={item.href} />
        ))}
      </ul>
      <ul className={dropdownContainerStyle}>
        {/**TODO : LOGIN을 User의 Login 상황에 맞게 변경 */}
        {USERMENUS["LOGOUT"].map((item) => (
          <LinkDropdown
            key={"DD" + item.title}
            title={item.title}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
  );
};

export default DropdownMobile;
