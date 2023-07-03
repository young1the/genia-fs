"use client";

import useDropdown from "@/hooks/useDropdown";
import DropdownMobile from "./DropdownMobile";

const ButtonHamburger = () => {
  const { showDropdown, buttonRef, toggleState } = useDropdown();
  return (
    <>
      {showDropdown ? <DropdownMobile /> : null}
      <button
        type='button'
        ref={buttonRef}
        onClick={toggleState}
        className='md:hidden inline-flex items-center
      text-sm text-gray-500
      rounded-lg
      hover:bg-gray-100 focus:outline-none
      focus:ring-2 focus:ring-gray-200
      dark:text-gray-400 dark:hover:bg-gray-700
      dark:focus:ring-gray-600'
      >
        <svg
          className='w-8 h-8'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </>
  );
};

export default ButtonHamburger;
