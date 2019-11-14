import { Container, interfaces } from 'inversify';
import Http from './core/http';
import TokenService from './core/tokenService';
import AssetStore from './asset/store';
import AssetRepository from './asset/repository';

export const AppContainer = new Container();
configure(AppContainer);

function configure(c: Container) {
    function singleton<T>(type: interfaces.ServiceIdentifier<T>) {
        c.bind(type).toSelf().inSingletonScope();
    }
    singleton(Http);
    singleton(TokenService);
    singleton(AssetStore);
    singleton(AssetRepository);
}
