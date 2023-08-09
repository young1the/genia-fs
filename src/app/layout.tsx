import "./globals.css";
import { Inter } from "next/font/google";
import AuthSessionProvider from "@/components/hoc/AuthSessionProvider";
import RecoilProvider from "@/components/hoc/RecoilProvider";
import ReactQueryProvider from "@/components/hoc/ReactQueryProvider";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import GoogleAnalytics from "@/components/hoc/GoogleAnalytics";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "천재교육 디지털러닝팀 웹사이트",
  description:
    "해당 사이트는 디지털러닝팀에서 제공하는 K-Digital Training (KDT) 프로그램의 지원(프로그램 소개, 문의, 지원) 및 기술블로그 컨텐츠 제공, 코딩 교육 플랫폼,강의실 예약 서비스의 4가지 분류로 서비스를 제공하고자 한다.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <GoogleAnalytics />
      <body
        className={`${inter.className} bg-gray-200 dark:bg-gray-900 scrollbar-none md:scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-100`}
      >
        <Toaster />
        <AuthSessionProvider>
          <RecoilProvider>
            <ReactQueryProvider>
              <Header />
              <div className='bg-white dark:bg-gray-800 mt-[72px]'>
                {children}
              </div>
              <Footer />
              <div id='modal'></div>
            </ReactQueryProvider>
          </RecoilProvider>
        </AuthSessionProvider>
      </body>
    </html>
  );
}
