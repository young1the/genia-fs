"use client";
import * as LINK from "@/lib/link";
import LinkNavigationBar from "./LinkNavigationBar";
import { UIProps } from "../ResponsiveUI";

const NavigationBar = ({ status }: UIProps) => {
  return (
    <nav className='hidden md:flex md:w-auto items-center justify-between w-full'>
      <ul className='flex flex-row font-medium space-x-8 dark:bg-gray-900 dark:border-gray-700'>
        {LINK.constants.NAVIGATIONS[status].map((item) => (
          <LinkNavigationBar
            key={item.title}
            title={item.title}
            href={item.href}
          />
        ))}
      </ul>
    </nav>
  );
};

export default NavigationBar;
