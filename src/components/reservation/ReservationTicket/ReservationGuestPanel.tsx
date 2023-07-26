"use client";
import * as SVG from "@/components/common/svg";
import { PanelProps } from "./ReservationControlPanel";

const ReservationGuestPanel = ({ setModalType, on }: PanelProps) => {
  return (
    <>
      <button
        onClick={() => {
          setModalType("apply");
          on();
        }}
      >
        <SVG.Plus className={`w-8 h-8`} />
      </button>
    </>
  );
};

export default ReservationGuestPanel;
