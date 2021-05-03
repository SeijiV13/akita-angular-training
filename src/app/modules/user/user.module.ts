import { UserRoutes } from './user.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    ProfileComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutes,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
