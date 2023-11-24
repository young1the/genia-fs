"use client";

import LinkDropdown from "./LinkDropdown";
import * as LINK from "@/lib/link";
import { UIProps } from "../ResponsiveUI";

const dropdownContainerStyle =
  "flex flex-col font-medium p-2 border-gray-100 dark:bg-gray-800 dark:border-gray-700";

const DropdownMobile = ({ status }: UIProps) => {
  return (
    <nav
      className='absolute bg-white border border-gray-100 dark:bg-gray-900
		top-16 left-0
		items-center justify-between
		divide-y
		w-full md:hidden'
    >
      <ul className={dropdownContainerStyle}>
        {status != "loading" &&
          LINK.constants.NAVIGATIONS[status].map((item) => (
            <LinkDropdown
              key={item.title}
              title={item.title}
              href={item.href}
            />
          ))}
      </ul>
      <ul className={dropdownContainerStyle}>
        {status != "loading" &&
          LINK.constants.USERMENUS[status].map((item) => (
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
