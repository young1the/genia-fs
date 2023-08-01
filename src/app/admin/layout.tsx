import Sidebar from "@/components/layout/Sidebar";
export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <div className='h-full'>
      <Sidebar />
      <div className='ml-64'>{children}</div>
    </div>
  );
}
