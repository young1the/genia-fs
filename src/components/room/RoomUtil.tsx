import * as SVG from "@/components/common/svg";
import { Room } from "@/lib/api/room/type";

export const BOARD = 4;
export const DESKTOP = 2;
export const BEAM = 1;

type RoomOptionType = {
  type: number;
  name: string;
  svg: JSX.Element;
};

export const getRoomType = (roomData: Room) => {
  const { beamProjector, blackBoard, computer } = roomData;
  let type = 0;
  if (beamProjector > 0) type |= BEAM;
  if (blackBoard > 0) type |= BOARD;
  if (computer > 0) type |= DESKTOP;
  return type;
};

export const RoomType: RoomOptionType[] = [
  { type: BOARD, name: "칠판", svg: <SVG.MeetingBoard className='w-8 h-8' /> },
  { type: DESKTOP, name: "데스크탑", svg: <SVG.Desktop className='w-8 h-8' /> },
  { type: BEAM, name: "빔프로젝터", svg: <SVG.Beam className='w-8 h-8' /> },
];

export interface WrapperProps {
  children: JSX.Element[] | JSX.Element;
  onClick?: () => void;
  selected: boolean;
}
export const RoomTypeWrapper = ({
  onClick,
  selected,
  children,
}: WrapperProps) => {
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

export const RoomWrapper = ({
  onClick,
  selected,
  children,
  show,
}: WrapperProps & { show: boolean }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full ${show ? "block" : "hidden"} ${
        selected ? "bg-primary text-white" : "bg-gray-100 hover:bg-gray-200"
      }
      inter py-2 px-4`}
    >
      {children}
    </div>
  );
};
