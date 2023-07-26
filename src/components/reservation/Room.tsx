import * as SVG from "@/components/common/svg";
import { reservationInput } from "@/store/Reservation/atoms";
import { useRouter } from "next/navigation";
import { useSetRecoilState } from "recoil";

const BOARD = 4;
const DESKTOP = 2;
const BEAM = 1;

type RoomOptionType = {
  type: number;
  name: string;
  svg: JSX.Element;
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
export type RoomType = {
  type: number;
  name: string;
  id: string;
};

export const mockRooms: RoomType[] = [
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

export const Rooms = () => {
  const router = useRouter();
  const setRoomState = useSetRecoilState(reservationInput("ROOM"));

  return (
    <div className='w-full grid gap-4 place-items-center'>
      {mockRooms.map((ele) => {
        const { id, type, name } = ele;
        type;
        return (
          <RoomWrapper
            show={true}
            onClick={() => {
              setRoomState(id);
              router.push("/reservation/new");
            }}
            selected={false}
            key={id}
          >
            <div className='flex items-center justify-between'>
              <p>{name}</p>
              <div>
                {(type & 7) != 7 && (type & 4) > 0 && (
                  <span className=' bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300'>
                    칠판
                  </span>
                )}
                {(type & 7) != 7 && (type & 2) > 0 && (
                  <span className='bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300'>
                    데스크탑
                  </span>
                )}
                {(type & 7) != 7 && (type & 1) > 0 && (
                  <span className='bg-yellow-100 text-yellow-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-yellow-900 dark:text-yellow-300'>
                    빔
                  </span>
                )}
                {(type & 7) == 7 && (
                  <span className='bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-pink-900 dark:text-pink-300'>
                    All
                  </span>
                )}
              </div>
            </div>
          </RoomWrapper>
        );
      })}
    </div>
  );
};
