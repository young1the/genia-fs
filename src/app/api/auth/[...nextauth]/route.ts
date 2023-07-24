import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// TODO : 정리하기
const authOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const res = await fetch(
          (process.env.API_SERVER as string) + "/api/user/login",
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
        console.log(res);
        if (!res.ok) return null;
        const user = await res.json();
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/user/login",
  },
  callbacks: {
    async jwt({ token, account, profile }: any) {
      account;
      profile;
      //   if (account) {
      // token.accessToken = account.access_token;
      // token.id = profile.id;
      //   }
      return token;
    },
    async session({ session, token, user }: any) {
      //   session.accessToken = token.accessToken;
      //   session.user.id = token.id;
      token;
      user;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
