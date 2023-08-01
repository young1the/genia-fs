"use client";
import { ReservationData } from "@/types/common";
import { ModalType } from "../ReservationTicket/ReservationControlPanel";
import ApplyModal from "./ApplyModal";
import DeleteModal from "./DeleteModal";
import ModifyModal from "./ModifyModal";

export interface ModalProps {
  modalType: ModalType;
  reservationData: ReservationData;
  off: () => void;
}

const ReservationModal = (props: ModalProps) => {
  const modals: Record<ModalType, JSX.Element> = {
    apply: <ApplyModal {...props} />,
    modify: <ModifyModal {...props} />,
    delete: <DeleteModal {...props} />,
  };
  return modals[props.modalType];
};

export default ReservationModal;
