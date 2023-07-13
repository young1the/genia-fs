import UnauthenticatedOnly from "@/components/HOC/UnauthenticatedOnly";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const page = () => {
  return (
    <section className='cc-page-wrapper'>
      <UnauthenticatedOnly>
        <RegisterForm />
      </UnauthenticatedOnly>
    </section>
  );
};

export default page;
