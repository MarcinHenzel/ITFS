import { InfoComponent } from './pages/info/info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'info', component: InfoComponent },
  {
    path: 'manager' ,
    loadChildren: () => import('../app/pages/main-manager/main-manager.module').then(m => m.MainManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
