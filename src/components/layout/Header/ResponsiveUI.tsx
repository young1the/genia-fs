"use client";

import { useSession } from "next-auth/react";
import { UserStatus } from "@/lib/link/types";
import OnlyDesktop from "./desktopUI/OnlyDesktop";
import OnlyMobile from "./mobileUI/OnlyMobile";

export interface UIProps {
  status: UserStatus;
}

const ResponsiveUI = () => {
  const { status } = useSession();
  return (
    <>
      <OnlyDesktop status={status} />
      <OnlyMobile status={status} />
    </>
  );
};

export default ResponsiveUI;
