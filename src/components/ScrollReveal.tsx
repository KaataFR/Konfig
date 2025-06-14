
import React from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = '',
  as: Component = 'div'
}) => {
  const { ref, animationClass, style } = useScrollReveal({ 
    delay, 
    duration, 
    threshold 
  });

  return React.createElement(
    Component,
    {
      ref,
      className: `${animationClass} ${className}`,
      style
    },
    children
  );
};

export default ScrollReveal;
