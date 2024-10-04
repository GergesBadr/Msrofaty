import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  style: string;
  index: number;
}

export default function OpacityIn({ children, style, index }: Props) {
  const variants = {
    hidden: {
      opacity: 0,
      filter: "blur(20px)",
    },
    visible: (index: number) => ({
      opacity: 1,
      filter: "blur(0px)",
      transition: { type: "spring", damping: 20, delay: 0.09 * index },
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
