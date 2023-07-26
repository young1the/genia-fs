"use client";
import * as SVG from "@/components/common/svg";
import Setting from "./Setting";
import { useState } from "react";
import ReservationHistory from "./ReservationHistory";

type ModeKeyType = "setting" | "history";

const MyPage = () => {
  const [currentMode, setCurrentMode] = useState<ModeKeyType>("setting");
  const mods: Record<ModeKeyType, JSX.Element> = {
    setting: <Setting />,
    history: <ReservationHistory />,
  };
  return (
    <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-10 md:space-y-12 sm:p-8'>
      <div className='w-full flex justify-evenly'>
        <div
          onClick={() => {
            setCurrentMode("history");
          }}
          className={`flex items-center ${
            currentMode === "history"
              ? "text-primary border-primary"
              : "text-gray-500 hover:text-primary"
          } font-bold space-x-2 cursor-pointer p-2 border-b`}
        >
          <SVG.QRScan className='w-8 h-8' />
          <span>예약내역</span>
        </div>
        <div
          onClick={() => {
            setCurrentMode("setting");
          }}
          className={`flex items-center ${
            currentMode === "setting"
              ? "text-primary border-primary"
              : "text-gray-500 hover:text-primary"
          } font-bold space-x-2 cursor-pointer p-2 border-b`}
        >
          <SVG.Setting className='w-8 h-8' />
          <span>회원정보</span>
        </div>
      </div>
      {mods[currentMode]}
    </div>
  );
};

export default MyPage;
