import Logo from "../Header/Logo";

const Footer = () => {
  return (
    <footer className='bg-gray-200 dark:bg-gray-900'>
      <div
        className='flex items-center
        flex-col w-full
        max-w-screen-xl
        mx-auto
        justify-center
        p-6
        md:py-8 space-y-4'
      >
        <div className='lg:w-full lg:flex lg:items-center lg:justify-evenly'>
          <div className='mb-4 lg:mb-0'>
            <Logo />
          </div>
          <ul
            className='grid justify-center items-start
          text-sm md:text-md font-medium text-gray-500 dark:text-gray-400'
          >
            <li>
              주소 : 서울특별시 디지털로9길 23 마리오아울렛2관 11층
              천재IT교육센터
            </li>
            <li>대표자 : 강희철</li>
            <li>사업자등록번호 : 119-81-19350</li>
            <li>E-Mali: genia@chunjae.co.kr</li>
            <li>접수 문의 및 사이트 이용 문의 : 02-3282-8589</li>
          </ul>
        </div>
        <span className='block text-sm text-gray-500 text-center dark:text-gray-400'>
          COPYRIGHT ⓒ 2023 BY{" "}
          <a href='https://www.chunjae.co.kr/' className='underline'>
            CHUNJAE CO.,LTD.
          </a>{" "}
          ALL RIGHTS RESERVED.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
