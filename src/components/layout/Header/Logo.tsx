import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image
        src='/logo.png'
        className='h-10'
        width={170}
        height={40}
        alt='Logo'
      />
    </Link>
  );
};

export default Logo;
