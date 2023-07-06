"use client";
import LinkDropdown from "./LinkDropdown";
import { NAVIGATIONS, USERMENUS } from "../../constants/navigation";
import { useSession } from "next-auth/react";

const dropdownContainerStyle =
  "flex flex-col font-medium p-2 border border-gray-100 rounded-lg dark:bg-gray-800 dark:border-gray-700";

const DropdownMobile = () => {
  const { status } = useSession();
  return (
    <nav
      className='absolute bg-white border-gray-200 dark:bg-gray-900
		top-16 left-0
		items-center justify-between
		divide-y
		w-full md:hidden'
    >
      <ul className={dropdownContainerStyle}>
        {status != "loading" &&
          NAVIGATIONS[status].map((item) => (
            <LinkDropdown
              key={item.title}
              title={item.title}
              href={item.href}
            />
          ))}
      </ul>
      <ul className={dropdownContainerStyle}>
        {status != "loading" &&
          USERMENUS[status].map((item) => (
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
