import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  style: string;
  index: number;
}

export default function FadeUp({ children, style, index }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 180,
        damping: 12,
        delay: 0.085 * index,
      },
    }),
  };

  return (
    <motion.div
      className={style}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      custom={index}
      viewport={{ once: true, margin: "-275px" }}
    >
      {children}
    </motion.div>
  );
}
