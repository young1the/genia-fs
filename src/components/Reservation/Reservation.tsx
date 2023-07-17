import QRCode from "react-qr-code";

interface Props {
  reservationId: string;
  roomNumber: string;
  topic: string;
  name: string;
  startDate: string; // "YYYY-MM-DDTHH:MM:SS"
  endDate: string;
  // particName : {
  //           “name” : “이명철”,
  //           “name” : “임성현”, }
  // "particProfile" : {
  //             “profileImage” : “example.png”
  //             “profileImage” : “exam.jpg” }
  reservationState: number; // 0: 예약종료, 1: 예약 중, 2: 예약취소
}

const mock: Props = {
  reservationId: "F2P8F1P7",
  roomNumber: "강의실 9",
  topic: "실무에 바로 적용하는 효율적인 업무관리 전략",
  name: "박건예 팀장님",
  startDate: "2023-07-19T09:00:00", // "YYYY-MM-DDTHH:MM:SS"
  endDate: "2023-07-19T16:00:00",
  // particName : {
  //           “name” : “이명철”,
  //           “name” : “임성현”, }
  // "particProfile" : {
  //             “profileImage” : “example.png”
  //             “profileImage” : “exam.jpg” }
  reservationState: 1, // 0: 예약종료, 1: 예약 중, 2: 예약취소
};

const week = ["일", "월", "화", "수", "목", "금", "토"];

const Reservation = () => {
  const { reservationId, roomNumber, topic, name, startDate, endDate } = mock;
  const start = new Date(startDate);
  const end = new Date(endDate);
  const getPadHour = (hour: number) => {
    if (hour < 10) {
      return "0" + hour;
    }
    return hour + "";
  };
  const getRemainingTime = () => {
    const now = new Date();
    const diff = start.getTime() - now.getTime();
    if (diff <= 0) {
      return "예약종료";
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let result = "";
    if (days > 0) {
      result += `${days}일 `;
    }
    if (hours > 0) {
      result += `${hours}시간 `;
    }
    if (minutes > 0) {
      result += `${minutes}분 `;
    }
    return result;
  };
  return (
    <div className='w-[300px] flex flex-col md:flex-row md:w-full md:h-[300px]'>
      <div
        className='bg-primary relative p-2 border-b border-dashed border-tbd flex justify-end items-center rounded-t-lg
      md:rounded-none md:rounded-tl-lg md:rounded-bl-lg md:border-r md:border-b-0'
      >
        <div className='flex flex-col font-bold'>
          <span>{reservationId}</span>
        </div>
      </div>
      <div className='relative p-8 border-b md:border-r border-dashed border-gray-200 flex justify-center items-center bg-white'>
        <QRCode value='https://www.chunjae.co.kr/' size={200} />
        {/* <div className='absolute bg-black h-[16px] w-[16px] rounded-full -bottom-[10px] -left-[10px] md:hidden'></div>
        <div className='absolute bg-black h-[16px] w-[16px] rounded-full -bottom-[10px] -right-[10px] md:hidden'></div> */}
      </div>
      <div className='bg-white p-8 border-b border-dashed border-tbd flex flex-col gap-4 md:border-r md:border-b-0 md:justify-evenly '>
        <div className='flex flex-col font-bold'>
          <span className='font-light'>주제</span>
          {topic}
        </div>
        <div className='flex flex-col font-bold'>
          <span className='font-light'>예약자</span>
          {name}
        </div>
        <div className='flex flex-col font-bold'>
          <span className='font-light'>참가자</span>
          홍길동, 이순신, 김좌진, ...
        </div>
      </div>
      <div className='bg-white p-8 flex flex-col gap-4 md:justify-between'>
        <div className='text-left flex flex-col font-bold'>
          <span className='font-light'>장소</span>
          {roomNumber}
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col font-bold'>
            <span className='font-light'>날짜</span>
            {`${start.getFullYear()}년 ${
              start.getMonth() + 1
            }월 ${start.getDate()}일 (${week[start.getDay()]})`}
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col font-bold'>
            <span className='font-light'>시작</span>
            {`${getPadHour(start.getHours())}:00`}
          </div>
          <div className='text-right flex flex-col font-bold'>
            <span className='font-light'>종료</span>
            {`${getPadHour(end.getHours())}:00`}
          </div>
        </div>
        <div className='flex justify-between'>
          <div className='flex flex-col font-bold'>
            <span className='font-light'>남은시간</span>
            {`${getRemainingTime()}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservation;
