import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne (factorisation):
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeComponent } from './home/home.component';
import { HomeBannerComponent } from './home-banner/home-banner.component';
import { HomeFeatureCardComponent } from './home-feature-card/home-feature-card.component';
import { HomeFeaturesComponent } from './home-features/home-features.component';


@NgModule({
  declarations: [HomeComponent, HomeBannerComponent, HomeFeatureCardComponent, HomeFeaturesComponent],
  imports: [
    // Impoter le SharedModule plutôt que le CommonModule :
    SharedModule,
  ]
})
export class HomeModule { }
