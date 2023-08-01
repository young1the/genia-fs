"use client";
import * as SVG from "@/components/common/svg";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import { ModalProps } from "./ReservationModal";

const ApplyModal = ({ reservationData, myReservationId, off }: ModalProps) => {
  myReservationId;
  return (
    <div className='relative w-full max-w-md max-h-full'>
      <div className='relative bg-white rounded-lg shadow dark:bg-gray-700'>
        <button onClick={off}>
          <SVG.Cancel className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white' />
        </button>
        <div className='px-8 py-6 text-center'>
          <div className='my-5 text-md'>
            <KeywordHighlight
              keyword={reservationData.topic}
              after={"에"}
              rest={"참여 하시겠습니까?"}
            />
          </div>
          <button
            // onClick={confirm}
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

export default ApplyModal;
