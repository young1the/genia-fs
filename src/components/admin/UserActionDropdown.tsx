"use client";
import useDropdown from "@/hooks/useDropdown";

interface Props {
  itemOnclick: React.Dispatch<React.SetStateAction<string>>;
}

const UserActionDropdown = ({ itemOnclick }: Props) => {
  const { showDropdown, buttonRef, toggleState } = useDropdown();

  return (
    <div>
      <button
        className='inline-flex items-center text-gray-500 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700'
        type='button'
        onClick={toggleState}
        ref={buttonRef}
      >
        Action
        <svg
          className='w-2.5 h-2.5 ml-2.5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            stroke-linecap='round'
            stroke-linejoin='round'
            stroke-width='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>
      {showDropdown ? (
        <div className='z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600'>
          <ul className='py-1 text-sm text-gray-700 dark:text-gray-200'>
            <li
              onClick={() => {
                itemOnclick("Reward");
              }}
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Reward
            </li>
            <li
              onClick={() => {
                itemOnclick("Promote");
              }}
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Promote
            </li>
            <li
              onClick={() => {
                itemOnclick("Activate");
              }}
              className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
            >
              Activate account
            </li>
          </ul>
          <div className='py-1'>
            <span
              onClick={() => {
                itemOnclick("Delete");
              }}
              className='block px-4 py-2 text-sm text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'
            >
              Delete User
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserActionDropdown;
