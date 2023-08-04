import UnauthenticatedOnly from "@/components/hoc/UnauthenticatedOnly";
import RegisterForm from "@/components/user/RegisterForm/RegisterForm";

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
