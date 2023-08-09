"use client";
import * as SVG from "@/components/common/svg";
import { PanelProps } from "./ReservationControlPanel";

interface Props extends PanelProps {
  isPart: boolean;
}

const ReservationMemberPanel = ({ setModalType, on, isPart }: Props) => {
  return (
    <>
      {isPart ? (
        <button
          onClick={() => {
            setModalType("cancel");
            on();
          }}
        >
          <SVG.Cancel className={`w-8 h-8`} />
        </button>
      ) : (
        <button
          onClick={() => {
            setModalType("apply");
            on();
          }}
        >
          <SVG.Plus className={`w-8 h-8`} />
        </button>
      )}
    </>
  );
};

export default ReservationMemberPanel;
