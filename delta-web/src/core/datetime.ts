import moment from 'moment';

export function localDate(value: string): string {
    return moment(value).format('YYYY-MM-DD');
}

export function localDateTime(value: string): string {
    return moment(value).format('YYYY-MM-DD HH:mm:ss');
}

export function localDateTimeShort(value: string): string {
    return moment(value).format('MM-DD HH:mm:ss');
}

export function localDateTimeMicro(value: string): string {

    return moment(value).format('YYYY-MM-DD HH:mm:ss.SSS');
}
