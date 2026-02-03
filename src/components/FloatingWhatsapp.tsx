"use client";
import React from "react";
import { useSequentialMorphAnimation } from "@/hooks/useSequentialMorphAnimation";
import { PhoneButton } from "./floating-buttons/PhoneButton";
import { WhatsAppButton } from "./floating-buttons/WhatsAppButton";

const FloatingWhatsapp = () => {
  const {
    showPhoneTooltip,
    isPhoneMorphing,
    phoneAnimationComplete,
    showWhatsappTooltip,
    isWhatsappMorphing,
    whatsappAnimationComplete,
  } = useSequentialMorphAnimation();

  return (
    <div className="fixed bottom-8 lg:bottom-8 md:right-5 right-2 z-250 flex flex-col items-end space-y-3">
      {/* Phone button with morphing animation */}
      <PhoneButton
        showTooltip={showPhoneTooltip}
        isMorphing={isPhoneMorphing}
        animationComplete={phoneAnimationComplete}
      />

      {/* WhatsApp button (appears after phone animation completes) */}
      {phoneAnimationComplete && (
        <WhatsAppButton
          showTooltip={showWhatsappTooltip}
          isMorphing={isWhatsappMorphing}
          animationComplete={whatsappAnimationComplete}
        />
      )}
    </div>
  );
};

export default FloatingWhatsapp;
