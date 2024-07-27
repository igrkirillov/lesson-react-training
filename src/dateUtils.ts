export function parseDate(dateStr: string): Date {
    const parts = dateStr.split(".");
    return new Date(+parts[2], +parts[1] - 1, +parts[0]);
}

export function dateToStr(date: Date): string {
    return `${new String(date.getDay()).padStart(2, "0")}.${new String(date.getMonth() + 1).padStart(2, "0")}.${date.getFullYear()}`;
}