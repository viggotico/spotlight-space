import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function sanatizeContent(content: string) {
    return content.replaceAll('<p></p>', '<br>');
}
