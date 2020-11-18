import Http from '../core/http';
import { inject, injectable } from 'inversify';
import { Stats } from './types';

@injectable()
export default class DashboardRepository {
    @inject(Http)
    private http!: Http;

    async fetchStats(): Promise<Stats[]> {
        const response = await this.http.get('stats');
        return response.data;
    }
}
