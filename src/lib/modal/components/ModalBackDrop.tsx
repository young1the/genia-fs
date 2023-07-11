"use client";
import ModalPortal from "./ModalPotal";
import style from "./ModalBackDrop.module.css";

interface ModalBackDropProps {
  children: JSX.Element;
  state: boolean;
  off?: VoidFunction;
  opacity?: number;
}

const ModalBackDrop = ({
  children,
  state,
  off = () => {},
  opacity = 0.2,
}: ModalBackDropProps) => {
  return state ? (
    <ModalPortal>
      <div
        className={style.backdrop}
        style={{ backgroundColor: `rgba(0, 0, 0, ${opacity})` }}
        onClick={off}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
        </div>
      </div>
    </ModalPortal>
  ) : null;
};

export default ModalBackDrop;
