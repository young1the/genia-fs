import Sidebar from "@/components/layout/Sidebar";
export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className='min-h-screen'>
      <Sidebar />
      <div className='ml-64 p-8'>{children}</div>
    </div>
  );
}
