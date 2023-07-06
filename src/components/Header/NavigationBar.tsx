"use client";
import { useSession } from "next-auth/react";
import * as LINK from "@/lib/link";
import LinkNavigationBar from "./LinkNavigationBar";

const NavigationBar = () => {
  const { status } = useSession();

  return (
    <nav className='hidden md:flex md:w-auto items-center justify-between w-full'>
      <ul className='flex flex-row font-medium space-x-8 dark:bg-gray-900 dark:border-gray-700'>
        {/* TODO: Login 상태에 따라 Navbar 다르게 구현 */}
        {status !== "loading"
          ? LINK.constants.NAVIGATIONS[status].map((item) => (
              <LinkNavigationBar
                key={item.title}
                title={item.title}
                href={item.href}
              />
            ))
          : null}
      </ul>
    </nav>
  );
};

export default NavigationBar;
