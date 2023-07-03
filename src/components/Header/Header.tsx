import Logo from "./Logo";
import OnlyDesktop from "./OnlyDesktop";
import OnlyMobile from "./OnlyMobile";

const Header = () => {
  return (
    <header className='sticky top-0 z-10 bg-white border-gray-200 dark:bg-gray-900'>
      <div className='relative flex flex-wrap items-center justify-between mx-auto p-4'>
        <Logo />
        <OnlyDesktop />
        <OnlyMobile />
      </div>
    </header>
  );
};

export default Header;
