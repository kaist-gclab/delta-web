import { Container, interfaces } from "inversify";
import Http from '../core/http';
import AssetRepository from '../asset/repository';
import AssetStore from '../asset/store';
import EncryptionKeyRepository from '../encryptionKey/repository';
import EncryptionKeyStore from '../encryptionKey/store';
import DashboardRepository from '../home/repository';
import DashboardStore from '../home/store';
import AuthStore from '../core/authStore';

export const AppContainer = new Container();
configure(AppContainer);

function configure(container: Container) {
    function singleton<T>(type: interfaces.ServiceIdentifier<T>) {
        container.bind(type).toSelf().inSingletonScope();
    }
    singleton(Http);
    singleton(AuthStore);

    singleton(AssetStore);
    singleton(AssetRepository);
    singleton(EncryptionKeyStore);
    singleton(EncryptionKeyRepository);
    singleton(DashboardStore);
    singleton(DashboardRepository);
}

export default AppContainer;
