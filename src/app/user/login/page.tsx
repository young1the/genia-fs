import UnauthenticatedOnly from "@/components/HOC/UnauthenticatedOnly";
import LoginForm from "@/components/LoginForm/LoginForm";

const page = () => {
  return (
    <section className='flex items-center justify-center px-6 py-8'>
      <UnauthenticatedOnly>
        <LoginForm />
      </UnauthenticatedOnly>
    </section>
  );
};

export default page;
