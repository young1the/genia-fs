import AuthenticatedOnly from "@/components/hoc/AuthenticatedOnly";
import NewReservationForm from "@/components/reservation/NewReservationForm";

const page = () => {
  return (
    <div className='cc-page-wrapper'>
      <AuthenticatedOnly>
        <NewReservationForm />
      </AuthenticatedOnly>
    </div>
  );
};

export default page;
