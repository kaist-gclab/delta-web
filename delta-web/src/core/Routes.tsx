import { observer } from 'mobx-react-lite';
import { lazy, Suspense } from 'react';
import { Loading } from './Loading';
import { Navigate, Route, Routes as RouterRoutes } from 'react-router';

const AssetListPage = lazy(() => import('../asset/AssetListPage'));
const EncryptionKeyListPage = lazy(() => import('../encryptionKey/EncryptionKeyListPage'));
const AddAssetPage = lazy(() => import('../asset/AddAssetPage'));
const StartPage = lazy(() => import('../home/StartPage'));
const HelpPage = lazy(() => import('../home/HelpPage'));
const UserSettingsPage = lazy(() => import('../home/UserSettingsPage'));
const SystemSettingsPage = lazy(() => import('../home/SystemSettingsPage'));
const AssetDetailPage = lazy(() => import('../asset/AssetDetailPage'));
const AssetViewerPage = lazy(() => import('../asset/AssetViewerPage'));
const AssetTypeListPage = lazy(() => import('../assetType/AssetTypeListPage'));
const AddAssetTypePage = lazy(() => import('../assetType/AddAssetTypePage'));
const AssetTypeDetailPage = lazy(() => import('../assetType/AssetTypeDetailPage'));
const ViewerListPage = lazy(() => import('../viewer/ViewerListPage'));
const AddJobPage = lazy(() => import('../job/AddJobPage'));
const JobListPage = lazy(() => import('../job/JobListPage'));
const JobDetailPage = lazy(() => import('../job/JobDetailPage'));
const JobTypeListPage = lazy(() => import('../jobType/JobTypeListPage'));
const JobTypeDetailPage = lazy(() => import('../jobType/JobTypeDetailPage'));
const ProcessorNodeListPage = lazy(() => import('../processorNode/ProcessorNodeListPage'));
const ProcessorNodeDetailPage = lazy(() => import('../processorNode/ProcessorNodeDetailPage'));
const EncryptionKeyDetailPage = lazy(() => import('../encryptionKey/EncryptionKeyDetailPage'));
const AddEncryptionKeyPage = lazy(() => import('../encryptionKey/AddEncryptionKeyPage'));
const DashboardMonitorPage = lazy(() => import('../monitoring/DashboardMonitorPage'));
const ObjectStorageMonitorPage = lazy(() => import('../monitoring/ObjectStorageMonitorPage'));
const ProcessorNodeMonitorPage = lazy(() => import('../monitoring/ProcessorNodeMonitorPage'));
const JobMonitorPage = lazy(() => import('../monitoring/JobMonitorPage'));

const Routes = () => {
  return <Suspense fallback={<Loading />}>
    <RouterRoutes>
      <Route path="/" element={<Navigate replace to="/start" />} />
      <Route path="/start" element={<StartPage />} />
      <Route path="/help" element={<HelpPage />} />
      <Route path="/settings/user" element={<UserSettingsPage />} />
      <Route path="/settings/system" element={<SystemSettingsPage />} />

      <Route path="/assets/add" element={<AddAssetPage />} />
      <Route path="/assets/list" element={<AssetListPage />} />
      <Route path="/assets/detail/:id?" element={<AssetDetailPage />} />
      <Route path="/assets/viewer" element={<AssetViewerPage />} />

      <Route path="/asset-types/add" element={<AddAssetTypePage />} />
      <Route path="/asset-types/list" element={<AssetTypeListPage />} />
      <Route path="/asset-types/detail/:id?" element={<AssetTypeDetailPage />} />

      <Route path="/viewers/list" element={<ViewerListPage />} />

      <Route path="/jobs/add" element={<AddJobPage />} />
      <Route path="/jobs/list" element={<JobListPage />} />
      <Route path="/jobs/detail/:id?" element={<JobDetailPage />} />

      <Route path="/job-types/list" element={<JobTypeListPage />} />
      <Route path="/job-types/detail/:id?" element={<JobTypeDetailPage />} />

      <Route path="/processor-nodes/list" element={<ProcessorNodeListPage />} />
      <Route path="/processor-nodes/detail/:id?" element={<ProcessorNodeDetailPage />} />

      <Route path="/encryption-keys/add" element={<AddEncryptionKeyPage />} />
      <Route path="/encryption-keys/list" element={<EncryptionKeyListPage />} />
      <Route path="/encryption-keys/detail/:id?" element={<EncryptionKeyDetailPage />} />

      <Route path="/monitoring/dashboard" element={<DashboardMonitorPage />} />
      <Route path="/monitoring/object-storage" element={<ObjectStorageMonitorPage />} />
      <Route path="/monitoring/processor-node" element={<ProcessorNodeMonitorPage />} />
      <Route path="/monitoring/jobs" element={<JobMonitorPage />} />

      <Route path="*" element={<Navigate replace to="/" />} />
    </RouterRoutes>
  </Suspense>;
};

export default observer(Routes);
