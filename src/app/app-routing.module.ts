import { InfoComponent } from './pages/info/info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AddDelegFormComponent } from './pages/add-deleg-form/add-deleg-form.component';
import { AddOfficeFormComponent } from './pages/add-office-form/add-office-form.component';
import { AlarmComponent } from './pages/alarm/alarm.component';
import { DelegViewComponent } from './pages/deleg-view/deleg-view.component';
import { DistCarFormComponent } from './pages/dist-car-form/dist-car-form.component';
import { SearchCarComponent } from './pages/search-car/search-car.component';
import { SearchOfficeFormComponent } from './pages/search-office-form/search-office-form.component';
import { SearchWindowsFormComponent } from './pages/search-windows-form/search-windows-form.component';
import { AddWindowsComponent } from './pages/add-windows/add-windows.component';


const routes: Routes = [
  {path:'', component: HomePageComponent},
  {path:'add-office', component: AddOfficeFormComponent},
  {path:'deleg-view', component: DelegViewComponent},
  {path:'search-office', component: SearchOfficeFormComponent},
  {path:'add-windows', component: AddWindowsComponent},
  {path:'search-windows', component: SearchWindowsFormComponent},
  {path:'add-deleg', component: AddDelegFormComponent},
  {path:'search-car', component: SearchCarComponent},
  {path:'dist-car', component: DistCarFormComponent},
  {path:'alarm', component: AlarmComponent},
  {path:'info', component: InfoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
