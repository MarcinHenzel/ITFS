import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOfficeFormComponent } from '../pages/add-office-form/add-office-form.component';
import { SearchDelegComponent } from '../pages/search-deleg/search-deleg.component';
import { SearchOfficeFormComponent } from '../pages/search-office-form/search-office-form.component';
import { AddWindowsComponent } from '../pages/add-windows/add-windows.component';
import { SearchWindowsFormComponent } from '../pages/search-windows-form/search-windows-form.component';
import { AddDelegFormComponent } from '../pages/add-deleg-form/add-deleg-form.component';
import { SearchCarComponent } from '../pages/search-car/search-car.component';
import { AddMileageComponent } from '../pages/add-mileage/add-mileage.component';
import { AlarmComponent } from '../pages/alarm/alarm.component';
import { AddCarComponent } from '../pages/add-car/add-car.component';
import { MainManagerComponent } from './main-manager.component';


const routes: Routes = [
  {
    path: '', component: MainManagerComponent,
    children: [
      { path: 'add-office', component: AddOfficeFormComponent, data: {title: 'Add office', animation: 'Addoffice'} },
      { path: 'deleg-view', component: SearchDelegComponent, data: {title: 'Search delegation', animation: 'Searchdelegation'} },
      { path: 'search-office', component: SearchOfficeFormComponent, data: {title: 'Search office', animation: 'Searchoffice'} },
      { path: 'add-windows', component: AddWindowsComponent, data: {title: 'Add windows', animation: 'Addwindows'} },
      { path: 'search-windows', component: SearchWindowsFormComponent, data: {title: 'Search windows', animation: 'Searchwindows'} },
      { path: 'add-deleg', component: AddDelegFormComponent, data: {title: 'Add delegation', animation: 'Adddelegation'}},
      { path: 'search-car', component: SearchCarComponent, data: {title: 'Search vehicle', animation: 'Searchvehicle'} },
      { path: 'dist-car', component: AddMileageComponent, data: {title: 'Add mileage', animation: 'Addmileage'} },
      { path: 'alarm', component: AlarmComponent, data: {title: 'Alarm', animation: 'Alarm'} },
      { path: 'add-car', component: AddCarComponent, data: {title: 'Add vehicle', animation: 'Addvehicle'}  },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainManagerRoutingModule { }
