import React from 'react';
import { cn } from '@/src/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'low' | 'high' | 'highest' | 'glass';
}

export const Card: React.FC<CardProps> = ({ children, className, variant = 'default' }) => {
  const variants = {
    default: 'bg-[#05183c]',
    low: 'bg-[#06122d]',
    high: 'bg-[#031d4b]',
    highest: 'bg-[#00225a]',
    glass: 'bg-[#060e20]/80 backdrop-blur-xl border border-[#2b4680]/15',
  };

  return (
    <div className={cn('rounded-2xl overflow-hidden', variants[variant], className)}>
      {children}
    </div>
  );
};
