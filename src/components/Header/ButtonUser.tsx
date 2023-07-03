import useDropdown from "@/hooks/useDropdown";
import Image from "next/image";
import DropdownUser from "./DropdownUser";
import Link from "next/link";
import { TITLES, URLS } from "@/constants/navigation";

const ButtonUser = () => {
  const { showDropdown, buttonRef, toggleState } = useDropdown();
  // TODO : Auth 상태에 따라 다르게 보이게
  const isLogin = false;
  return isLogin ? (
    <>
      {showDropdown ? <DropdownUser /> : null}
      <button
        onClick={toggleState}
        ref={buttonRef}
        className='w-8 h-8 hidden md:flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600'
      >
        <Image
          width={32}
          height={32}
          className='w-8 h-8 rounded-full'
          src='/next.svg'
          alt='User Profile'
        />
      </button>
    </>
  ) : (
    <Link
      className='hidden md:flex text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700'
      href={URLS["LOGIN"]}
    >
      {TITLES["LOGIN"]}
    </Link>
  );
};

export default ButtonUser;
