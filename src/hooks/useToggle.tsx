import { useState } from "react";

const useToggle = (initState = false) => {
  const [state, setState] = useState(initState);
  const toggleState = () => {
    setState((prev) => !prev);
  };
  return { state, toggleState };
};

export default useToggle;
