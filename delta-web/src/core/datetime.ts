import dayjs, { Dayjs } from 'dayjs';
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export function localDate(value: string | Dayjs): string {
    return dayjs(value).format('YYYY-MM-DD');
}

export function localDateShort(value: string | Dayjs): string {
    return dayjs(value).format('MM/DD');
}

export function localDateTime(value: string | Dayjs): string {
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss');
}

export function localDateTimeUtc(value: string): string {
    return dayjs.utc(value).local().format('YYYY-MM-DD HH:mm:ss');
}

export function localDateTimeShort(value: string | Dayjs): string {
    return dayjs(value).format('MM-DD HH:mm:ss');
}

export function localDateTimeMicro(value: string | Dayjs): string {
    return dayjs(value).format('YYYY-MM-DD HH:mm:ss.SSS');
}

export function localDayShort(value: string | Dayjs): string {
    return '일월화수목금토'[dayjs(value).get('day')];
}
