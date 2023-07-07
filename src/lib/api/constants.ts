const BASIC_URL = "http://10.41.0.102:8080";
const AUTH_URL = process.env.NEXTAUTH_URL;

export const URL: Record<string, string> = {
  REGISTER: `${BASIC_URL}/api/user/signup`,
  LOGIN: `${AUTH_URL}/api/user/login`,
  CODE_SEND: `${BASIC_URL}/api/email/`,
  CODE_VERIFY: `${BASIC_URL}/api/email/verification/`,
} as const;
