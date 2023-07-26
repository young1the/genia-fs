"use client";
import * as SVG from "@/components/common/svg";
import { useQuery } from "@tanstack/react-query";
import { getReservationData } from "@/lib/api/methods";
import { ReservationData } from "@/types/common";

interface Props {
  id: Pick<ReservationData, "reservationId">;
  onClickHandler: () => void;
}

const ReservationInfoButton = ({ id, onClickHandler }: Props) => {
  const { data } = useQuery({
    queryKey: ["reservation", id],
    queryFn: () => {
      return getReservationData(id as any);
    },
    suspense: true,
  });

  return (
    <>
      <div
        onClick={onClickHandler}
        className='shadow cursor-pointer w-full rounded-lg dark:border dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center'
      >
        <SVG.QRScan className='w-16 h-16' />
        <div className='w-full ml-4 overflow-hidden whitespace-nowrap text-ellipsis'>
          {data?.topic}
          <div>{data ? new Date(data.startDate).toUTCString() : ""}</div>
        </div>
      </div>
    </>
  );
};

export default ReservationInfoButton;
