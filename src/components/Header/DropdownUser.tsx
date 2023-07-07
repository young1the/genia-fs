"use client";
import { useSession } from "next-auth/react";
import * as LINK from "@/lib/link";
import LinkDropdown from "./LinkDropdown";

const DropdownUser = () => {
  const { status } = useSession();
  return (
    <div className='hidden md:block absolute top-14 right-0 w-56 bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5'>
      <ul className='py-1'>
        {LINK.constants.USERMENUS[status].map((item) => (
          <LinkDropdown key={item.title} title={item.title} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownUser;
