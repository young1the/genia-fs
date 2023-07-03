import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href='/'>
      <Image src='/vercel.svg' width={100} height={32} alt='Logo' />
    </Link>
  );
};

export default Logo;
