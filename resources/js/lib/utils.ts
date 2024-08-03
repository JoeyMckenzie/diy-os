import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function omit<T, K extends keyof T>(data: T, keys: K[]): Omit<T, K> {
    const result = { ...data };

    for (const key of keys) {
        delete result[key];
    }

    return result as Omit<T, K>;
}
