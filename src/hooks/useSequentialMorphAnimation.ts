import { useState, useEffect } from 'react';
import { ANIMATION_TIMINGS } from '@/lib/animations/floatingButtons';
import type { AnimationState } from '@/types';

export function useSequentialMorphAnimation() {
  const [state, setState] = useState<AnimationState>({
    showPhoneTooltip: true,
    isPhoneMorphing: false,
    phoneAnimationComplete: false,
    showWhatsappTooltip: false,
    isWhatsappMorphing: false,
    whatsappAnimationComplete: false,
  });

  // Phone button animation sequence
  useEffect(() => {
    const phoneMorphTimer = setTimeout(() => {
      setState(prev => ({ ...prev, isPhoneMorphing: true }));
    }, ANIMATION_TIMINGS.phone.morphStart);

    const phoneCompleteTimer = setTimeout(() => {
      setState(prev => ({
        ...prev,
        showPhoneTooltip: false,
        isPhoneMorphing: false,
        phoneAnimationComplete: true,
        showWhatsappTooltip: true,
      }));
    }, ANIMATION_TIMINGS.phone.morphComplete);

    return () => {
      clearTimeout(phoneMorphTimer);
      clearTimeout(phoneCompleteTimer);
    };
  }, []);

  // WhatsApp button animation sequence (starts after phone completes)
  useEffect(() => {
    if (state.phoneAnimationComplete) {
      const whatsappMorphTimer = setTimeout(() => {
        setState(prev => ({ ...prev, isWhatsappMorphing: true }));
      }, ANIMATION_TIMINGS.whatsapp.morphStart);

      const whatsappCompleteTimer = setTimeout(() => {
        setState(prev => ({
          ...prev,
          showWhatsappTooltip: false,
          isWhatsappMorphing: false,
          whatsappAnimationComplete: true,
        }));
      }, ANIMATION_TIMINGS.whatsapp.morphComplete);

      return () => {
        clearTimeout(whatsappMorphTimer);
        clearTimeout(whatsappCompleteTimer);
      };
    }
  }, [state.phoneAnimationComplete]);

  return state;
}
