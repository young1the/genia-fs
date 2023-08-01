"use client";
import TitleText from "../common/text/TitleText";
import SettingPassword from "./SettingPassword";
import SettingProfile from "./SettingProfile";

const Setting = () => {
  return (
    <>
      <TitleText title={"내 정보 수정하기"} />
      <SettingProfile />
      <SettingPassword />
    </>
  );
};

export default Setting;
