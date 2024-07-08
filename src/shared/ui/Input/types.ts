import { InputHTMLAttributes } from 'react';

export type TInputVariant = 'default' | 'outline';

export type TInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    variant?: TInputVariant;
    onEnter?: (value: string) => void
}
