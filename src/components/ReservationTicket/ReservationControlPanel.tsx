"use client";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { getReservationData } from "@/lib/api/methods";
import { useModal } from "@/lib/modal";
import ReservationModal from "@/components/ReservationModal/ReservationModal";
import KeywordHighlight from "@/components/commons/texts/KeywordHighlight";
import * as SVG from "@/components/commons/svgs";
import { ReservationData } from "@/types/common";

interface Props {
  id: Pick<ReservationData, "reservationId">;
}

export const ReservationControlPanel = ({ id }: Props) => {
  const { data } = useQuery([id], {
    queryFn: () => getReservationData(id),
  });
  const { data: sessionData } = useSession();
  const { state, on,off, ModalBackDrop } = useModal({
    scrollLock: true,
    modalState: false,
  });

  return (
    <>
      <div className={"w-[300px] flex justify-end mb-2 space-x-4 md:w-full"}>
        {sessionData?.user?.email != data?.name ? (
          <>
            <button>
              <SVG.Setting className={`w-8 h-8`} />
            </button>
            <button>
              <SVG.Trash className={`w-8 h-8`} />
            </button>
          </>
        ) : (
          <>
            <button onClick={on}>
              <SVG.Plus className={`w-8 h-8`} />
            </button>
          </>
        )}
      </div>
      {
        state ?
        <ModalBackDrop state={state} off={off}>
          <ReservationModal confirm={true} off={off} >
            <KeywordHighlight keyword={data?.topic + ""} after={"에"} rest={"참여 하시겠습니까?"}/>
          </ReservationModal>
        </ModalBackDrop> : null
      }
    </>
  );
};
