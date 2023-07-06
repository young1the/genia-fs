export type KEYS =
  | "HOME"
  | "INFO"
  | "RESERVATION"
  | "LOGIN"
  | "LOGOUT"
  | "MYPAGE"
  | "SUPER"
  | "REGISTER";
export type UserStatus = "authenticated" | "loading" | "unauthenticated";
export type NavigationType = { title: string; href: string };
