import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainManagerRoutingModule } from './main-manager-routing.module';
import { MainManagerComponent } from './main-manager.component';
import { NavlistComponent } from 'src/app/components/navlist/navlist.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { ServerAnsComponent } from 'src/app/components/server-ans/server-ans.component';
import { SectionNameComponent } from 'src/app/components/section-name/section-name.component';
import { AddOfficeFormComponent } from '../pages/add-office-form/add-office-form.component';
import { AddCarComponent } from '../pages/add-car/add-car.component';
import { AddWindowsComponent } from '../pages/add-windows/add-windows.component';
import { SearchCarComponent } from '../pages/search-car/search-car.component';
import { AlarmComponent } from '../pages/alarm/alarm.component';
import { AddMileageComponent } from '../pages/add-mileage/add-mileage.component';
import { SearchDelegComponent } from '../pages/search-deleg/search-deleg.component';
import { AddDelegFormComponent } from '../pages/add-deleg-form/add-deleg-form.component';
import { SearchWindowsFormComponent } from '../pages/search-windows-form/search-windows-form.component';
import { SearchOfficeFormComponent } from '../pages/search-office-form/search-office-form.component';




@NgModule({
  declarations: [AddOfficeFormComponent,
    MainManagerComponent,
    NavlistComponent,
    SearchBarComponent,
    ServerAnsComponent,
    AddCarComponent,
    SectionNameComponent,
    AddWindowsComponent,
    SearchCarComponent,
    AlarmComponent,
    AddMileageComponent,
    SearchDelegComponent,
    AddDelegFormComponent,
    AddOfficeFormComponent,
    SearchWindowsFormComponent,
    SearchOfficeFormComponent
  ],
  imports: [
    MainManagerRoutingModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class MainManagerModule { }
