import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { Button } from './Button';
import { cn } from '@/src/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  children?: React.ReactNode;
  footer?: React.ReactNode;
  icon?: React.ReactNode;
  variant?: 'info' | 'warning' | 'danger';
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  icon,
  variant = 'info',
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-md bg-[#031d4b] rounded-2xl shadow-2xl border border-[#2b4680]/30 overflow-hidden"
          >
            <div className="p-8">
              <div className="flex items-start gap-5">
                {icon && (
                  <div className={cn(
                    "mt-1 w-12 h-12 rounded-full flex items-center justify-center shrink-0 border",
                    variant === 'info' && "bg-[#002867] text-[#47c4ff] border-[#47c4ff]/20",
                    variant === 'warning' && "bg-[#7f2927]/20 text-[#ee7d77] border-[#bb5551]/20",
                    variant === 'danger' && "bg-[#7f2927] text-white border-red-500/50"
                  )}>
                    {icon}
                  </div>
                )}
                <div className="space-y-2 flex-1">
                  <h2 className="text-xl font-bold tracking-tight text-[#dee5ff] font-headline">
                    {title}
                  </h2>
                  {description && (
                    <p className="text-[#91aaeb] leading-relaxed text-sm">
                      {description}
                    </p>
                  )}
                  {children}
                </div>
              </div>
              
              <div className="mt-8 flex justify-end gap-3">
                {footer || (
                  <Button onClick={onClose} size="md">
                    Understood
                  </Button>
                )}
              </div>
            </div>
            <div className={cn(
              "h-1 bg-gradient-to-r from-transparent via-transparent to-transparent",
              variant === 'info' && "from-[#47c4ff]/40",
              variant === 'warning' && "from-[#ee7d77]/40"
            )} />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
