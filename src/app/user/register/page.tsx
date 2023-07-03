import RegisterForm from "@/components/RegisterForm/RegisterForm";

const page = () => {
  // const { on, off, state } = useModal();
  return (
    <section className='flex flex-col items-center justify-center px-6 py-8 mx-auto'>
      <RegisterForm />
    </section>
  );
};

export default page;
