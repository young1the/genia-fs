import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import * as API from "@/lib/api";
const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          (process.env.NEXTAUTH_URL as string) + API.constants.URL["LOGIN"],
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: credentials?.email,
              password: credentials?.password,
            }),
          }
        );
        const user = await res.json();
        if (res.ok && user) {
          return {
            ...user,
            ["email"]: credentials?.email,
            ["access_token"]: res.headers.get("Authorization"),
          };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
    error: "/error",
  },
  callbacks: {
    async jwt(params: any) {
      const { token, user } = params;
      if (user) {
        token.email = user.email;
        token.access_token = user.access_token;
        token.userName = user.userName;
        token.profileImage = user.profileImage;
      }
      return token;
    },
    async session(params: any) {
      const { session, token } = params;
      session.user.email = token.email;
      session.user.userName = token.username;
      session.user.profileImage = token.profileImage;
      session.user.access_token = token.access_token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
