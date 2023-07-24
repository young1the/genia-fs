import { LinkKey, NavigationType, UserStatus } from "./types";

export const URLS: Record<LinkKey, string> = {
  HOME: "/",
  INFO: "/info",
  RESERVATION: "/reservation",
  LOGIN: "/user/login",
  LOGOUT: "/user/signout",
  MYPAGE: "/mypage",
  ADMIN: "/admin",
  REGISTER: "/user/register",
  FINDPWD: "/user/password",
} as const;

export const TITLES: Record<LinkKey, string> = {
  HOME: "홈으로",
  INFO: "과정 소개",
  RESERVATION: "예약하기",
  LOGIN: "로그인",
  LOGOUT: "로그아웃",
  MYPAGE: "마이페이지",
  ADMIN: "관리자페이지",
  REGISTER: "회원가입",
  FINDPWD: "비밀번호 찾기",
} as const;

export const LINKS: Record<LinkKey, NavigationType> = {
  HOME: { title: TITLES["HOME"], href: URLS["HOME"] },
  INFO: { title: TITLES["INFO"], href: URLS["INFO"] },
  RESERVATION: { title: TITLES["RESERVATION"], href: URLS["RESERVATION"] },
  LOGIN: { title: TITLES["LOGIN"], href: URLS["LOGIN"] },
  LOGOUT: { title: TITLES["LOGOUT"], href: URLS["LOGOUT"] },
  MYPAGE: { title: TITLES["MYPAGE"], href: URLS["MYPAGE"] },
  ADMIN: { title: TITLES["ADMIN"], href: URLS["ADMIN"] },
  REGISTER: { title: TITLES["REGISTER"], href: URLS["REGISTER"] },
  FINDPWD: { title: TITLES["FINDPWD"], href: URLS["FINDPWD"] },
} as const;

export const NAVIGATIONS: Record<UserStatus, NavigationType[]> = {
  authenticated: [LINKS["HOME"], LINKS["INFO"], LINKS["RESERVATION"]],
  unauthenticated: [LINKS["HOME"], LINKS["INFO"], LINKS["RESERVATION"]],
  loading: [],
};

export const USERMENUS: Record<UserStatus, NavigationType[]> = {
  authenticated: [LINKS["MYPAGE"], LINKS["LOGOUT"]],
  unauthenticated: [LINKS["LOGIN"]],
  loading: [],
};
