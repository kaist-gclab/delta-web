import Http from '../core/http';
import { inject, injectable } from 'inversify';

@injectable()
export default class ProcessorNodeRepository {
    @inject(Http)
    private http!: Http;
}
