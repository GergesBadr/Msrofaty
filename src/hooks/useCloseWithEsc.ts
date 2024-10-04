import { useEffect } from "react";

export default function useCloseWithEsc(
  contentIsOpen: boolean,
  action: () => void,
) {
  useEffect(() => {
    function closeOnEsc(e: KeyboardEvent) {
      if (e.key === "Escape") {
        action();
      }
    }

    if (contentIsOpen) {
      document.addEventListener("keydown", closeOnEsc);
    }

    return () => {
      document.removeEventListener("keydown", closeOnEsc);
    };
  }, [contentIsOpen, action]);
}
