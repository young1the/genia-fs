import { KEYS, NavigationType } from "@/types/navigation";
import { UserStatus } from "../types/navigation";

export const URLS: Record<KEYS, string> = {
  HOME: "/",
  INFO: "/info/",
  RESERVATION: "/reservation/",
  LOGIN: "/user/login/",
  LOGOUT: "/user/signout",
  MYPAGE: "/mypage/",
  SUPER: "/super/",
  REGISTER: "/user/register/",
} as const;

export const TITLES: Record<KEYS, string> = {
  HOME: "홈으로",
  INFO: "과정 소개",
  RESERVATION: "예약하기",
  LOGIN: "로그인",
  LOGOUT: "로그아웃",
  MYPAGE: "마이페이지",
  SUPER: "관리자페이지",
  REGISTER: "회원가입",
} as const;

export const NAVIS: Record<KEYS, NavigationType> = {
  HOME: { title: TITLES["HOME"], href: URLS["HOME"] },
  INFO: { title: TITLES["INFO"], href: URLS["INFO"] },
  RESERVATION: { title: TITLES["RESERVATION"], href: URLS["RESERVATION"] },
  LOGIN: { title: TITLES["LOGIN"], href: URLS["LOGIN"] },
  LOGOUT: { title: TITLES["LOGOUT"], href: URLS["LOGOUT"] },
  MYPAGE: { title: TITLES["MYPAGE"], href: URLS["MYPAGE"] },
  SUPER: { title: TITLES["SUPER"], href: URLS["SUPER"] },
  REGISTER: { title: TITLES["REGISTER"], href: URLS["REGISTER"] },
} as const;

export const NAVIGATIONS: Record<UserStatus, NavigationType[]> = {
  authenticated: [NAVIS["HOME"], NAVIS["INFO"], NAVIS["RESERVATION"]],
  unauthenticated: [NAVIS["HOME"], NAVIS["INFO"], NAVIS["RESERVATION"]],
  loading: [],
};

export const USERMENUS: Record<UserStatus, NavigationType[]> = {
  authenticated: [NAVIS["MYPAGE"], NAVIS["LOGOUT"]],
  unauthenticated: [NAVIS["LOGIN"]],
  loading: [],
};
