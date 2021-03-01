import { ClientDeviceCategoryEnum } from '../../../../../core/communication/connections/enums/ClientDeviceCategoryEnum';
import { ClientPlatformEnum } from '../../../../../core/communication/connections/enums/ClientPlatformEnum';
import { IMessageComposer } from '../../../../../core/communication/messages/IMessageComposer';
import { Nitro } from '../../../../Nitro';

export class ClientReleaseVersionComposer implements IMessageComposer<ConstructorParameters<typeof ClientReleaseVersionComposer>>
{
    private _data: ConstructorParameters<typeof ClientReleaseVersionComposer>;

    constructor(releaseVersion: string, type: string, platform: number, category: number)
    {
        this._data = [ Nitro.RELEASE_VERSION, 'HTML5', ClientPlatformEnum.HTML5, ClientDeviceCategoryEnum.BROWSER ];
    }

    public getMessageArray()
    {
        return this._data;
    }

    public dispose(): void
    {
        return;
    }
}