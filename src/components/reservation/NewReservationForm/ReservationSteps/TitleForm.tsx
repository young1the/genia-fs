"use client";
import { useRecoilState } from "recoil";
import Input from "@/components/common/input/Input";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { reservationInput } from "@/store/Reservation/atoms";
const TitleForm = () => {
  const titleState = useRecoilState(reservationInput("TITLE"));
  return (
    <div className='flex flex-col space-y-8'>
      <KeywordHighlight before='예약의' keyword='제목' after='를 적어주세요.' />
      <Input
        placeholder={"ex) 실무에 바로 적용하는 효율적인 업무관리 전략"}
        type={"text"}
        state={titleState}
      ></Input>
    </div>
  );
};

export default TitleForm;
