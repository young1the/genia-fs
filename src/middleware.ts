import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized(params) {
      return params?.token?.role === "ADMIN";
    },
  },
  pages: {
    signIn: "/",
  },
});

export const config = {
  matcher: ["/admin/:path*"],
};
