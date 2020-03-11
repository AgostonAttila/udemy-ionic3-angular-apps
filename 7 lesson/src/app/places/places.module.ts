import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlacesPage } from './places.page';
import { PlacesRoutingMmodule } from './places-routing.module.ts';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, PlacesRoutingMmodule],
  declarations: [PlacesPage]
})
export class PlacesPageModule {}
