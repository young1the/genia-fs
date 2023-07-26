type APImethod = "SIGNUP" | "LOGIN" | "EMAIL_SEND" | "EMAIL_CONFIRM";
export const URL: Record<APImethod, string> = {
  SIGNUP: `/api/user/signup`,
  LOGIN: `/api/user/login`,
  EMAIL_SEND: `/api/email/send`,
  EMAIL_CONFIRM: `/api/email/confirm/`,
} as const;
