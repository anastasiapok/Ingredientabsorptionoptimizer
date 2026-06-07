import { useState, useRef, useEffect } from 'react';
import { nutrientDescriptions } from '../data/nutrientDescriptions';

interface NutrientPopoverProps {
  nutrient: string;
  children: React.ReactNode;
  className?: string;
}

export function NutrientPopover({ nutrient, children, className = '' }: NutrientPopoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0, align: 'center' as 'left' | 'center' | 'right' });
  const triggerRef = useRef<HTMLDivElement>(null);
  const description = nutrientDescriptions[nutrient];

  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      const popoverWidth = 320; // 80 * 4 = w-80
      const viewportWidth = window.innerWidth;
      const spaceLeft = rect.left;
      const spaceRight = viewportWidth - rect.right;

      let align: 'left' | 'center' | 'right' = 'center';
      let left = rect.left + rect.width / 2;

      // Check if centered popover would overflow
      if (left - popoverWidth / 2 < 16) {
        // Not enough space on left, align to left edge
        align = 'left';
        left = Math.max(16, rect.left);
      } else if (left + popoverWidth / 2 > viewportWidth - 16) {
        // Not enough space on right, align to right edge
        align = 'right';
        left = Math.min(viewportWidth - 16, rect.right);
      }

      setPosition({
        top: rect.top - 8,
        left,
        align
      });
    }
  }, [isOpen]);

  if (!description) {
    return <>{children}</>;
  }

  return (
    <div ref={triggerRef} className="relative inline-block">
      <div
        onClick={(e) => {
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className={`cursor-pointer ${className}`}
      >
        {children}
      </div>

      {isOpen && (
        <>
          {/* Backdrop to close on click outside */}
          <div
            className="fixed inset-0 z-40"
            onClick={(e) => {
              e.stopPropagation();
              setIsOpen(false);
            }}
          />

          {/* Popover content - fixed positioning */}
          <div
            className="fixed z-50 w-80 max-w-[90vw] p-3 rounded-lg bg-card border border-border shadow-xl animate-fadeIn"
            style={{
              top: position.top,
              left: position.left,
              transform: position.align === 'center'
                ? 'translate(-50%, -100%)'
                : position.align === 'left'
                ? 'translateY(-100%)'
                : 'translate(-100%, -100%)',
              marginTop: '-8px'
            }}
          >
            <div
              className="absolute -bottom-1 w-2 h-2 bg-card border-r border-b border-border rotate-45"
              style={{
                left: position.align === 'center'
                  ? '50%'
                  : position.align === 'left'
                  ? '16px'
                  : 'calc(100% - 16px)',
                transform: position.align === 'center' ? 'translateX(-50%)' : 'none'
              }}
            />
            <div className="flex items-start justify-between gap-2 mb-2">
              <p className="text-xs font-semibold text-foreground flex-1">{nutrient}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsOpen(false);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors text-lg leading-none"
              >
                ×
              </button>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
          </div>
        </>
      )}
    </div>
  );
}
