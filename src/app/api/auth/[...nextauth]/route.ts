import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import GoogleProvider from "next-auth/providers/google";
import * as API from "@/lib/api";

const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text", placeholder: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          (process.env.NEXT_PUBLIC_API_SERVER as string) +
            API.constants.URL["LOGIN"],
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
            ["accessToken"]: res.headers?.get("Authorization"),
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
        token.accessToken = user.accessToken;
        token.nickName = user.nickName;
        token.profileImage = user.profileImage;
        token.role = user.role;
      }
      return token;
    },
    async session(params: any) {
      const { session, token } = params;
      session.user.email = token.email;
      session.user.nickName = token.nickName;
      session.user.profileImage = token.profileImage;
      session.user.accessToken = token.accessToken;
      session.user.role = token.role;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
