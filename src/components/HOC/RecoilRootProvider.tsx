"use client";
import { RecoilRoot } from "recoil";

interface Props {
  children: React.ReactNode;
}

const RecoilRootProvider = ({ children }: Props) => {
  return <RecoilRoot>{children}</RecoilRoot>;
};

export default RecoilRootProvider;
