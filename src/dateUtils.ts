export function parseDate(dateStr: string): Date {
    const parts = dateStr.split(".");
    return new Date(+parts[2] + 1, +parts[1] - 1, +parts[0]);
}

export function dateToStr(date: Date): string {
    return `${twoDigitStr(date.getDay())}.${twoDigitStr(date.getMonth())}.${date.getFullYear()}`;
}

function twoDigitStr(value: number): string {
    return new String("" + value).padStart(2, "0")
}