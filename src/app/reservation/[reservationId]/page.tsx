import { Suspense } from "react";
import Spinner from "@/components/common/loader/Spinner";
import ReservationTicket from "@/components/reservation/ReservationTicket/ReservationTicket";
import { ReservationData } from "@/types/common";
import ReservationControlPanel from "@/components/reservation/ReservationTicket/ReservationControlPanel";

const page = async ({
  params,
}: {
  params: { reservationId: Pick<ReservationData, "reservationId"> };
}) => {
  return (
    <div className='cc-page-wrapper max-w-5xl'>
      <Suspense fallback={<Spinner />}>
        <ReservationControlPanel id={params.reservationId} />
        <ReservationTicket id={params.reservationId} />
      </Suspense>
    </div>
  );
};

export default page;
