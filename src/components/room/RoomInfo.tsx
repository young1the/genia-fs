"use client";
import { useQuery } from "@tanstack/react-query";
import GreenButton from "../common/button/GreenButton";
import TitleText from "../common/text/TitleText";
import { RoomType, RoomTypeWrapper, getRoomType } from "./RoomUtil";
import { checkInRoom, checkOutRoom, getRoomById } from "@/lib/api/room/method";
import { Room, RoomId } from "@/lib/api/room/type";
import LoginModal from "../common/modal/LoginModal";
import { Suspense } from "react";
import ReservationInfoButton from "../reservation/ReservationInfoButton";
import { useModal } from "@/lib/modal";
import Spinner from "../common/loader/Spinner";
import ReservationTicket from "../reservation/ReservationTicket/ReservationTicket";
import QRCode from "react-qr-code";
interface Props {
  id: RoomId;
}

const RoomInfo = ({ id }: Props) => {
  const { state, on, off, ModalBackDrop } = useModal({ scrollLock: false });
  const { data } = useQuery<Room>(["room", id], {
    queryFn: async () => getRoomById(id),
    suspense: true,
  });
  const roomType = data ? getRoomType(data) : 0;
  const onCheckInHandler = async () => {
    checkInRoom(data?.reservationCode as any);
  };
  const onCheckOutHandler = async () => {
    checkOutRoom(data?.reservationCode as any);
  };

  return (
    <div className='flex flex-col justify-center w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 p-6 space-y-8 md:space-y-8 sm:p-8'>
      <TitleText title={data?.roomName ?? ""} />
      <QRCode
        value={`${process.env.NEXT_PUBLIC_BASE_URL}/room/${id}`}
        size={200}
      />
      <LoginModal keepOpen={true} />
      <div className='w-full gap-4 grid grid-cols-3 place-items-center'>
        {RoomType.map((ele) => {
          const { type, name, svg } = ele;
          type;
          return (
            <RoomTypeWrapper
              onClick={() => {}}
              selected={(roomType & type) === type}
              key={name}
            >
              {svg}
              <p>{name}</p>
            </RoomTypeWrapper>
          );
        })}
      </div>
      <TitleText title={"현재 진행중인 예약"} />
      {data && data.reservationCode ? (
        <ReservationInfoButton
          reservationData={{ ...data } as any}
          onClickHandler={on}
        />
      ) : null}
      <div className='w-full flex space-x-4 justify-end'>
        <GreenButton title='입실' onClickHandler={onCheckInHandler} />
        <GreenButton title='퇴실' onClickHandler={onCheckOutHandler} />
      </div>
      {data?.reservationCode ? (
        <ModalBackDrop state={state} off={off}>
          <Suspense fallback={<Spinner />}>
            <ReservationTicket
              isInModal={true}
              id={data?.reservationCode as any}
            />
          </Suspense>
        </ModalBackDrop>
      ) : null}
    </div>
  );
};

export default RoomInfo;
