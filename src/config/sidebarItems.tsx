import { SendAR } from '../components/SendAR';
import { EncryptDecrypt } from '../components/EncryptDecrypt';
import { SendAOToken } from '../components/SendAOToken';
import { SendAOMessage } from '../components/SendAOMessage';
import { DryRunAOMessage } from '../components/DryRunAOMessage';
import { BatchTest } from '../components/BatchTest';
// import { ArIOTest } from '../components/ArIOTest';
import { GraphQLTest } from '../components/GraphQLTest';
import { UploadFile } from '../components/UploadFile';

export interface SidebarItemConfig {
    id: string;
    title: string;
    component: React.ReactNode;
}

export const sidebarItems: SidebarItemConfig[] = [
    {
        id: 'upload',
        title: 'Upload a File',
        component: <UploadFile />,
    },
    {
        id: 'send-ar',
        title: 'Send AR',
        component: <SendAR />,
    },
    {
        id: 'encrypt',
        title: 'Encrypt / Decrypt',
        component: <EncryptDecrypt />,
    },
    {
        id: 'send-ao-token',
        title: 'Send AO Token',
        component: <SendAOToken />,
    },
    {
        id: 'send-ao-message',
        title: 'Send AO Message',
        component: <SendAOMessage />,
    },
    {
        id: 'dry-run',
        title: 'Dry Run AO Message',
        component: <DryRunAOMessage />,
    },
    {
        id: 'batch',
        title: 'Test Batch',
        component: <BatchTest />,
    },
    // {
    //     id: 'ario',
    //     title: 'Test ArIO SDK',
    //     component: <ArIOTest />,
    // },
    {
        id: 'graphql',
        title: 'Test GraphQL',
        component: <GraphQLTest />,
    },
];
