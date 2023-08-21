import { Suspense } from "react";
import Spinner from "@/components/common/loader/Spinner";
import ReservationTicket from "@/components/reservation/ReservationTicket/ReservationTicket";
import ReservationControlPanel from "@/components/reservation/ReservationTicket/ReservationControlPanel";
import { ReservationCode } from "@/lib/api/reservation/type";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: ReservationCode;
}): Promise<Metadata> {
  const reservationCode = params.reservationCode;
  const reservation = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER}/api/reservation/${reservationCode}`
  ).then((res) => res.json());

  return {
    title: `천재교육 강의실 예약 - ${reservation.topic}`,
  };
}

const page = async ({
  params,
}: {
  params: { reservationCode: ReservationCode };
}) => {
  return (
    <div className='cc-page-wrapper max-w-5xl'>
      <Suspense fallback={<Spinner />}>
        <ReservationControlPanel id={params.reservationCode as any} />
        <ReservationTicket id={params.reservationCode as any} />
      </Suspense>
    </div>
  );
};

export default page;
