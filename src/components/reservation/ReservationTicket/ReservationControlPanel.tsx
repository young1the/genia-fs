"use client";
import { useQuery } from "@tanstack/react-query";
import { getReservationData } from "@/lib/api/methods";
import { useModal } from "@/lib/modal";
import { ReservationData } from "@/types/common";
import { useState } from "react";
import ReservationModal from "../ReservationModal/ReservationModal";
import { useSession } from "next-auth/react";
import ReservationOwnerPanel from "./ReservationOwnerPanel";
import ReservationGuestPanel from "./ReservationGuestPanel";
import ReservationMemberPanel from "./ReservationMemberPanel";

interface Props {
  id: Pick<ReservationData, "reservationId">;
}

export type ModalType = "apply" | "modify" | "delete" | "cancel";
export interface PanelProps {
  on: () => void;
  setModalType: React.Dispatch<React.SetStateAction<ModalType | undefined>>;
}

const ReservationControlPanel = ({ id }: Props) => {
  const { data } = useQuery(["reservation", id], {
    queryFn: async () => getReservationData(id),
  });
  const { state, on, off, ModalBackDrop } = useModal({
    scrollLock: true,
    modalState: false,
  });
  const [modalType, setModalType] = useState<ModalType>();
  const { data: sessionData } = useSession();

  return (
    <>
      <div className={"w-[300px] flex justify-end mb-2 space-x-4 md:w-full"}>
        {!sessionData ? ( // TODO: sessionData?.user.nickName == data?.name
          <ReservationGuestPanel on={on} setModalType={setModalType} />
        ) : sessionData.user.nickName == data?.name ? (
          <ReservationOwnerPanel on={on} setModalType={setModalType} />
        ) : (
          <ReservationMemberPanel on={on} setModalType={setModalType} />
        )}
      </div>
      {state ? (
        <ModalBackDrop state={state} off={off}>
          <ReservationModal
            off={off}
            modalType={modalType as any}
            reservationData={{ ...data } as any}
          />
        </ModalBackDrop>
      ) : null}
    </>
  );
};

export default ReservationControlPanel;
