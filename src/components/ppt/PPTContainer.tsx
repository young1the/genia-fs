"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import KeywordHighlight from "../common/text/KeywordHighlight";
import GreenButton from "../common/button/GreenButton";
import { useRouter } from "next/navigation";

const TeamCompositionAndRoles = () => {
  return (
    <div className='w-full m-20 p-8 rounded-lg shadow-md'>
      <div className='grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/86599495?v=4'
            width={24 * 4}
            height={24 * 4}
            alt='조영일'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>조영일</h3>
            <p>프론트엔드, 팀장</p>
          </div>
        </div>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/106909332?s=96&v=4'
            width={24 * 4}
            height={24 * 4}
            alt='김규민'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>김규민</h3>
            <p>백엔드</p>
          </div>
        </div>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/72060838?s=96&v=4'
            width={24 * 4}
            height={24 * 4}
            alt='설예진'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>설예진</h3>
            <p>PM</p>
          </div>
        </div>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/136677360?s=96&v=4'
            width={24 * 4}
            height={24 * 4}
            alt='안지현'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>안지현</h3>
            <p>프론트엔드</p>
          </div>
        </div>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/136553440?s=96&v=4'
            width={24 * 4}
            height={24 * 4}
            alt='우장희'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>우장희</h3>
            <p>프론트엔드</p>
          </div>
        </div>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/136779345?s=96&v=4'
            width={24 * 4}
            height={24 * 4}
            alt='이명철'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>이명철</h3>
            <p>백엔드</p>
          </div>
        </div>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/132827203?s=96&v=4'
            width={24 * 4}
            height={24 * 4}
            alt='임성현'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>임성현</h3>
            <p>백엔드</p>
          </div>
        </div>
        <div className='grid grid-cols-[auto,1fr] space-x-12 items-center'>
          <Image
            src='https://avatars.githubusercontent.com/u/136671151?s=96&v=4'
            width={24 * 4}
            height={24 * 4}
            alt='최세진'
            className='w-24 h-24 rounded-full border'
          />
          <div>
            <h3 className='text-xl font-medium'>최세진</h3>
            <p>백엔드</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectGoals = () => {
  return (
    <div className='w-full m-20 p-8 rounded-lg shadow-md'>
      <h2 className='text-3xl font-semibold mb-6'>프로젝트 목표</h2>
      <ul className='list-disc list-inside pl-8 text-xl'>
        <li className='list-none mb-2'>
          {`로그인 (인증 및 사용자 관리 기능)`}
          <ul className='list-disc list-inside pl-8'>
            <li>단계별 회원가입</li>
          </ul>
        </li>
        <li className='list-none mb-2'>
          강의실 예약 서비스
          <ul className='list-disc list-inside pl-8'>
            <li>티켓 형태의 디자인과 QR코드 지원</li>
            <li>
              사용자가 주제를 스스로 정하고 예약하는 방식을 통해 강의실 예약을
              더 의미 있게
            </li>
          </ul>
        </li>
        <li className='list-none mb-2'>
          관리자 페이지
          <ul className='list-disc list-inside pl-8'>
            <li>구글 애널리틱스</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

const Before = () => {
  return (
    <Image
      priority={false}
      src={"/teamlogo.png"}
      alt={"team logo"}
      width={500}
      height={500}
    />
  );
};

const ProjectDuration = () => {
  return (
    <div className='w-full m-20 p-8 rounded-lg shadow-md'>
      <div className='w-full h-1 bg-gradient-to-r from-white  to-primary mb-12' />
      <div className='w-full flex'>
        <div className='w-1/3'>
          <h2 className='text-3xl font-semibold mb-6'>프로젝트 진행</h2>
        </div>
        <div className='w-2/3 flex items-center'>
          <div className='flex space-x-8'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-2'>~6월 20일</h3>
              <p>착수보고서</p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-2'>~8월 10일</h3>
              <p>프로젝트 마감 및 테스트 시작</p>
            </div>
            <div className='text-center'>
              <h3 className='text-xl font-semibold mb-2'>~8월 17일</h3>
              <p>프로젝트 최종발표</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UsedTechnologies = () => {
  return (
    <div className='w-full m-20 p-8 flex flex-col justify-center items-center'>
      <Image
        priority={false}
        src={"/techStack.png"}
        alt={"기술스택"}
        width={1220}
        height={602}
      />
    </div>
  );
};

const ImplementationProcess = () => {
  return (
    <div className='w-full m-20 p-8 flex flex-col justify-center items-center'>
      <Image
        priority={false}
        src={"/process.png"}
        alt={"process"}
        width={764}
        height={330}
      />
    </div>
  );
};

const Showcase = () => {
  const router = useRouter();
  return (
    <div className='w-full m-20 p-8 space-y-16 rounded-lg shadow-md flex flex-col justify-center items-center'>
      <KeywordHighlight
        before='이제 저희'
        keyword='28청춘 프로젝트'
        after='를'
        rest='확인 해보겠습니다.'
      />
      <GreenButton
        title='로그인 페이지로'
        onClickHandler={() => router.push("/user/login")}
      />
    </div>
  );
};

const PPTContainer = () => {
  const [index, setIndex] = useState(-1);
  useEffect(() => {
    const handleKeyDown = (event: any) => {
      if (event.key === "ArrowLeft") {
        setIndex((prevCount) => prevCount - 1);
      } else if (event.key === "ArrowRight") {
        setIndex((prevCount) => prevCount + 1);
      } else if (event.key === "r") {
        setIndex(-1);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  const chapters = [
    "팀 구성 및 역할",
    "프로젝트 목표",
    "프로젝트 기간",
    "사용한 기술",
    "구현 과정",
    "시연",
  ];
  const components = [
    <TeamCompositionAndRoles key='1' />,
    <ProjectGoals key='2' />,
    <ProjectDuration key='3' />,
    <UsedTechnologies key='4' />,
    <ImplementationProcess key='5' />,
    <Showcase key='6' />,
  ];
  return (
    <div className='w-full min-h-[calc(100vh-72px)] flex justify-center items-center relative'>
      <div className='w-full absolute top-10 grid grid-cols-3 items-center px-10 z-10'>
        <p className='text-gray-500 text-center text-md'>
          {chapters[index - 1] ?? ""}
        </p>
        <p className='text-gray-700 text-center underline text-lg font-bold'>
          {chapters[index]}
        </p>
        <p className='text-gray-500 text-center text-md'>
          {chapters[index + 1] ?? ""}
        </p>
      </div>
      {index < 0 && <Before />}
      {components[index]}
    </div>
  );
};

export default PPTContainer;
