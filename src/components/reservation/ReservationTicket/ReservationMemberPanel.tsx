"use client";
import * as SVG from "@/components/common/svg";
import { PanelProps } from "./ReservationControlPanel";

const ReservationMemberPanel = ({ setModalType, on }: PanelProps) => {
  return (
    <>
      <button
        onClick={() => {
          setModalType("cancel");
          on();
        }}
      >
        <SVG.Cancel className={`w-8 h-8`} />
      </button>
    </>
  );
};

export default ReservationMemberPanel;
