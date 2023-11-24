"use client";
import React, {
  Dispatch,
  ForwardedRef,
  SetStateAction,
  forwardRef,
} from "react";

interface InputProps {
  placeholder: string;
  type: "email" | "password" | "text";
  state: [string, Dispatch<SetStateAction<string>>];
  className?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
    const {
      placeholder,
      type,
      className,
      state: [value, setValue],
    } = props;

    return (
      <input
        autoComplete='username'
        type={type}
        className={`cc-input ${className}`}
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
