import Link from "next/link";
import * as LINK from "@/lib/link";

const LinkNavigationBar = (props: LINK.types.NavigationType) => {
  const { title, href } = props;

  return (
    <Link
      href={href}
      className='block
      cc-text-black
      hover:text-green-700
      dark:hover:text-green-500 dark:hover:bg-gray-700
      dark:border-gray-700'
    >
      {title}
    </Link>
  );
};

export default LinkNavigationBar;
