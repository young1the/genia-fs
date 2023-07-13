"use client";
import { useState } from "react";
import KeywordHighlight from "../../commons/texts/KeywordHighlight";
import * as SVG from "@/components/commons/svgs";
import { useRecoilState } from "recoil";
import { reservationInput } from "@/store/Reservation/atoms";

const BOARD = 4;
const DESKTOP = 2;
const BEAM = 1;

type RoomOptionType = {
  type: number;
  name: string;
  svg: JSX.Element;
};
const RoomType: RoomOptionType[] = [
  { type: BOARD, name: "칠판", svg: <SVG.MeetingBoard className='w-8 h-8' /> },
  { type: DESKTOP, name: "데스크탑", svg: <SVG.Desktop className='w-8 h-8' /> },
  { type: BEAM, name: "빔프로젝터", svg: <SVG.Beam className='w-8 h-8' /> },
];

interface WrapperProps {
  children: JSX.Element[] | JSX.Element;
  onClick?: () => void;
  selected: boolean;
}
const RoomTypeWrapper = ({ onClick, selected, children }: WrapperProps) => {
  return (
    <div
      onClick={onClick}
      className={`w-full rounded p-4 ${
        selected ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
      } cursor-pointer`}
    >
      <div className='flex flex-col items-center text-xs '>{children}</div>
    </div>
  );
};
type RoomType = {
  type: number;
  name: string;
  id: string;
};
const Rooms: RoomType[] = [
  { id: "00", name: "빔프로젝터방", type: BEAM },
  { id: "01", name: "빔프+칠판", type: BEAM | BOARD },
  { id: "02", name: "빔프로젝터방", type: BEAM },
  { id: "03", name: "빔프+칠판", type: BEAM | BOARD },
  { id: "04", name: "데스크탑1", type: DESKTOP },
  { id: "05", name: "데스크탑2", type: DESKTOP },
  { id: "06", name: "칠판1", type: BOARD },
  { id: "07", name: "칠판2", type: BOARD },
  { id: "08", name: "ALL 1", type: BEAM | BOARD | DESKTOP },
  { id: "09", name: "ALL 2", type: BEAM | BOARD | DESKTOP },
  { id: "10", name: "ALL 3", type: BEAM | BOARD | DESKTOP },
];
const RoomWrapper = ({
  onClick,
  selected,
  children,
  show,
}: WrapperProps & { show: boolean }) => {
  return (
    <div
      onClick={onClick}
      className={`${show ? "block" : "hidden"} ${
        selected ? "bg-primary text-white" : "bg-gray-200 hover:bg-gray-300"
      } w-full h-full rounded cursor-pointer py-2 px-4`}
    >
      {children}
    </div>
  );
};

const RoomForm = () => {
  const [optionSeleted, setOptionSeleted] = useState<number>(0);
  const [roomInput, setRoomInput] = useRecoilState(reservationInput("ROOM"));
  return (
    <form className='flex flex-col space-y-8'>
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
          {Rooms.map((ele) => {
            const { id, type, name } = ele;
            return (
              <RoomWrapper
                show={
                  optionSeleted == 0
                    ? true
                    : (optionSeleted & type) == optionSeleted
                }
                onClick={() => {
                  if (roomInput == id) setRoomInput("");
                  else setRoomInput(id);
                }}
                selected={roomInput === id}
                key={id}
              >
                <p>{name}</p>
              </RoomWrapper>
            );
          })}
        </div>
      </div>
    </form>
  );
};

export default RoomForm;
