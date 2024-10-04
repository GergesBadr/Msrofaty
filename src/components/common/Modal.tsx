import React, { createContext, useContext, useRef, useState } from "react";
import { HiOutlineXMark } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";

import useCloseWithEsc from "../../hooks/useCloseWithEsc";
import useFocusTrap from "../../hooks/useFocusTrap";
import useOutsideClick from "../../hooks/useOutsideClick";

interface ModalContext {
  currModalId: string;
  openModal: (id: string) => void;
  closeModal: () => void;
}

interface Children {
  children: React.ReactNode;
}

interface Id {
  id: string;
}

interface WindowProps extends Children, Id {
  a11yName: string;
}

interface OpenProps extends Children, Id {
  widthIsFit?: boolean;
}

const ModalContext = createContext<ModalContext>({
  currModalId: "",
  closeModal: () => {},
  openModal: () => {},
});

function Modal({ children }: Children) {
  const [currModalId, setCurrModalId] = useState("");

  function openModal(id: string) {
    setCurrModalId(id);
  }

  function closeModal() {
    setCurrModalId("");
  }

  return (
    <ModalContext.Provider value={{ currModalId, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}

function BackDrop({ children }: Children) {
  return (
    <motion.div
      className="fixed left-0 top-0 z-10 flex h-full w-full items-center justify-center px-4 backdrop-blur-[4px]"
      // Animations
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}

function Window({ children, id, a11yName }: WindowProps) {
  const { currModalId, closeModal } = useContext(ModalContext);
  const modalRef = useRef(null);

  // Close modal on esc key and on outside click
  useCloseWithEsc(currModalId.length > 0 && true, closeModal);
  useOutsideClick(modalRef, closeModal);

  // Focus trap the modal
  useFocusTrap(currModalId.length > 0 && true, "modal-window");

  const variants = {
    hidden: { y: -1000, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: 1000 },
  };

  return (
    <AnimatePresence>
      {currModalId === id && (
        <BackDrop>
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-label={a11yName}
            id="modal-window"
            className="relative max-h-[90%] w-[clamp(50%,900px,100%)] overflow-y-auto rounded-lg bg-white px-7 pb-7 pt-14 shadow-md lg:px-10 lg:pb-10"
            // Animations
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "spring", damping: 25, stiffness: 175 }}
          >
            <button
              aria-label="Close modal"
              onClick={closeModal}
              className="absolute right-4 top-4 rounded-lg p-1 duration-200 hover:bg-indigo-200"
            >
              <HiOutlineXMark className="size-7" />
            </button>

            {children}
          </motion.div>
        </BackDrop>
      )}
    </AnimatePresence>
  );
}

function Open({ children, id, widthIsFit = false }: OpenProps) {
  const { openModal } = useContext(ModalContext);

  return (
    <div className={widthIsFit ? "w-fit" : ""} onClick={() => openModal(id)}>
      {children}
    </div>
  );
}

Modal.Window = Window;
Modal.Open = Open;

export default Modal;
