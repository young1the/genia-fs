const BASIC_URL = "http://localhost:3000";

export const URL: Record<string, string> = {
  REGISTER: `${BASIC_URL}/api/user/signup`,
  LOGIN: `${BASIC_URL}/api/user/login`,
  CODE_SEND: `${BASIC_URL}/api/email/`,
  CODE_VERIFY: `${BASIC_URL}/api/email/verification/`,
} as const;
