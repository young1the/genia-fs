"use client";
import { USERMENUS } from "../../constants/navigation";
import LinkDropdown from "./LinkDropdown";
import { useSession } from "next-auth/react";

const DropdownUser = () => {
  const { status } = useSession();
  return (
    <div className='hidden md:block absolute top-14 right-0 w-56 bg-white rounded-md shadow-lg dark:bg-gray-800 ring-1 ring-black ring-opacity-5'>
      <ul className='py-1'>
        {USERMENUS[status].map((item) => (
          <LinkDropdown key={item.title} title={item.title} href={item.href} />
        ))}
      </ul>
    </div>
  );
};

export default DropdownUser;
