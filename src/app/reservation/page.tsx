import AuthenticatedOnly from "@/components/HOC/AuthenticatedOnly";
import ReservationMain from "@/components/ReservationMain/ReservationMain";

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
