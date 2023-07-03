import { NavigationType } from "@/types/navigation";
import Link from "next/link";

const LinkDropdown = (props: NavigationType) => {
  const { title, href } = props;

  return (
    <Link
      href={href}
      className='block px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-100 dark:hover:text-white dark:hover:bg-gray-600'
    >
      {title}
    </Link>
  );
};

export default LinkDropdown;
