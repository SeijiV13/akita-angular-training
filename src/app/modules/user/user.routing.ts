import { ProfileComponent } from './pages/profile/profile.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: "",
    component: ProfileComponent
   },
];

export const UserRoutes = RouterModule.forChild(routes);
