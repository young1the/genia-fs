"use client";
import { Suspense } from "react";
import TitleText from "../common/text/TitleText";
import SettingPassword from "./SettingPassword";
import SettingProfile from "./SettingProfile";
import { ReservationDescriptionSkeleton } from "../reservation/ReservationButtonSkeleton";

const Setting = () => {
  return (
    <>
      <TitleText title={"내 정보 수정하기"} />
      <Suspense fallback={<ReservationDescriptionSkeleton />}>
        <SettingProfile />
      </Suspense>
      <SettingPassword />
    </>
  );
};

export default Setting;
