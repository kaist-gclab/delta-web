import { lazy, Suspense } from 'react';
import { Loading } from './NonIdealStates';
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

      {/* settings */}
      <Route path="/settings" element={<Navigate replace to="/settings/user" />} />
      <Route path="/settings/user" element={<UserSettingsPage />} />
      <Route path="/settings/system" element={<SystemSettingsPage />} />
      <Route path="/settings/viewers/list" element={<ViewerListPage />} />

      {/* asset */}
      <Route path="/asset" element={<Navigate replace to="/asset/assets/add" />} />
      <Route path="/asset/assets/add" element={<AddAssetPage />} />
      <Route path="/asset/assets/list" element={<AssetListPage />} />
      <Route path="/asset/assets/detail" element={<AssetDetailPage />} />
      <Route path="/asset/assets/detail/:id" element={<AssetDetailPage />} />
      <Route path="/asset/assets/viewer" element={<AssetViewerPage />} />

      <Route path="/asset/asset-types/add" element={<AddAssetTypePage />} />
      <Route path="/asset/asset-types/list" element={<AssetTypeListPage />} />
      <Route path="/asset/asset-types/detail" element={<AssetTypeDetailPage />} />
      <Route path="/asset/asset-types/detail/:id" element={<AssetTypeDetailPage />} />

      {/* job */}
      <Route path="/job" element={<Navigate replace to="/job/jobs/add" />} />
      <Route path="/job/jobs/add" element={<AddJobPage />} />
      <Route path="/job/jobs/list" element={<JobListPage />} />
      <Route path="/job/jobs/detail" element={<JobDetailPage />} />
      <Route path="/job/jobs/detail/:id" element={<JobDetailPage />} />

      <Route path="/job/job-types/list" element={<JobTypeListPage />} />
      <Route path="/job/job-types/detail" element={<JobTypeDetailPage />} />
      <Route path="/job/job-types/detail/:id" element={<JobTypeDetailPage />} />

      {/* node */}
      <Route path="/node" element={<Navigate replace to="/node/processor-nodes/list" />} />
      <Route path="/node/processor-nodes/list" element={<ProcessorNodeListPage />} />
      <Route path="/node/processor-nodes/detail" element={<ProcessorNodeDetailPage />} />
      <Route path="/node/processor-nodes/detail/:id" element={<ProcessorNodeDetailPage />} />

      {/* key */}
      <Route path="/key" element={<Navigate replace to="/key/encryption-keys/add" />} />
      <Route path="/key/encryption-keys/add" element={<AddEncryptionKeyPage />} />
      <Route path="/key/encryption-keys/list" element={<EncryptionKeyListPage />} />
      <Route path="/key/encryption-keys/detail" element={<EncryptionKeyDetailPage />} />
      <Route path="/key/encryption-keys/detail/:id" element={<EncryptionKeyDetailPage />} />

      {/* monitoring */}
      <Route path="/monitoring" element={<Navigate replace to="/monitoring/dashboard" />} />
      <Route path="/monitoring/dashboard" element={<DashboardMonitorPage />} />
      <Route path="/monitoring/object-storage" element={<ObjectStorageMonitorPage />} />
      <Route path="/monitoring/processor-node" element={<ProcessorNodeMonitorPage />} />
      <Route path="/monitoring/jobs" element={<JobMonitorPage />} />

      <Route path="*" element={<Navigate replace to="/" />} />
    </RouterRoutes>
  </Suspense>;
};

export default Routes;
