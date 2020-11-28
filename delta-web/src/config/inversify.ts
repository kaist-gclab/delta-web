import { Container, interfaces } from "inversify";
import Http from '../core/http';
import AssetRepository from '../asset/repository';
import AssetStore from '../asset/store';
import EncryptionKeyRepository from '../encryptionKey/repository';
import EncryptionKeyStore from '../encryptionKey/store';
import AuthStore from '../core/authStore';
import HomeRepository from '../home/repository';
import HomeStore from '../home/store';

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
    singleton(HomeStore);
    singleton(HomeRepository);
}

export default AppContainer;
