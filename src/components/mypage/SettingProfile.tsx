import { useState } from "react";
import FileInput from "../common/input/FileInput";
import Checkbox from "../common/input/Checkbox";
import GreenButton from "../common/button/GreenButton";
import Input from "../common/input/Input";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getMyPage, putMyPage } from "@/lib/api/mypage/method";
import toast from "react-hot-toast";

const SettingProfile = () => {
  const { data } = useQuery({
    queryKey: ["mypage"],
    queryFn: getMyPage,
    suspense: true,
  });
  const queryClient = useQueryClient();
  const [userName, setUserName] = useState(data?.nickName ?? "");
  const [empNumber, setEmpNumber] = useState(data?.empNumber ?? "");
  const [notificationAgreement, setNotificationAgreement] = useState(
    data?.notificationAgreement ?? false
  );
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const { mutate } = useMutation(
    async () =>
      toast.promise(
        new Promise(async (resolve, reject) => {
          try {
            const formData = new FormData();
            if (selectedImage) {
              formData.append("profileImage", selectedImage);
            }
            formData.append("nickName", userName);
            formData.append("empNumber", empNumber);
            formData.append(
              "notificationAgreement",
              notificationAgreement === true ? "true" : "false"
            );
            await putMyPage(formData as any);
            resolve(true);
          } catch (e) {
            reject(e);
          }
        }),
        {
          loading: "기다려주세요...",
          success: "완료",
          error: "Error",
        }
      ),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["mypage"]);
      },
    }
  );
  return (
    <>
      <div className='space-y-4 flex flex-col'>
        <div className='flex justify-center'>
          <FileInput
            currentImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>
        <div className='w-full flex items-center'>
          <div className='w-full flex flex-col space-y-4'>
            <label className='font-semibold text-gray-500 dark:text-gray-200'>
              이름
              <Input
                className='w-full font-bold text-xl'
                placeholder={""}
                type={"text"}
                state={[userName, setUserName]}
              />
            </label>
            <label className='font-semibold text-gray-500 dark:text-gray-200'>
              사번
              <Input
                className='w-full font-bold text-xl'
                placeholder={""}
                type={"text"}
                state={[empNumber, setEmpNumber]}
              />
            </label>
          </div>
        </div>
        <Checkbox
          label='마케팅 정보 수신 동의'
          name='marketing'
          checked={notificationAgreement === true}
          onChangeHandler={(e: React.ChangeEvent<HTMLInputElement>) => {
            setNotificationAgreement(e.target.checked);
          }}
        ></Checkbox>
        <GreenButton title={"변경내용 저장하기"} onClickHandler={mutate} />
      </div>
    </>
  );
};

export default SettingProfile;
