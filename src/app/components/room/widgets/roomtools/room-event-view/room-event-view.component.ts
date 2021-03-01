import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RoomSettingsComposer } from '../../../../../../client/nitro/communication/messages/outgoing/room/data/RoomSettingsComposer';
import { RoomMuteComposer } from '../../../../../../client/nitro/communication/messages/outgoing/roomevents/RoomMuteComposer';
import { RoomDataParser } from '../../../../../../client/nitro/communication/messages/parser/room/data/RoomDataParser';
import { Nitro } from '../../../../../../client/nitro/Nitro';
import { RoomControllerLevel } from '../../../../../../client/nitro/session/enum/RoomControllerLevel';
import { SecurityLevel } from '../../../../../../client/nitro/session/enum/SecurityLevel';
import { ConversionTrackingWidget } from '../../../../../../client/nitro/ui/widget/ConversionTrackingWidget';
import { NavigatorDataService } from '../../../../navigator/services/navigator-data.service';

@Component({
    selector: 'nitro-room-event-view-component',
    templateUrl: './room-event-view.template.html'
})
export class RoomEventViewComponent extends ConversionTrackingWidget
{
    @Input()
    public roomData: RoomDataParser;

    @Input()
    public visible: boolean = false;

    @Output()
    public visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(private _navigatorDataService: NavigatorDataService
    )
    {
        super();
    }

    public hide(): void
    {
        this.visibleChange.emit(false);
    }

    public get roomSettingsVisible(): boolean
    {
        if(!this.roomData) return false;

        return this._navigatorDataService.currentRoomOwner || Nitro.instance.sessionDataManager.securityLevel >= SecurityLevel.MODERATOR;
    }

    public get roomFilterVisible(): boolean
    {
        if(!this.roomData) return false;

        return this._navigatorDataService.currentRoomOwner || Nitro.instance.sessionDataManager.securityLevel >= SecurityLevel.MODERATOR;
    }

    public get floorPlanVisible(): boolean
    {
        if(!this.roomData) return false;

        return Nitro.instance.roomSessionManager.getSession(this.roomData.roomId).controllerLevel >= RoomControllerLevel.GUEST;
    }

    public get addStaffPickedVisible(): boolean
    {
        if(!this.roomData) return false;

        return Nitro.instance.sessionDataManager.securityLevel >= SecurityLevel.COMMUNITY;
    }

    public get hoomRegionVisible(): boolean
    {
        if(!this.roomData) return false;

        return this.roomData.showOwner;
    }

    public get canMuteVisible(): boolean
    {
        if(!this.roomData) return false;

        return this.roomData.canMute;
    }

    public get mutedVisible(): boolean
    {
        if(!this.roomData) return false;

        return this.roomData.allInRoomMuted;
    }

    public handleButtonClick(button: string): void
    {
        switch(button)
        {
            case 'room_report_button':
                this.reportRoom();
                break;

            case 'room_settings_button':
                this.openRoomSettings();
                break;

            case 'room_mute_all':
                this.muteAll();
                break;
        }
    }

    private makeFavorite(): void
    {
        //_Str_16071
    }

    private favoriteRegion(): void
    {
        //        _Str_16307
    }

    private openRoomSettings(): void
    {
        Nitro.instance.communication.connection.send(new RoomSettingsComposer(this.roomData.roomId));
    }

    private openRoomFilter(): void
    {
        //_Str_22339
    }

    private muteAll(): void
    {
        // _Str_25149

        this.roomData.allInRoomMuted = !this.roomData.allInRoomMuted;

        Nitro.instance.communication.connection.send(new RoomMuteComposer());
    }

    private makeHomeRoom(): void
    {
        //_Str_25302
    }

    private emdedSrc(): void
    {
        //_Str_23461
    }

    private staffPick(): void
    {
        // _Str_22695
    }

    private reportRoom(): void
    {
        // _Str_24254
    }
}
