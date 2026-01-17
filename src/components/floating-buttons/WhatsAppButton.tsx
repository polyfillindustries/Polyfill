import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { MorphingButton } from './MorphingButton';
import type { WhatsAppButtonProps } from '@/types';

export function WhatsAppButton({ showTooltip, isMorphing, animationComplete }: WhatsAppButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open("/api/whatsapp", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      aria-label="Chat with us on WhatsApp"
    >
      <MorphingButton
        showTooltip={showTooltip}
        isMorphing={isMorphing}
        animationComplete={animationComplete}
        isHovered={isHovered}
        onMouseEnter={() => animationComplete && setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        tooltipText="Chat with us"
        emoji="💬"
        label="Chat on WhatsApp!"
        icon={<Image src="/social.png" alt="WhatsApp" width={33} height={33} />}
        color="rgb(22, 163, 74)"
        borderColor="rgb(22, 163, 74, 0.3)"
        backgroundColor="rgb(255, 255, 255)"
        textColor="text-green-600"
        onClick={handleClick}
      />
    </motion.div>
  );
}
