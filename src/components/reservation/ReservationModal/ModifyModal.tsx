"use client";
import * as SVG from "@/components/common/svg";
import { ModalProps } from "./ReservationModal";
import Input from "@/components/common/input/Input";
import { useState } from "react";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";

const ModifyModal = ({ reservationData, off }: ModalProps) => {
  const [newTopic, setNewTopic] = useState("");
  reservationData;
  return (
    <div className='relative w-full max-w-md max-h-full'>
      <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
        <button onClick={off}>
          <SVG.Cancel className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' />
        </button>
        <div className='px-8 py-6 space-y-6 text-center'>
          <KeywordHighlight
            before='변경하실'
            keyword={"예약의 주제"}
            after={"를 입력하세요."}
          />
          <Input
            placeholder={"ex) 실무에 바로 적용하는 효율적인 업무관리 전략"}
            type={"text"}
            state={[newTopic, setNewTopic]}
          />
          <button
            onClick={off}
            type='button'
            className='text-white bg-primary hover:bg-primary-hover font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2'
          >
            네
          </button>
          <button
            onClick={off}
            type='button'
            className='text-gray-500 bg-white hover:bg-gray-100 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600'
          >
            아니오
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModifyModal;
