import { Container, interfaces } from "inversify";
import Http from '../core/http';
import AssetRepository from '../asset/repository';
import AssetStore from '../asset/store';
import EncryptionKeyRepository from '../encryptionKey/repository';
import EncryptionKeyStore from '../encryptionKey/store';
import TokenService from '../core/tokenService';
import DashboardRepository from '../home/repository';
import DashboardStore from '../home/store';

export const AppContainer = new Container();
configure(AppContainer);

function configure(container: Container) {
    function singleton<T>(type: interfaces.ServiceIdentifier<T>) {
        container.bind(type).toSelf().inSingletonScope();
    }
    singleton(Http);
    singleton(TokenService);

    singleton(AssetStore);
    singleton(AssetRepository);
    singleton(EncryptionKeyStore);
    singleton(EncryptionKeyRepository);
    singleton(DashboardStore);
    singleton(DashboardRepository);
}

export default AppContainer;
