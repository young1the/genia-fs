import Logo from "./Logo";
import ResponsiveUI from "./ResponsiveUI";

const Header = () => {
  return (
    <header className='fixed w-full h-18 top-0 z-20 bg-white border-b border-gray-100 dark:bg-gray-900'>
      <div className='relative flex flex-wrap items-center justify-between mx-auto p-4'>
        <Logo />
        <ResponsiveUI />
      </div>
    </header>
  );
};

export default Header;
