import { Component, ElementRef, ViewChild } from '@angular/core';
import { AvatarContextInfoView } from '../AvatarContextInfoView';

@Component({
    selector: 'nitro-room-avatarinfo-name-component',
    template: `
    <div #activeView class="roomactive-ub-card">
        <div class="raub-usernametxt">{{ userName }}</div>
        <div class="roomactive-ub-card-pointer"></div>
    </div>`
})
export class RoomAvatarInfoNameComponent extends AvatarContextInfoView
{
    @ViewChild('activeView')
    public activeView: ElementRef<HTMLDivElement>;

    public static setup(view: RoomAvatarInfoNameComponent, userId: number, userName: string, userType: number, roomIndex: number, willFade: boolean = false): void
    {
        view.willFade = willFade;

        AvatarContextInfoView.extendedSetup(view, userId, userName, userType, roomIndex);
    }
}