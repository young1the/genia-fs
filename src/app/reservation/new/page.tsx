import AuthenticatedOnly from "@/components/HOC/AuthenticatedOnly";
import NewReservationForm from "@/components/NewReservationForm";

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
