import { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const ModalPortal = ({ children }: { children: JSX.Element }) => {
  const [element, setElement] = useState<Element | null>(null);

  useEffect(() => {
    const modalElement = document.querySelector("#modal");
    setElement(modalElement);
  }, []);

  if (!element) {
    return <></>;
  }
  return ReactDOM.createPortal(children, element);
};

export default ModalPortal;
