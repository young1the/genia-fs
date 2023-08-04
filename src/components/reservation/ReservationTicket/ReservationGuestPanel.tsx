"use client";
import * as SVG from "@/components/common/svg";
import LoginModal from "@/components/common/modal/LoginModal";
import { useState } from "react";

type ModalState = "OPEN" | "CLOSE" | "READY";

const ReservationGuestPanel = () => {
  const [loginModal, setLoginModal] = useState<ModalState>("READY");
  return (
    <>
      <button
        onClick={() => {
          setLoginModal("OPEN");
        }}
      >
        <SVG.Plus className={`w-8 h-8`} />
      </button>
      {loginModal === "OPEN" ? (
        <div
          onClick={() => {
            setLoginModal("CLOSE");
          }}
        >
          <LoginModal keepOpen={false} />
        </div>
      ) : null}
    </>
  );
};

export default ReservationGuestPanel;
