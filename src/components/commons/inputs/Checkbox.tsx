"use client";
import { Dispatch, SetStateAction } from "react";

interface CheckboxProps {
  label: string;
  children: any;
  state: [boolean, Dispatch<SetStateAction<boolean>>];
  textSize?: "text-sm" | "text-md" | "text-lg";
}

const Checkbox = (props: CheckboxProps) => {
  const { label, children, textSize, state } = props;
  const [isChecked, setIsChecked] = state;
  return (
    <div className='flex flex-col space-y-2'>
      <div className='flex items-center h-5 gap-2 '>
        <input
          type='checkbox'
          checked={isChecked}
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
          className='w-4 h-4 rounded-full text-green-600
          bg-gray-100 border-gray-300 focus:ring-green-500
          dark:focus:ring-green-600 dark:ring-offset-gray-800
          focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        <label
          className={`${
            textSize ?? "text-md"
          } font-bold text-gray-900 dark:text-gray-300`}
        >
          {label}
        </label>
      </div>
      {children}
    </div>
  );
};

export default Checkbox;
