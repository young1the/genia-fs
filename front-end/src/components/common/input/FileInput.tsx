"use client";
import Image from "next/image";
import * as SVG from "@/components/common/svg";
import useDropdown from "@/hooks/useDropdown";
import { ChangeEvent } from "react";

interface Props {
  currentImage: any;
  setSelectedImage: any;
}
const FileInput = ({ setSelectedImage, currentImage }: Props) => {
  const { showDropdown, buttonRef, toggleState } = useDropdown(false);
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setSelectedImage(file || null);
  };

  return (
    <div className='flex items-center justify-center relative'>
      <div className='relative z-0 flex flex-col items-center justify-center rounded-full w-40 h-40 border-2 border-gray-300 border-dashed cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600'>
        {currentImage ? (
          <Image
            src={URL.createObjectURL(currentImage)}
            alt='Profile'
            className="absolute w-16 h-16 mb-3"
          />
        ) : (
          <SVG.User className='absolute w-16 h-16 mb-3 text-gray-300 dark:text-gray-100'></SVG.User>
        )}
      </div>
      <button
        ref={buttonRef}
        onClick={toggleState}
        className='absolute -right-5 bottom-0'
      >
        <SVG.Camera className='w-8 h-8' />
        {showDropdown ? (
          <div
            id='dropdownHover'
            className='absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700'
          >
            <ul
              className='py-2 text-sm text-gray-700 dark:text-gray-200'
              aria-labelledby='dropdownHoverButton'
            >
              <li className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'>
                <label>
                  새로운 프로필 업로드
                  <input
                    type='file'
                    className='hidden'
                    onChange={handleFileInputChange}
                  />
                </label>
              </li>
              <li
                onClick={() => {
                  setSelectedImage(null);
                }}
                className='block px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white'
              >
                <p>프로필 삭제하기</p>
              </li>
            </ul>
          </div>
        ) : null}
      </button>
    </div>
  );
};

export default FileInput;
