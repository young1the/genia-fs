"use client";

import { useSession } from "next-auth/react";
import { LinkUserStatus } from "@/lib/link/types";
import OnlyDesktop from "./desktopUI/OnlyDesktop";
import OnlyMobile from "./mobileUI/OnlyMobile";

export interface UIProps {
  status: LinkUserStatus;
}

const ResponsiveUI = () => {
  const { status: authStatus, data } = useSession();
  const status =
    data?.user.role === "MANAGER" || data?.user.role === "ADMIN"
      ? "admin"
      : authStatus;
  return (
    <>
      <OnlyDesktop status={status} />
      <OnlyMobile status={status} />
    </>
  );
};

export default ResponsiveUI;
