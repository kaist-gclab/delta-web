import Http from '../core/http';
import { inject, injectable } from 'inversify';

@injectable()
export default class MonitoringRepository {
    private http = Http;

    async getStats(): Promise<any[]> {
        const response = await this.http.get('monitoring');
        return response.data;
    }
}
