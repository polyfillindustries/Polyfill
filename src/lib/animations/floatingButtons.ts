// Animation timing constants
export const ANIMATION_TIMINGS = {
  phone: {
    morphStart: 3000,
    morphComplete: 4200,
  },
  whatsapp: {
    morphStart: 2000,
    morphComplete: 3200,
  },
} as const;

// Animation durations
export const DURATIONS = {
  morph: 0.8,
  fade: 0.4,
  tooltip: 0.2,
  wiggle: 1.5,
} as const;

// Easing curves
export const EASING = {
  morph: [0.43, 0.13, 0.23, 0.96] as const,
};

// Keyframes
export const KEYFRAMES = {
  wiggle: [0, 14, -8, 14, -4, 10, 0],
};

// Button dimensions
export const BUTTON_SIZE = 56;

// Morphing button variants
export const getMorphingButtonVariants = (
  color: string,
  borderColor: string,
  backgroundColor: string
) => ({
  morphing: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: '50%',
    backgroundColor: color,
  },
  tooltip: {
    width: 'auto',
    height: 'auto',
    borderRadius: '1rem',
    backgroundColor: backgroundColor,
    border: `2px solid ${borderColor}`,
  },
  complete: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: '50%',
    backgroundColor: color,
  },
});

// Tooltip variants
export const tooltipVariants = {
  hidden: { opacity: 0, x: 10 },
  visible: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

// Content fade variants
export const contentFadeVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};

// Icon fade variants
export const iconFadeVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0.5 },
};
