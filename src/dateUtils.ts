export function parseDate(dateStr: string): Date {
    const parts = dateStr.split(".");
    return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
}

export function dateToStr(date: Date): string {
    return `${twoDigitStr(date.getDate())}.${twoDigitStr(date.getMonth() + 1)}.${date.getFullYear()}`;
}

function twoDigitStr(value: number): string {
    return new String("" + value).padStart(2, "0")
}