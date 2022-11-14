import Http from '../core/http';

class MonitoringRepository {
    private http = Http;

    async getStats(): Promise<any[]> {
        const response = await this.http.get('api/1/monitoring');
        return response.data;
    }
}

export default new MonitoringRepository();
