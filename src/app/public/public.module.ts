import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne (factorisation):
import { SharedModule } from 'src/app/shared/shared.module';
import { PublicRoutingModule } from './public-routing.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    PublicRoutingModule,
    HomeModule
  ]
})
export class PublicModule { }
