"use client";
import { useRecoilState } from "recoil";
import KeywordHighlight from "../../commons/texts/KeywordHighlight";
import { reservationInput } from "@/store/Reservation/atoms";
import { useEffect, useState } from "react";

const times = [
  "09",
  "10",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

interface TimeProps {
  onClick: () => void;
  time: string;
  selected: boolean;
  available: boolean;
}

const TimeElement = ({ time, available, selected, onClick }: TimeProps) => {
  return (
    <div
      onClick={onClick}
      className={`${
        selected
          ? "bg-primary text-white cursor-pointer"
          : available
            ? "bg-primary-light text-white cursor-pointer"
            : "bg-gray-100 hover:bg-gray-200 cursor-pointer"
        }
    w-full rounded py-2 px-4 text-center`}
    >
      {time}:00
    </div>
  );
};

const TimeForm = () => {
  const [timeSelected, setTimeSelected] = useRecoilState(
    reservationInput("TIME")
  );
  const [startTime, setStartTime] = useState(
    times.indexOf(timeSelected.split(" ")[0])
  );
  const [endTime, setEndTime] = useState(
    times.indexOf(timeSelected.split(" ")[1]) - 1
  );
  useEffect(() => {
    if (startTime >= 0 && endTime >= 0) {
      setTimeSelected(times[startTime] + " " + times[endTime + 1]);
    }
  }, [setTimeSelected, startTime, endTime]);
  return (
    <div className='flex flex-col space-y-8'>
      <KeywordHighlight before='예약할' keyword='시간' after='을 적어주세요.' />
      <div className='flex w-full justify-between'>
        <div className='flex flex-col'>
          <span className='font-bold'>시작</span>
          {startTime < 0 ? null : `${times[startTime]}:00`}
        </div>
        <div className='flex flex-col'>
          <span className='font-bold'>종료</span>
          {endTime < 0 ? null : `${times[endTime + 1]}:00`}
        </div>
      </div>
      <div className='w-full grid grid-cols-3 gap-4 place-items-center'>
        {times.map((ele, index) => {
          if (index == times.length - 1) return null;
          const onClickHandler = () => {
            if (taken) return;
            if (startTime == -1) {
              setStartTime(index);
              setEndTime(index);
            } else if (index < startTime) {
              setStartTime(index);
              setEndTime(index);
            } else if (startTime == index) {
              setStartTime(-1);
              setEndTime(-1);
            } else if (endTime == index) {
              setEndTime((prev) => prev - 1);
            } else if (index > startTime + 2) {
              return;
            } else {
              setEndTime(index);
            }
          };
          return (
            <TimeElement
              selected={index >= startTime && index <= endTime}
              available={
                startTime >= 0 && index >= startTime && index <= startTime + 2
              }
              onClick={onClickHandler}
              key={ele}
              time={ele}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TimeForm;
