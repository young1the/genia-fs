const BASIC_URL = process.env.API_ROOT_URL;
const AUTH_URL = process.env.NEXTAUTH_URL;

export const URL: Record<string, string> = {
  REGISTER: `${BASIC_URL}/api/user/signup`,
  LOGIN: `${AUTH_URL}/api/user/login`,
  CODE_SEND: `${BASIC_URL}/api/email/`,
  CODE_VERIFY: `${BASIC_URL}/api/email/verification/`,
} as const;
