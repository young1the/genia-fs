"use client";

import useToggle from "@/hooks/useToggle";
import { Dispatch, SetStateAction } from "react";

const Eyesvg = {
  open: (
    <svg
      className='w-5 h-5 text-gray-500 dark:text-gray-400'
      fill='none'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9 13 6 13 9z'
      />
      <circle
        cx='16'
        cy='16'
        r='5'
        stroke='currentColor'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  ),
  close: (
    <svg
      className='w-5 h-5 text-gray-500 dark:text-gray-400'
      fill='none'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill='currentColor'
        d='M22 16a1 1 0 10-2 0h2zm-6 4a1 1 0 100 2v-2zm-6-4a1 1 0 102 0h-2zm6-4a1 1 0 100-2v2zm-2.776 11.68a1 1 0 00-.448 1.95l.448-1.95zm-7.9-2.007a1 1 0 001.351-1.475l-1.35 1.475zM19.242 8.436a1 1 0 00.518-1.932l-.518 1.932zm7.358 1.822a1 1 0 10-1.34 1.484l1.34-1.484zM28 16c0 .464-.243 1.203-.853 2.116-.593.888-1.471 1.845-2.578 2.727C22.351 22.611 19.314 24 16 24v2c3.866 0 7.329-1.611 9.816-3.593 1.246-.993 2.271-2.099 2.994-3.18C29.515 18.172 30 17.037 30 16h-2zM4 16c0-.464.243-1.203.853-2.116.593-.888 1.471-1.845 2.578-2.727C9.649 9.389 12.686 8 16 8V6c-3.866 0-7.329 1.611-9.816 3.593-1.246.993-2.271 2.098-2.994 3.18C2.485 13.828 2 14.963 2 16h2zm16 0a4 4 0 01-4 4v2a6 6 0 006-6h-2zm-8 0a4 4 0 014-4v-2a6 6 0 00-6 6h2zm4 8c-.952 0-1.881-.114-2.776-.32l-.448 1.95c1.031.236 2.111.37 3.224.37v-2zm0-16c1.118 0 2.205.158 3.24.436l.52-1.932A14.489 14.489 0 0016 6v2zm9.258 3.742c.899.812 1.6 1.655 2.071 2.427.482.79.671 1.423.671 1.831h2c0-.928-.389-1.93-.963-2.872-.586-.962-1.42-1.95-2.438-2.87l-1.34 1.484zM6.675 20.198c-.878-.804-1.563-1.636-2.021-2.395C4.184 17.024 4 16.403 4 16H2c0 .917.38 1.906.941 2.836.573.95 1.389 1.926 2.384 2.837l1.35-1.475z'
      />
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M7 25L25 7'
      />
    </svg>
  ),
};

export interface PasswordInputProps {
  state: [string, Dispatch<SetStateAction<string>>];
}

const PasswordInput = (props: PasswordInputProps) => {
  const {
    state: [value, setValue],
  } = props;
  const { state: show, toggleState } = useToggle(false);
  return (
    <div>
      <div className='relative'>
        <div
          onClick={toggleState}
          className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
        >
          {Eyesvg[`${show ? "close" : "open"}`]}
        </div>
        <input
          type={`${show ? "text" : "password"}`}
          className='cc-input'
          value={value}
          autoComplete='current-password'
          onChange={(e) => setValue(e.target.value)}
          placeholder='비밀번호를 입력하세요'
        />
      </div>
    </div>
  );
};

export default PasswordInput;
