"use client";
import * as SVG from "@/components/common/svg";
import { PanelProps } from "./ReservationControlPanel";

const ReservationOwnerPanel = ({ setModalType, on }: PanelProps) => {
  return (
    <>
      <button
        onClick={() => {
          setModalType("modify");
          on();
        }}
      >
        <SVG.Setting className={`w-8 h-8`} />
      </button>
      <button
        onClick={() => {
          setModalType("delete");
          on();
        }}
      >
        <SVG.Trash className={`w-8 h-8`} />
      </button>
    </>
  );
};

export default ReservationOwnerPanel;
