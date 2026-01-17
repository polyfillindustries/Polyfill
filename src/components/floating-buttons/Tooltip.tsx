import { motion } from 'framer-motion';
import { tooltipVariants } from '@/lib/animations/floatingButtons';

interface TooltipProps {
  text: string;
}

export function Tooltip({ text }: TooltipProps) {
  return (
    <motion.span
      variants={tooltipVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      transition={{ duration: 0.2 }}
      className="absolute right-16 bg-black text-white text-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap z-10"
    >
      {text}
    </motion.span>
  );
}
