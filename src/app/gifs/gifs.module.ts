import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';


import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CardLisComponent } from './components/card-list/card-lis.component';
import { GifsCardComponent } from './components/card/gifs-card.component';






@NgModule({
  declarations: [


    HomePageComponent,
    SearchBoxComponent,
    CardLisComponent,
    GifsCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports:[
    HomePageComponent,
  ]
})
export class GifsModule { }
