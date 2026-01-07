import React, { JSX } from 'react';

interface AnimatedHeadingProps {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  variant?: 'gradient-underline' | 'gradient-bg' | 'shine' | 'glow';
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({
  children,
  level = 1,
  className = '',
  variant = 'gradient-underline'
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  
  const baseStyles = 'font-bold tracking-tight transition-all duration-300';
  
  const sizeStyles = {
    1: 'text-5xl md:text-6xl lg:text-7xl',
    2: 'text-4xl md:text-5xl lg:text-6xl',
    3: 'text-3xl md:text-4xl lg:text-5xl',
    4: 'text-2xl md:text-3xl lg:text-4xl',
    5: 'text-xl md:text-2xl lg:text-3xl',
    6: 'text-lg md:text-xl lg:text-2xl'
  };
  
  const variantStyles = {
    'gradient-underline': 'relative inline-block hover:scale-[1.02] cursor-default text-gray-900',
    'gradient-bg': 'relative inline-block px-6 py-2 cursor-default overflow-hidden text-white',
    'shine': 'relative inline-block cursor-default overflow-hidden text-gray-900',
    'glow': 'relative inline-block cursor-default hover:scale-[1.02] text-gray-900'
  };
  
  return (
    <>
      <style>{`
        @keyframes gradientSlide {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shine {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        @keyframes glow {
          0%, 100% { 
            filter: drop-shadow(0 0 15px rgba(3, 135, 255, 0.4));
          }
          50% { 
            filter: drop-shadow(0 0 30px rgba(125, 249, 255, 0.6));
          }
        }
        
        .gradient-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 100%;
          height: 5px;
          background: linear-gradient(90deg, #154A7E, #0387FF, #7DF9FF, #0086FF, #154A7E);
          background-size: 200% 100%;
          animation: gradientSlide 4s ease infinite;
          border-radius: 3px;
        }
        
        .gradient-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, #154A7E, #0387FF, #7DF9FF, #0086FF, #154A7E);
          background-size: 200% 100%;
          animation: gradientSlide 4s ease infinite;
          z-index: -1;
          border-radius: 12px;
          opacity: 0.9;
          transition: opacity 0.3s;
        }
        
        .gradient-bg:hover::before {
          opacity: 1;
        }
        
        .shine::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(3, 135, 255, 0.2), rgba(125, 249, 255, 0.3), transparent);
          animation: shine 4s ease-in-out infinite;
        }
        
        .glow {
          animation: glow 4s ease-in-out infinite;
        }
      `}</style>
      
      <Tag 
        className={`${baseStyles} ${sizeStyles[level]} ${variantStyles[variant]} ${variant} ${className}`}
      >
        {children}
      </Tag>
    </>
  );
};

export default AnimatedHeading;
