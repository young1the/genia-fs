import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import AuthSessionProvider from "../components/HOC/AuthSessionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AuthSessionProvider>
          <Header />
          {children}
          <div id='modal'></div>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
