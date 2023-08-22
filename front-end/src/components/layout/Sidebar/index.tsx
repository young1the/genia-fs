import * as SVG from "@/components/common/svg";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className='absolute top-0 left-0 z-19 w-64 min-h-screen p-2 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700'>
      <div className='h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 mt-24'>
        <ul className='space-y-4 text-lg'>
          <li>
            <Link
              href='/admin/user'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <SVG.Users className='w-5 h-5' />
              <span className='flex-1 ml-3 whitespace-nowrap'>유저관리</span>
            </Link>
          </li>
          <li>
            <Link
              href='/admin/reservation'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <SVG.QRScan className='w-5 h-5' />
              <span className='flex-1 ml-3 whitespace-nowrap'>예약관리</span>
            </Link>
          </li>
          {/* <li>
            <Link
              href='/admin'
              className='flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group'
            >
              <SVG.Chart className='w-5 h-5' />
              <span className='flex-1 ml-3 whitespace-nowrap'>통계보기</span>
            </Link>
          </li> */}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
