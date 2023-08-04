"use client";
import { useSession } from "next-auth/react";
import Spinner from "@/components/common/loader/Spinner";
import Link from "next/link";
import * as LINK from "@/lib/link";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { useModal } from "@/lib/modal";

interface Props {
  keepOpen?: boolean;
}

const LoginModal = ({ keepOpen }: Props) => {
  const { status } = useSession();
  const { state, off, ModalBackDrop } = useModal({ modalState: true });
  if (status == "authenticated") return null;
  return (
    <ModalBackDrop off={keepOpen ? () => {} : off} state={state}>
      {status == "loading" ? (
        <Spinner />
      ) : (
        <div className='w-full flex flex-col items-center justify-center bg-white relative rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-12 space-y-10 md:space-y-12'>
          <KeywordHighlight
            keyword={"로그인"}
            after='이 필요한 페이지입니다.'
          ></KeywordHighlight>
          <Link
            className='text-white bg-primary hover:bg-green-700 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-green-700'
            href={LINK.constants.LINKS["LOGIN"].href}
          >
            {LINK.constants.LINKS["LOGIN"].title}
          </Link>
        </div>
      )}
    </ModalBackDrop>
  );
};

export default LoginModal;
