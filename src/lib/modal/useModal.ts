import { useCallback, useState } from "react";
import ModalBackDrop from "./components/ModalBackDrop";

interface Props {
  scrollLock?: boolean;
  modalState?: boolean;
}

const useModal = (props?: Props) => {
  const [isModalOn, setIsModalOn] = useState<boolean>(
    props?.modalState ?? false
  );
  const on = useCallback(() => {
    props?.scrollLock ? (document.body.style.overflow = "hidden") : null;
    setIsModalOn(true);
  }, [props]);
  const off = useCallback(() => {
    props?.scrollLock ? document.body.style.removeProperty("overflow") : null;
    setIsModalOn(false);
  }, [props]);
  return { state: isModalOn, on, off, ModalBackDrop };
};

export default useModal;
