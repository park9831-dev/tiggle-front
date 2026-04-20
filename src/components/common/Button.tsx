import React from 'react';
import { cn } from '@/src/lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  children?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const variants = {
      primary: 'bg-[#b9c8de] text-[#334153] hover:bg-[#c6d6ec] shadow-lg shadow-[#b9c8de]/5',
      secondary: 'bg-[#2d3c51] text-[#dee5ff] hover:bg-[#39485a]',
      ghost: 'bg-transparent text-[#dee5ff]/60 hover:bg-[#002867]/30 hover:text-[#dee5ff]',
      outline: 'bg-transparent border border-[#2b4680]/30 text-[#dee5ff] hover:bg-[#002867]/20',
      danger: 'bg-[#7f2927]/20 border border-[#bb5551]/30 text-[#ee7d77] hover:bg-[#7f2927]/40',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-xs',
      md: 'px-6 py-3 text-sm',
      lg: 'px-8 py-4 text-base',
      icon: 'p-2 rounded-full',
    };

    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-lg font-bold transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
