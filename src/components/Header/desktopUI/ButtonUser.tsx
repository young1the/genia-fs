"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import useDropdown from "@/hooks/useDropdown";
import * as LINK from "@/lib/link";
import DropdownUser from "./DropdownUser";

const ButtonUser = () => {
  const { showDropdown, buttonRef, toggleState } = useDropdown();
  const { status } = useSession();
  const UserStatusButton: Record<typeof status, JSX.Element> = {
    authenticated: (
      <>
        {showDropdown ? <DropdownUser /> : null}
        <button
          onClick={toggleState}
          ref={buttonRef}
          className='w-10 h-10 hidden md:flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
        >
          <Image
            width={40}
            height={40}
            className='w-10 h-10 rounded-full'
            src='/next.svg'
            alt='User Profile'
          />
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
