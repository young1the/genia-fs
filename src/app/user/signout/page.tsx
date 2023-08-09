import AuthenticatedOnly from "@/components/hoc/AuthenticatedOnly";
import SignOutBox from "@/components/user/SignOutBox/SignOutBox";

const page = () => {
  return (
    <section className='cc-page-wrapper'>
      <AuthenticatedOnly>
        <SignOutBox />
      </AuthenticatedOnly>
    </section>
  );
};

export default page;
