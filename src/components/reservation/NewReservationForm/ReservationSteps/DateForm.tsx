"use client";
import { useSetRecoilState } from "recoil";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import Datepicker from "tailwind-datepicker-react";
import { reservationInput } from "@/store/Reservation/atoms";
import { useState } from "react";

const options = {
  title: "",
  autoHide: true,
  todayBtn: true,
  todayBtnText: "오늘",
  clearBtn: false,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("2023-07-07"),
  theme: {
    background: "",
    todayBtn: "bg-primary hover:bg-primary-hover",
    clearBtn: "",
    icons: "",
    text: "",
    input: "",
    disabledText: "",
    inputIcon: "cc-text-black",
    selected: "bg-primary hover:bg-primary-hover",
  },
  weekDays: ["월", "화", "수", "목", "금", "토", "일"],
  icons: {
    prev: () => <span>{"<-"}</span>,
    next: () => <span>{"->"}</span>,
  },
  defaultDate: new Date(),
  language: "ko",
};

const DateForm = () => {
  const setDateInput = useSetRecoilState(reservationInput("DATE"));
  const [show, setShow] = useState(false);
  return (
    <div className='flex flex-col space-y-8 relative'>
      <KeywordHighlight
        before='예약할'
        keyword='날짜'
        after='를 선택 해주세요.'
      />
      <Datepicker
        options={options}
        onChange={(date: Date) => {
          const formatDate = (date: Date) => {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, "0");
            const day = String(date.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
          };
          setDateInput(formatDate(date));
        }}
        show={show}
        setShow={(state: boolean) => {
          setShow(state);
        }}
      />
    </div>
  );
};

export default DateForm;
