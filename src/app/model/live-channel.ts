import { Content } from '../types/content';

export class LiveChannel implements Content {
    id: number;
    titleSortName: string;
    channelImage: string;
    provider: string;
    displayOrder: number;
    isHDChannel: boolean;
    isEnabled: boolean;
    circleImage: string;
    squareImage: string;
    vrId: number;
    mmId: string;
    titleLongName: string;
    languages: string;
    summary: string;
    hdSd: string;
    contractName: string;
    contentShowType: string;
    redirectionType: string;
    redirectionChannelId: string;
    redirectionChannelName: string;
    genreList: string[];
    displayPackages: string[];
    packageEntitlementIds: string[];
    catchupChannel: string;
    configuredOnRail: boolean;
}
