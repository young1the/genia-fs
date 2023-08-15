"use client";
import { getAvailableRoom } from "@/lib/api/room/method";
import { Room } from "@/lib/api/room/type";
import { useQuery } from "@tanstack/react-query";
import { RoomWrapper, getRoomType } from "./RoomUtil";
import { useRouter } from "next/navigation";

const RoomList = () => {
  const router = useRouter();
  // const setRoomState = useSetRecoilState(reservationInput("ROOM"));
  const { data } = useQuery<Room[]>(["room"], {
    queryFn: async () => {
      return getAvailableRoom(null);
    },
  });

  return (
    <div className='w-full grid gap-4 place-items-center'>
      {data
        ? data.map((ele) => {
            const { id, roomName } = ele;
            const type = getRoomType(ele);
            return (
              <RoomWrapper
                show={true}
                onClick={() => {
                  router.push(`room/${id}`);
                }}
                selected={false}
                key={"room" + id}
              >
                <div className='flex items-center justify-between'>
                  <p>
                    {id} : {roomName}
                  </p>
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
          })
        : null}
    </div>
  );
};

export default RoomList;
