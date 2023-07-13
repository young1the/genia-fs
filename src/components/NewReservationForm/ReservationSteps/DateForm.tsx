"use client";
import { useSetRecoilState } from "recoil";
import KeywordHighlight from "../../commons/texts/KeywordHighlight";
import Datepicker from "tailwind-datepicker-react";
import { reservationInput } from "@/store/Reservation/atoms";
import { useState } from "react";

const options = {
  title: "",
  autoHide: true,
  todayBtn: false,
  clearBtn: true,
  maxDate: new Date("2030-01-01"),
  minDate: new Date("1950-01-01"),
  theme: {
    background: "",
    todayBtn: "",
    clearBtn: "",
    icons: "",
    text: "",
    disabledText: "",
    input: "",
    inputIcon: "",
    selected: "",
  },
  icons: {
    prev: () => <span>{"<-"}</span>,
    next: () => <span>{"->"}</span>,
  },
  datepickerClassNames: "absolute",
  defaultDate: new Date(),
  language: "ko",
};

const DateForm = () => {
  const setDateInput = useSetRecoilState(reservationInput("DATE"));
  const [show, setShow] = useState(false);
  return (
    <form className='flex flex-col space-y-8 relative'>
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
    </form>
  );
};

export default DateForm;
