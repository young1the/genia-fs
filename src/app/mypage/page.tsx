import AuthenticatedOnly from "@/components/hoc/AuthenticatedOnly";
import MyPage from "@/components/mypage/MyPage";

const page = async () => {
  return (
    <div className='cc-page-wrapper'>
      <AuthenticatedOnly>
        <MyPage />
      </AuthenticatedOnly>
    </div>
  );
};

export default page;
