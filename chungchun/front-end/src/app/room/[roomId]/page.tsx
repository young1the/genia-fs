import { Suspense } from "react";
import Spinner from "@/components/common/loader/Spinner";
import { RoomId } from "@/lib/api/room/type";
import RoomInfo from "@/components/room/RoomInfo";

const page = async ({ params }: { params: { roomId: RoomId } }) => {
  return (
    <div className='cc-page-wrapper max-w-5xl'>
      <Suspense fallback={<Spinner />}>
        <RoomInfo id={params.roomId} />
      </Suspense>
    </div>
  );
};

export default page;
