export const URL: Record<string, string> = {
  REGISTER: "http://localhost:3000/api/user/signup",
  LOGIN: "http://localhost:3000/api/user/login",
  CODE_SEND: "http://localhost:3000/api/email/",
  CODE_VERIFY: "http://localhost:3000/api/email/verification/",
} as const;
