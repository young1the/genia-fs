"use client";
import React, {
  Dispatch,
  ForwardedRef,
  SetStateAction,
  forwardRef,
} from "react";

export const inputStyle =
  "bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500";

interface InputProps {
  placeholder: string;
  type: "email" | "password" | "text";
  state: [string, Dispatch<SetStateAction<string>>];
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      placeholder,
      type,
      state: [value, setValue],
    } = props;

    return (
      <input
        type={type}
        className={inputStyle}
        placeholder={placeholder}
        ref={ref}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }
);
Input.displayName = "Input";
export default Input;
