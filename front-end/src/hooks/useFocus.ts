import { useEffect, useRef } from "react";

const useFocus = <T extends HTMLElement>(): {
  focusElement: React.RefObject<T>;
  focus: () => void;
} => {
  const focusElement = useRef<T>(null);
  const focus = () => {
    if (focusElement.current) focusElement.current.focus();
  };
  useEffect(() => {
    focus();
  }, []);
  return { focusElement, focus };
};

export default useFocus;
