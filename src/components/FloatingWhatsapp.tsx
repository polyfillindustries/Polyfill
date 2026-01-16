"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const FloatingWhatsapp = () => {
  const [isHovered, setIsHovered] = useState(false);

  // Use the actual sandbox number here
  // const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+918810599194";

  // const cleanedNumber = phoneNumber.replace(/\D/g, "");
  
  const handleClick = () => {
    // Opens WhatsApp chat with prefilled text
    window.open("/api/whatsapp", "_blank");
  };

  return (
    <div
      className="fixed bottom-8 lg:bottom-8 md:right-5 right-2 md:pb-0 pb-1 z-250 flex items-center space-x-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Tooltip shown on hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.2 }}
            className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow-md whitespace-nowrap"
          >
            Chat with us
          </motion.span>
        )}
      </AnimatePresence>

      {/* WhatsApp button */}
      <motion.button
        onClick={handleClick}
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.95 }}
        className="bg-green-600 p-3 rounded-full shadow-xl hover:bg-green-700 transition-colors flex items-center justify-center"
      >
        <Image
          src="/social.png"
          alt="WhatsApp"
          width={33}
          height={33}
        />
      </motion.button>
    </div>
  );
};

export default FloatingWhatsapp;
