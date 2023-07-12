import React from "react";

interface GreenButtonProps {
  title: string;
  isActive?: boolean;
  type?: "submit" | "button" | "reset";
  onClickHandler?: any;
}

const GreenButton = (props: GreenButtonProps) => {
  const { title, type, isActive = true, onClickHandler } = props;
  const active = "bg-primary hover:bg-green-700";
  const inActive = "bg-gray-400 cursor-not-allowed";
  return (
    <button
      type={type ?? "button"}
      onClick={isActive ? onClickHandler : null}
      className={`flex-shrink-0 text-white
      focus:outline-none font-medium rounded-lg 
      text-sm px-5 py-2.5 text-center
      ${isActive ? active : inActive}`}
    >
      {title}
    </button>
  );
};

export default GreenButton;
