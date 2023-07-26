export const URL: Record<string, string> = {
  REGISTER: `/api/user/signup`,
  LOGIN: `/api/user/login`,
  CODE_SEND: `/api/email/send`,
  CODE_VERIFY: `/api/email/confirm/`,
} as const;
