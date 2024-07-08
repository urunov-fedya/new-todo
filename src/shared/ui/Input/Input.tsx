import { KeyboardEventHandler, forwardRef } from 'react';
import type { TInputProps } from '.';
import cls from './Input.module.scss';
import { cn } from '@/shared';

export const Input = forwardRef<HTMLInputElement, TInputProps>(
  (
    { id, label, variant = 'default', className, onKeyDown, onEnter, ...props },
    ref,
  ) => {
    const handlePressEnter: KeyboardEventHandler<HTMLInputElement> = (
      event,
    ) => {
      onKeyDown && onKeyDown(event);
      if (event.key === 'Enter' && onEnter) {
        onEnter(String(props.value));
      }
    };

    return (
      <div className={className}>
        {label ? <label htmlFor={id}>{label}</label> : null}
        <input
          className={cn(cls.input, [cls?.[variant] ? cls[variant] : ''])}
          ref={ref}
          id={id}
          onKeyDown={handlePressEnter}
          {...props}
        />
      </div>
    );
  },
);