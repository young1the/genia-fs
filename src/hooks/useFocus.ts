import { useEffect, useRef } from "react";

const useFocus = <T extends HTMLElement>() => {
  const focusElement = useRef<T>(null);
  useEffect(() => {
    if (focusElement.current) focusElement.current.focus();
  }, []);
  return focusElement;
};

export default useFocus;
