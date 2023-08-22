"use client";
import { ModalType } from "../ReservationTicket/ReservationControlPanel";
import ApplyModal from "./ApplyModal";
import CancelModal from "./CancelModal";
import DeleteModal from "./DeleteModal";
import ModifyModal from "./ModifyModal";
import { Reservation } from "@/lib/api/reservation/type";

export interface ModalProps {
  modalType: ModalType;
  reservationData: Reservation;
  off: () => void;
}

const ReservationModal = (props: ModalProps) => {
  const modals: Record<ModalType, JSX.Element> = {
    apply: <ApplyModal {...props} />,
    modify: <ModifyModal {...props} />,
    delete: <DeleteModal {...props} />,
    cancel: <CancelModal {...props} />,
  };
  return modals[props.modalType];
};

export default ReservationModal;
