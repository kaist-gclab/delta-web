import http from './http';

export default (url: string) => http.get(url).then(res => res.data);
