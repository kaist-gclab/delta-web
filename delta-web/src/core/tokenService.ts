// import { provideSingleton } from '../container';
import { injectable } from 'inversify';

@injectable()
export default class TokenService {
    getToken() {
        return 'TEST_TOKEN';
    }
}
