import Http from '../core/http';
import { inject, injectable } from 'inversify';

@injectable()
export default class MonitoringRepository {
    private http = Http;

    async getStats(): Promise<any[]> {
        const response = await this.http.get('api/1/monitoring');
        return response.data;
    }
}
