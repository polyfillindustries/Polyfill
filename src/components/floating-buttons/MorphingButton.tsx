import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { getMorphingButtonVariants, DURATIONS, EASING, KEYFRAMES } from '@/lib/animations/floatingButtons';
import type { MorphingButtonProps } from '@/types';

export function MorphingButton({
  showTooltip,
  isMorphing,
  animationComplete,
  // isHovered,
  onMouseEnter,
  onMouseLeave,
  // tooltipText,
  emoji,
  label,
  icon,
  color,
  borderColor,
  backgroundColor,
  textColor,
  onClick,
}: MorphingButtonProps) {
  const variants = getMorphingButtonVariants(color, borderColor, backgroundColor);
  
  const getAnimateState = () => {
    if (isMorphing) return variants.morphing;
    if (showTooltip) return variants.tooltip;
    return variants.complete;
  };

  return (
    <motion.div
      layout
      initial={false}
      animate={getAnimateState()}
      transition={{
        duration: DURATIONS.morph,
        ease: EASING.morph,
        layout: { duration: DURATIONS.morph }
      }}
      onMouseEnter={() => animationComplete && onMouseEnter()}
      onMouseLeave={onMouseLeave}
      className="flex items-center justify-center shadow-xl cursor-pointer overflow-hidden relative"
    >
      {/* Hover tooltip - Commented out for now */}
      {/* <AnimatePresence>
        {animationComplete && isHovered && <Tooltip text={tooltipText} />}
      </AnimatePresence> */}

      {/* Text content - visible before morphing */}
      <motion.div
        animate={{
          opacity: showTooltip && !isMorphing ? 1 : 0,
          scale: showTooltip && !isMorphing ? 1 : 0.5,
        }}
        transition={{ duration: DURATIONS.fade }}
        className="flex items-center gap-3 px-5 py-3"
      >
        <motion.span
          animate={{ rotate: KEYFRAMES.wiggle }}
          transition={{ 
            duration: DURATIONS.wiggle, 
            repeat: showTooltip && !isMorphing ? Infinity : 0, 
            repeatDelay: 2 
          }}
          className="text-xl"
        >
          {emoji}
        </motion.span>
        <p className={`text-sm font-semibold tracking-wide whitespace-nowrap ${textColor}`}>
          {label}
        </p>
      </motion.div>

      {/* Icon button - visible after morphing */}
      <motion.button
        onClick={onClick}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: !showTooltip || isMorphing ? 1 : 0,
          scale: !showTooltip || isMorphing ? 1 : 0.5,
        }}
        transition={{ duration: DURATIONS.fade, delay: isMorphing ? 0.3 : 0 }}
        whileHover={animationComplete ? { scale: 1.1, rotate: 5 } : {}}
        whileTap={{ scale: 0.95 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        {icon}
      </motion.button>
    </motion.div>
  );
}
