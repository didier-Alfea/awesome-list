import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne (factorisation):
import { SharedModule } from 'src/app/shared/shared.module';
import { ProfilRoutingModule } from './profil-routing.module';
import { ProfilComponent } from './profil/profil.component';

@NgModule({
  declarations: [ProfilComponent],
  imports: [
    SharedModule,
    ProfilRoutingModule
  ]
})
export class ProfilModule { }
