import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';
import { HomerRouterModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent
    ],
    imports: [
        CommonModule,
        HomerRouterModule,
        SharedModule
    ]
})
export class HomeModule {

}