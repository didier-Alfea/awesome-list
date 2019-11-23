import { NgModule } from '@angular/core';
// Remplacer l’importation du CommonModule par cette ligne (factorisation):
import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [
    // Impoter le SharedModule plutôt que le CommonModule :
    SharedModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
