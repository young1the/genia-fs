"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UnauthenticatedOnly = ({ children }: { children: React.ReactNode }) => {
  const { status } = useSession();
  const router = useRouter();
  if (status == "authenticated")
    return (
      <p
        onClick={() => {
          router.back();
        }}
      >
        돌아가기
      </p>
    );
  return children;
};

export default UnauthenticatedOnly;
