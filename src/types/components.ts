// Animation and UI component props
export interface AnimationState {
  // Phone button states
  showPhoneTooltip: boolean;
  isPhoneMorphing: boolean;
  phoneAnimationComplete: boolean;
  
  // WhatsApp button states
  showWhatsappTooltip: boolean;
  isWhatsappMorphing: boolean;
  whatsappAnimationComplete: boolean;
}

export interface MorphingButtonProps {
  // Animation state
  showTooltip: boolean;
  isMorphing: boolean;
  animationComplete: boolean;
  
  // Hover state
  isHovered: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  
  // Content
  tooltipText: string;
  emoji: string;
  label: string;
  icon: React.ReactNode;
  
  // Styling
  color: string;
  borderColor: string;
  backgroundColor: string;
  textColor: string;
  
  // Actions
  onClick: () => void;
}

export interface PhoneButtonProps {
  showTooltip: boolean;
  isMorphing: boolean;
  animationComplete: boolean;
}

export interface WhatsAppButtonProps {
  showTooltip: boolean;
  isMorphing: boolean;
  animationComplete: boolean;
}

export interface TooltipProps {
  text: string;
}

export interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

export type Direction = "TOP" | "LEFT" | "BOTTOM" | "RIGHT";
