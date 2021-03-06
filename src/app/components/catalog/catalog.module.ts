import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { CatalogConfirmPurchaseInsufficientFundsComponent } from './components/confirm-purchase-insufficient-funds/confirm-purchase-insufficient-funds.component';
import { CatalogConfirmPurchaseComponent } from './components/confirm-purchase/confirm-purchase.component';
import { CatalogConfirmVipSubscriptionComponent } from './components/confirm-vip-subscription/confirm-vip-subscription.component';
import { CatalogLayoutBotsComponent } from './components/layouts/bots/bots.component';
import { CatalogLayoutDefaultComponent } from './components/layouts/default/default.component';
import { CatalogLayoutFrontPageFeaturedComponent } from './components/layouts/frontpage-featured/frontpage-featured.component';
import { CatalogLayoutFrontPage4Component } from './components/layouts/frontpage4/frontpage4.component';
import { CatalogLayoutPetsComponent } from './components/layouts/pets/pets.component';
import { CatalogLayoutPets2Component } from './components/layouts/pets2/pets2.component';
import { CatalogLayoutPets3Component } from './components/layouts/pets3/pets3.component';
import { CatalogLayoutSpacesNewComponent } from './components/layouts/spaces-new/spaces-new.component';
import { CatalogLayoutTrophiesComponent } from './components/layouts/trophies/trophies.component';
import { CatalogLayoutUnsupportedComponent } from './components/layouts/unsupported/unsupported.component';
import { CatalogLayoutVipBuyComponent } from './components/layouts/vip-buy/vip-buy.component';
import { CatalogLayoutVipGiftsComponent } from './components/layouts/vip-gifts/vip-gifts.component';
import { CatalogMainComponent } from './components/main/main.component';
import { CatalogNavigationItemComponent } from './components/navigation-item/navigation-item.component';
import { CatalogNavigationSetComponent } from './components/navigation-set/navigation-set.component';
import { CatalogNavigationComponent } from './components/navigation/navigation.component';
import { CatalogPurchaseComponent } from './components/purchase/purchase.component';
import { CatalogRedeemVoucherComponent } from './components/redeem-voucher/redeem-voucher.component';
import { CatalogService } from './services/catalog.service';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        CatalogConfirmPurchaseComponent,
        CatalogConfirmVipSubscriptionComponent,
        CatalogConfirmPurchaseInsufficientFundsComponent,
        CatalogLayoutDefaultComponent,
        CatalogLayoutFrontPageFeaturedComponent,
        CatalogLayoutFrontPage4Component,
        CatalogLayoutBotsComponent,
        CatalogLayoutPetsComponent,
        CatalogLayoutPets2Component,
        CatalogLayoutPets3Component,
        CatalogLayoutSpacesNewComponent,
        CatalogLayoutTrophiesComponent,
        CatalogLayoutUnsupportedComponent,
        CatalogLayoutVipBuyComponent,
        CatalogMainComponent,
        CatalogNavigationComponent,
        CatalogNavigationItemComponent,
        CatalogNavigationSetComponent,
        CatalogPurchaseComponent,
        CatalogRedeemVoucherComponent,
        CatalogLayoutVipGiftsComponent

    ],
    providers: [
        CatalogService
    ],
    declarations: [
        CatalogConfirmPurchaseComponent,
        CatalogConfirmVipSubscriptionComponent,
        CatalogConfirmPurchaseInsufficientFundsComponent,
        CatalogLayoutDefaultComponent,
        CatalogLayoutFrontPageFeaturedComponent,
        CatalogLayoutFrontPage4Component,
        CatalogLayoutBotsComponent,
        CatalogLayoutPetsComponent,
        CatalogLayoutPets2Component,
        CatalogLayoutPets3Component,
        CatalogLayoutSpacesNewComponent,
        CatalogLayoutTrophiesComponent,
        CatalogLayoutUnsupportedComponent,
        CatalogLayoutVipBuyComponent,
        CatalogMainComponent,
        CatalogNavigationComponent,
        CatalogNavigationItemComponent,
        CatalogNavigationSetComponent,
        CatalogPurchaseComponent,
        CatalogRedeemVoucherComponent,
        CatalogLayoutVipGiftsComponent
    ]
})
export class CatalogModule
{}
