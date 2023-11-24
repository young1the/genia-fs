"use client";
import { useQuery } from "@tanstack/react-query";
import { useModal } from "@/lib/modal";
import { useState } from "react";
import ReservationModal from "../ReservationModal/ReservationModal";
import { useSession } from "next-auth/react";
import ReservationOwnerPanel from "./ReservationOwnerPanel";
import ReservationGuestPanel from "./ReservationGuestPanel";
import ReservationMemberPanel from "./ReservationMemberPanel";
import {
  getMyReservationId,
  getReservationData,
} from "@/lib/api/reservation/method";
import { ReservationCode } from "@/lib/api/reservation/type";

interface Props {
  id: ReservationCode;
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
  const { data: myReservationCode } = useQuery<ReservationCode>(
    ["myReservationCode"],
    {
      queryFn: getMyReservationId,
    }
  );
  const { data: sessionData } = useSession();
  const { state, on, off, ModalBackDrop } = useModal({
    scrollLock: true,
    modalState: false,
  });
  const [modalType, setModalType] = useState<ModalType>();
  return (
    <>
      <div className={"w-[300px] flex justify-end mb-2 space-x-4 md:w-full"}>
        {!sessionData ? ( // TODO: sessionData?.user.email == data?.email
          <ReservationGuestPanel />
        ) : sessionData.user.nickName == data?.nickName ? (
          <ReservationOwnerPanel on={on} setModalType={setModalType} />
        ) : (
          <ReservationMemberPanel
            on={on}
            setModalType={setModalType}
            isPart={myReservationCode === id}
          />
        )}
      </div>
      {state ? (
        <ModalBackDrop state={state} off={() => {}}>
          <ReservationModal
            off={off}
            modalType={modalType as any}
            reservationData={{ ...data, ["reservationCode"]: id } as any}
          />
        </ModalBackDrop>
      ) : null}
    </>
  );
};

export default ReservationControlPanel;
