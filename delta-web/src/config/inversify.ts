import { Container, interfaces } from "inversify";
import Http from '../core/http';
import AuthStore from '../core/authStore';

import AssetStore from '../asset/store';
import AssetRepository from '../asset/repository';
import EncryptionKeyStore from '../encryptionKey/store';
import EncryptionKeyRepository from '../encryptionKey/repository';
import HomeStore from '../home/store';
import HomeRepository from '../home/repository';
import AssetTypeStore from '../assetType/store';
import AssetTypeRepository from '../assetType/repository';
import JobStore from '../job/store';
import JobRepository from '../job/repository';
import JobTypeStore from '../jobType/store';
import JobTypeRepository from '../jobType/repository';
import MonitoringStore from '../monitoring/store';
import MonitoringRepository from '../monitoring/repository';

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
    singleton(AssetTypeStore);
    singleton(AssetTypeRepository);
    singleton(JobStore);
    singleton(JobRepository);
    singleton(JobTypeStore);
    singleton(JobTypeRepository);
    singleton(MonitoringStore);
    singleton(MonitoringRepository);
}

export default AppContainer;
