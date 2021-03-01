import { Component, NgZone } from '@angular/core';
import { Nitro } from '../../../../../../client/nitro/Nitro';
import { FriendFurniEngravingWidgetType } from '../../../../../../client/nitro/room/enums/FriendFurniEngravingWidgetType';
import { StringDataType } from '../../../../../../client/nitro/room/object/data/type/StringDataType';
import { ConversionTrackingWidget } from '../../../../../../client/nitro/ui/widget/ConversionTrackingWidget';

@Component({
    templateUrl: './engraving.template.html'
})
export class FriendFurniEngravingWidget extends ConversionTrackingWidget
{
    public engravingView: string = null;
    public visible: boolean = false;

    public firstFigure: string = null;
    public firstName: string = null;

    public secondFigure: string = null;
    public secondName: string = null;

    public engravedDate: string = null;

    constructor(
        private _ngZone: NgZone
    )
    {
        super();
    }


    public open(furniId: number, _arg_2:number, _arg_3:StringDataType):void
    {
        switch(_arg_2)
        {
            case FriendFurniEngravingWidgetType._Str_13451:
                this.engravingView = 'engraving';
                break;
            case FriendFurniEngravingWidgetType._Str_17498:
                break;
            case FriendFurniEngravingWidgetType._Str_18746:
                break;
            case FriendFurniEngravingWidgetType._Str_15230:
                this.engravingView = 'wildwest';
                break;
            case FriendFurniEngravingWidgetType._Str_15778:
                this.engravingView = 'hween14';
                break;
        }

        // Only supported views
        if(this.engravingView)
        {
            this._ngZone.run(() =>
            {
                this.firstName = _arg_3.getValue(1);
                this.secondName = _arg_3.getValue(2);
                this.firstFigure = _arg_3.getValue(3);
                this.secondFigure = _arg_3.getValue(4);
                this.engravedDate = _arg_3.getValue(5);
                this.visible = true;
            });

        }
    }

    public hide(): void
    {
        this.visible = false;
    }

    public get image(): string
    {
        return Nitro.instance.getConfiguration('furni.extras.url').toString().replace('%image%', `loveLock_${this.engravingView}`);
    }
}
