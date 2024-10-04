import { useEffect } from "react";

export default function useFocusTrap(modalIsOpen: boolean, modalId: string) {
  useEffect(() => {
    // Only run if the modal is open
    if (modalIsOpen) {
      const modalWindow = document?.getElementById(modalId) as HTMLElement;
      const focusableElements = modalWindow?.querySelectorAll(
        "button, input, select, textarea, a, [href], [tabindex]:not([tabindex='-1'])",
      ) as NodeListOf<HTMLElement>;

      // Handle focus only if there is a focusable elements inside the modal
      if (focusableElements.length > 0) {
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement =
          focusableElements[focusableElements.length - 1];

        // By default put the focus on first element
        firstFocusableElement.focus();

        // Handle last focusable element
        lastFocusableElement.addEventListener("keydown", (e: KeyboardEvent) => {
          if (e.key === "Tab" && !e.shiftKey) {
            e.preventDefault();
            firstFocusableElement.focus();
          }
        });

        // Handle first focusable element
        firstFocusableElement.addEventListener(
          "keydown",
          (e: KeyboardEvent) => {
            if (e.key === "Tab" && e.shiftKey) {
              e.preventDefault();
              lastFocusableElement.focus();
            }
          },
        );
      } else {
        // No focusable elements found, so, just focus the modal itself
        modalWindow.focus();
      }
    }
  }, [modalIsOpen, modalId]);
}
