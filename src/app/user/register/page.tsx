import UnauthenticatedOnly from "@/components/HOC/UnauthenticatedOnly";
import RegisterForm from "@/components/RegisterForm/RegisterForm";

const page = () => {
  return (
    <section className='flex flex-col items-center justify-center px-6 py-8 mx-auto'>
      <UnauthenticatedOnly>
        <RegisterForm />
      </UnauthenticatedOnly>
    </section>
  );
};

export default page;
