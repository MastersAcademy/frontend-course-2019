export const isValid = {
    minLength: ({ text, length }: { text: string, length: number }): boolean => text.length >= length,
    maxLength: ({ text, length }: { text: string, length: number }): boolean => text.length <= length,
    pattern: ({ text, pattern }: { text: string, pattern: string }): boolean => text.includes(pattern),
    email: ({ text }: { text: string }): boolean => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/.test(text),
    phone: ({ text }: {text: string }): boolean => /^\+\d{2}[(]\d{3}[)]\d{3}-\d{2}-\d{2}$/.test(text),
    numberRange: ({ text, min, max }: { text: string | number, min: number, max: number}): boolean => Number(text) >= min && Number(text) <= max,
};
