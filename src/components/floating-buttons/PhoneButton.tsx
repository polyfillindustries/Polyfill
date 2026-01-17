import { useState } from 'react';
import { Phone } from 'lucide-react';
import { MorphingButton } from './MorphingButton';
import type { PhoneButtonProps } from '@/types';

export function PhoneButton({ showTooltip, isMorphing, animationComplete }: PhoneButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.location.href = "tel:+919810355151";
  };

  return (
    <div aria-label="Call us">
      <MorphingButton
        showTooltip={showTooltip}
        isMorphing={isMorphing}
        animationComplete={animationComplete}
        isHovered={isHovered}
        onMouseEnter={() => animationComplete && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tooltipText="Call us"
        emoji="📞"
        label="Call us now!"
        icon={<Phone className="w-7 h-7 text-white" />}
        color="rgb(37, 99, 235)"
        borderColor="rgb(37, 99, 235, 0.3)"
        backgroundColor="rgb(31, 41, 55)"
        textColor="text-white"
        onClick={handleClick}
      />
    </div>
  );
}
