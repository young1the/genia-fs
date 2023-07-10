"use client";
import { useSession } from "next-auth/react";
import Spinner from "../commons/loader/Spinner";
import Link from "next/link";

const UnauthenticatedOnly = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  if (status == "loading") return <Spinner />;
  if (status == "authenticated")
    return (
      <Link
        className='text-white bg-green-600 hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700'
        href='/'
      >
        돌아가기
      </Link>
    );
  return children;
};

export default UnauthenticatedOnly;
