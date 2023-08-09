import UnauthenticatedOnly from "@/components/hoc/UnauthenticatedOnly";
import LoginForm from "@/components/user/LoginForm/LoginForm";

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
