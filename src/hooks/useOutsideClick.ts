import { RefObject, useEffect } from "react";

function useOutsideClick(
  elementRef: RefObject<HTMLElement>,
  action: (() => void) | undefined,
) {
  useEffect(() => {
    function detectOutsideClick(e: MouseEvent | KeyboardEvent) {
      // If provided element ref exist, AND it's NOT the clicked element, do what you want
      if (
        elementRef.current &&
        !elementRef.current.contains(e.target as Node)
      ) {
        if (action) {
          action();
        }
      }
    }

    document.addEventListener("click", detectOutsideClick, true);

    return () =>
      document.removeEventListener("click", detectOutsideClick, true);
  }, [elementRef, action]);
}

export default useOutsideClick;
