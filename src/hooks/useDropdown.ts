import { useEffect, useRef, useState } from "react";

const useDropdown = (initialState = false) => {
  const [showDropdown, setshowDropdown] = useState<boolean>(initialState);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggleState = () => {
    setshowDropdown((prev) => !prev);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setshowDropdown(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return { showDropdown, buttonRef, toggleState };
};

export default useDropdown;
