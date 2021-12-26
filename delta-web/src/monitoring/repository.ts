import Http from '../core/http';
import { inject, injectable } from 'inversify';

@injectable()
export default class MonitoringRepository {
    @inject(Http)
    private http!: Http;

    async getStats(): Promise<unknown[]> {
        const response = await this.http.get('monitoring');
        return response.data;
    }
}
