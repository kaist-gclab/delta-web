import Http from '../core/http';
import { inject, injectable } from 'inversify';

@injectable()
export default class JobTypeRepository {
    @inject(Http)
    private http!: Http;
}
