"use client";
import ModalPortal from "./ModalPotal";

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
  opacity = 0.5,
}: ModalBackDropProps) => {
  return state ? (
    <ModalPortal>
      <div
        className='"fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50 overflow-hidden"'
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
