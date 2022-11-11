import Http from '../core/http';
import { inject, injectable } from 'inversify';

@injectable()
export default class HomeRepository {
    private http = Http;
}
