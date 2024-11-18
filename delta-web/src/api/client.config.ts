import http from '@/core/http';
import { CodeGenConfig } from './client';

const codeGenConfig: CodeGenConfig = {
    createHttp: () => http,
};

export default codeGenConfig;
