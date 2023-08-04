import { Suspense } from "react";
import Spinner from "@/components/common/loader/Spinner";
import ReservationTicket from "@/components/reservation/ReservationTicket/ReservationTicket";
import ReservationControlPanel from "@/components/reservation/ReservationTicket/ReservationControlPanel";
import { Reservation } from "@/lib/api/reservation/type";

const page = async ({
  params,
}: {
  params: { reservationCode: Pick<Reservation, "reservationCode"> };
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
