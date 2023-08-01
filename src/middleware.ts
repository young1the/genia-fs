import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized() {
      // params
      return true;
      // return params?.token?.useRole === "admin";
    },
  },
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
