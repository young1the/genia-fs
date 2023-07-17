import UnauthenticatedOnly from "@/components/HOC/UnauthenticatedOnly";
import LoginForm from "@/components/LoginForm/LoginForm";

const page = () => {
  return (
    <section className='cc-page-wrapper'>
      <UnauthenticatedOnly>
        <LoginForm />
      </UnauthenticatedOnly>
    </section>
  );
};

export default page;
