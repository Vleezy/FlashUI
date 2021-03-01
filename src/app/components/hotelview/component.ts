import { Component } from '@angular/core';
import { SessionService } from '../../security/services/session.service';

@Component({
    selector: 'nitro-hotelview-component',
    template: `<div class="hotel-bosluk" style="background-image: url(https://images.habbo.com/c_images/reception/jan21_background_gradient.png);">
        <div class="habbo-drape"></div>
        <div class="hotel-view-haber-box">
            <div class="view-haber">
                <div class="hv-haber-gorsel">
                    <img src="./assets/images/reception/spromo1.png">
                </div>
                <div class="hv-haber-baslik">Habbo Hotel old Template</div>
                <div class="hv-haber-aciklama">Designed from the ground up for people/hotels who will always miss and love the old!</div>
                <div class="view-buton">
                    <p class="vb-text">button_text</p>
                </div>

            </div>
            <div class="view-haber">
                <div class="hv-haber-gorsel">
                    <img src="./assets/images/reception/spromo2.png">
                </div>
                <div class="hv-haber-baslik">CoreloGAMES™ Discord Server</div>
                <div class="hv-haber-aciklama">Joining the server, you can see modern habbo and old habbo designs, and you can chat with other people on the #chat channel.</div>
                <div class="view-buton">
                    <p class="vb-text">Go to the server</p>
                </div>
            </div>
        </div>
        <div class="hw-haber-ex2">
            <div class="view-haber">
                <div class="hv-haber-baslik">hotelview_title_text</div>
                <div class="hv-haber-aciklama">hotelview_description_text</div>
                <div class="view-buton">
                    <p class="vb-text">button_text</p>
                </div>
            </div>
            <div class="view-haber">
                <div class="hv-haber-baslik">hotelview_title_text</div>
                <div class="hv-haber-aciklama">hotelview_description_text</div>
                <div class="view-buton">
                    <p class="vb-text">button_text</p>
                </div>
            </div>
        </div>
        <div class="bosluk-sol">
            <div class="hotelview_habbo-avatar" nitro-avatar-image [figure]="figure" [direction]="2"></div>
            <img src="./assets/images/reception/jan21_background_left.png">
        </div>
        <div class="bosluk-sag"></div>
    </div>
    
    `
})
export class HotelViewComponent
{
    constructor(
        private sessionService: SessionService) 
    {}

    public get figure(): string
    {
        return this.sessionService.figure;
    }
}