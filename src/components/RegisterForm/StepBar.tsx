import React from "react";

interface StepBarProps {
  width: string;
  description: string;
}

const StepBar = (props: StepBarProps) => {
  const { width, description } = props;

  return (
    <div className='w-full h-1 bg-gray-200 my-8'>
      <div
        className={`flex justify-end h-1 bg-green-600 transition-all ease ${width}`}
      >
        <p className='absolute text-xs md:text-sm text-green-600 -mt-5'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepBar;
