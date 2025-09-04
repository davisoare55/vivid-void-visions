import React, { useEffect, useRef, useState, ReactNode, memo, Children, cloneElement, isValidElement } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

interface ScrollRevealSectionProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

const ScrollRevealSection: React.FC<ScrollRevealSectionProps> = ({ 
  children, 
  className = '',
  staggerDelay = 100 
}) => {
  const { elementRef, isVisible } = useScrollReveal();

  const childrenArray = Children.toArray(children);

  return (
    <div ref={elementRef} className={className}>
      {childrenArray.map((child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child, {
            ...child.props,
            key: index,
            className: `${child.props.className || ''} transition-all duration-1200 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`,
            style: { 
              ...child.props.style,
              transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
            }
          });
        }
        return (
          <div
            key={index}
            className={`transition-all duration-1200 ease-out ${
              isVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
            style={{ 
              transitionDelay: isVisible ? `${index * staggerDelay}ms` : '0ms'
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default memo(ScrollRevealSection);
