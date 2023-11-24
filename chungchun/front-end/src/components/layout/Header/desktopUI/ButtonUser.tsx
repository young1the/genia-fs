"use client";

import Link from "next/link";
import useDropdown from "@/hooks/useDropdown";
import * as LINK from "@/lib/link";
import DropdownUser from "./DropdownUser";
import { UIProps } from "../ResponsiveUI";
import * as SVG from "@/components/common/svg";

const ButtonUser = ({ status }: UIProps) => {
  const { showDropdown, buttonRef, toggleState } = useDropdown();
  const UserStatusButton: Record<typeof status, JSX.Element> = {
    authenticated: (
      <>
        {showDropdown ? <DropdownUser /> : null}
        <button
          onClick={toggleState}
          ref={buttonRef}
          className='w-10 h-10 hidden md:flex md:justify-center md:items-center mr-3 text-sm bg-primary rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
        >
          <SVG.User className='w-7 h-7 text-white' />
        </button>
      </>
    ),
    admin: (
      <>
        {showDropdown ? <DropdownUser /> : null}
        <button
          onClick={toggleState}
          ref={buttonRef}
          className='w-10 h-10 hidden md:flex md:justify-center md:items-center mr-3 text-sm bg-primary rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
        >
          <SVG.User className='w-7 h-7 text-white' />
        </button>
      </>
    ),
    loading: <></>,
    unauthenticated: (
      <Link
        className='hidden md:flex text-white bg-primary hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-green-700'
        href={LINK.constants.URLS["LOGIN"]}
      >
        {LINK.constants.TITLES["LOGIN"]}
      </Link>
    ),
  };

  return UserStatusButton[status];
};

export default ButtonUser;
