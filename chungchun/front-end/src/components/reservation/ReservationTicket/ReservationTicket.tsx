"use client";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import * as SVG from "@/components/common/svg";
import QRCode from "react-qr-code";
import { getReservationData } from "@/lib/api/reservation/method";
import { ReservationCode, ReservationGet } from "@/lib/api/reservation/type";
import ReservationPartics from "./ReservationPartics";

const week = ["일", "월", "화", "수", "목", "금", "토"];

interface Props {
  id: ReservationCode;
  isInModal?: boolean;
}

const ReservationTicket = ({ id, isInModal = false }: Props) => {
  const { data } = useQuery<ReservationGet>({
    suspense: true,
    queryKey: ["reservation", id],
    queryFn: () => {
      return getReservationData(id);
    },
  });
  const router = useRouter();
  const start = new Date(data?.startDate ?? 0);
  const end = new Date(data?.endDate ?? 0);
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
      if (end.getTime() - now.getTime() >= 0) return "예약진행중";
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
    <div
      onClick={() => {
        if (isInModal) router.push(`/reservation/${id}`);
      }}
      className={`shadow relative w-[300px] flex flex-col ${
        isInModal ? "cursor-pointer mt-[400px] mb-10 md:m-0" : ""
      } md:flex-row md:w-full md:h-[300px] rounded-t-lg`}
    >
      <div
        className={`${
          !isInModal ? "hidden" : ""
        } w-full absolute bg-transparent -top-12 flex justify-end p-2 md:right-0`}
      >
        <div className='flex items-center space-x-2 font-bold'>
          <SVG.StopWatch className={"w-6 h-6"} />
          {`${getRemainingTime()}`}
        </div>
      </div>
      <div
        className='bg-primary relative p-2 border-b border-dashed border-tbd flex justify-end items-center rounded-t-lg
      md:rounded-none md:rounded-tl-lg md:rounded-bl-lg md:border-r md:border-b-0'
      >
        <div className='flex flex-col font-bold'>
          <span className={"md:[writing-mode:vertical-lr]"}>{id + ""}</span>
        </div>
      </div>
      <div className='relative p-8 border-b md:border-r border-dashed border-gray-200 flex justify-center items-center bg-white'>
        <QRCode
          value={`${process.env.NEXT_PUBLIC_BASE_URL}/reservation/${id}`}
          size={200}
        />
        {/* <div className='absolute bg-black h-[16px] w-[16px] rounded-full -bottom-[10px] -left-[10px] md:hidden'></div>
        <div className='absolute bg-black h-[16px] w-[16px] rounded-full -bottom-[10px] -right-[10px] md:hidden'></div> */}
      </div>
      <div className='bg-white flex-1 p-8 border-b border-dashed border-tbd flex flex-col gap-4 md:border-r md:border-b-0 md:justify-between '>
        <div className='flex flex-col font-bold'>
          <span className='font-light'>주제</span>
          {data?.topic}
        </div>
        <div className='flex flex-col font-bold'>
          <span className='font-light'>예약자</span>
          {data?.nickName}
        </div>
        <div className='flex flex-col font-bold'>
          <span className='font-light'>참가자</span>
          <ReservationPartics
            partics={data?.user}
            owner={data?.nickName + ""}
          />
        </div>
      </div>
      <div className='bg-white flex-1 p-8 flex flex-col gap-4 md:justify-between'>
        <div className='text-left flex flex-col font-bold'>
          <span className='font-light'>장소</span>
          {data?.roomName}
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
      </div>
    </div>
  );
};

export default ReservationTicket;
