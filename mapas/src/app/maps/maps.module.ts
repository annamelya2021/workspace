import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapScreenComponent } from './screen/map-screen/map-screen.component';
import { LoadingComponent } from './component/loading/loading.component';
import { MapViewComponent } from './component/map-view/map-view.component';


@NgModule({
  declarations: [
    MapScreenComponent,
    MapViewComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MapScreenComponent
  ]
})
export class MapsModule { }
