"use client";
import { useState } from "react";
import KeywordHighlight from "@/components/common/text/KeywordHighlight";
import * as SVG from "@/components/common/svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  reservationInput,
  reservationInputsSelector,
} from "@/store/Reservation/atoms";
import {
  RoomType,
  RoomTypeWrapper,
  RoomWrapper,
  getRoomType,
} from "@/components/room/Room";
import { useQuery } from "@tanstack/react-query";
import { getAvailableRoom } from "@/lib/api/room/method";

const RoomForm = () => {
  const reservationInputs = useRecoilValue(reservationInputsSelector);
  const [optionSeleted, setOptionSeleted] = useState<number>(0);
  const [roomInput, setRoomInput] = useRecoilState(reservationInput("ROOM"));
  const { data } = useQuery(["room"], {
    queryFn: async () => {
      const date = reservationInputs.DATE;
      let getRoomBody = null;
      if (!!reservationInputs.TIME) {
        const times = reservationInputs.TIME.split(" ");
        const startDate = `${date}T${times[0]}`;
        const endDate = `${date}T${times[1]}`;
        getRoomBody = { startDate, endDate };
      }
      return getAvailableRoom(getRoomBody);
    },
  });
  return (
    <div className='flex flex-col space-y-8'>
      <KeywordHighlight
        before='예약할'
        keyword='강의실'
        after='을 정해주세요.'
      />
      <div className='flex flex-col space-y-4'>
        <div className='w-full gap-4 grid grid-cols-3 place-items-center'>
          {RoomType.map((ele) => {
            const { type, name, svg } = ele;
            return (
              <RoomTypeWrapper
                onClick={() => {
                  setOptionSeleted((prev) => prev ^ type);
                }}
                selected={(optionSeleted & type) > 0}
                key={name}
              >
                {svg}
                <p>{name}</p>
              </RoomTypeWrapper>
            );
          })}
        </div>
        <div className='inline-flex items-center justify-center w-full'>
          <hr className='w-full h-[1px] my-8 bg-gray-200 border-0 rounded dark:bg-gray-700' />
          <div className='absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900'>
            <SVG.List className='w-8 h-8' />
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 place-items-center'>
          {data
            ? Object.keys(data).map((ele) => {
                const { id, roomName } = data[ele];
                const type = getRoomType(data[ele]);
                return (
                  <RoomWrapper
                    show={
                      optionSeleted == 0
                        ? true
                        : (optionSeleted & type) == optionSeleted
                    }
                    onClick={() => {
                      if (roomInput == roomName) setRoomInput("");
                      else setRoomInput(roomName);
                    }}
                    selected={roomInput === roomName}
                    key={"room" + id}
                  >
                    <p>{roomName}</p>
                  </RoomWrapper>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default RoomForm;
