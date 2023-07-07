"use client";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

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
