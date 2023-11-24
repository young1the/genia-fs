import AuthenticatedOnly from "@/components/hoc/AuthenticatedOnly";
import ReservationMain from "@/components/reservation/ReservationMain/ReservationMain";

const page = () => {
  return (
    <div className='cc-page-wrapper'>
      <AuthenticatedOnly>
        <ReservationMain />
      </AuthenticatedOnly>
    </div>
  );
};

export default page;
