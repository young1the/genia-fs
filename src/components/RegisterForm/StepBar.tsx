"use client";
import { selectStepbarProps } from "@/store/RegisterForm/atoms";
import { useRecoilValue } from "recoil";

const StepBar = () => {
  const { width, description } = useRecoilValue(selectStepbarProps);
  return (
    <div className='w-full h-1 bg-gray-200 my-8'>
      <div
        className={`flex justify-end h-1 bg-primary transition-all ease ${width}`}
      >
        <p className=' absolute text-xs md:text-sm text-primary -mt-5'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default StepBar;
