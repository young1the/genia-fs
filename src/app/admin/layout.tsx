import Link from "next/link";
import * as SVG from "@/components/commons/svgs";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <aside className='fixed top-0 left-0 z-19 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700'>
        <div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800'>
          <ul className='space-y-2 font-medium'>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <SVG.Beam className='w-5 h-5' />
                <span className='flex-1 ml-3 whitespace-nowrap'>유저관리</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <SVG.QRScan className='w-5 h-5' />
                <span className='flex-1 ml-3 whitespace-nowrap'>예약관리</span>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
              >
                <SVG.Chat className='w-5 h-5' />
                <span className='flex-1 ml-3 whitespace-nowrap'>통계보기</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
      <div className='ml-64'>{children}</div>
    </>
  );
}
