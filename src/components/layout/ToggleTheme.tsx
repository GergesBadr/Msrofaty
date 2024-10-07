import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi2";
import { AnimatePresence, motion } from "framer-motion";
import { toggleTheme } from "../../app/features/userSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

export default function ToggleTheme() {
  const dispatch = useAppDispatch();
  const currentTheme = useAppSelector((state) => state.user.userInfo.theme);
  const isDarkMode = currentTheme === "dark";

  const themeVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  return (
    <AnimatePresence mode="popLayout" initial={false}>
      <button
        onClick={() => dispatch(toggleTheme())}
        aria-label={isDarkMode ? "تعطيل الوضع الداكن" : "تفعيل الوضع الداكن"}
        className="block h-10 rounded-xl bg-indigo-600 px-6 py-1"
      >
        <motion.span
          key={isDarkMode ? "dark" : "light"}
          variants={themeVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ type: "spring", stiffness: 75 }}
          className="block"
        >
          {isDarkMode ? (
            <HiOutlineSun className="size-6 text-white" />
          ) : (
            <HiOutlineMoon className="size-6 text-white" />
          )}
        </motion.span>
      </button>
    </AnimatePresence>
  );
}
