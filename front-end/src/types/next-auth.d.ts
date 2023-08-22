// eslint-disable-next-line no-unused-vars
import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: {
      email: string;
      nickName: string;
      profileImage: string;
      accessToken: string;
      role: string;
    };
  }
}
