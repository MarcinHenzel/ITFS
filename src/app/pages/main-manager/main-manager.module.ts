import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOfficeFormComponent } from '../add-office-form/add-office-form.component';
import { MainManagerRoutingModule } from './main-manager-routing.module';
import { MainManagerComponent } from './main-manager.component';
import { NavlistComponent } from 'src/app/components/navlist/navlist.component';
import { SearchBarComponent } from 'src/app/components/search-bar/search-bar.component';
import { ServerAnsComponent } from 'src/app/components/server-ans/server-ans.component';
import { AddCarComponent } from '../add-car/add-car.component';
import { SectionNameComponent } from 'src/app/components/section-name/section-name.component';
import { AddWindowsComponent } from '../add-windows/add-windows.component';
import { SearchCarComponent } from '../search-car/search-car.component';
import { AlarmComponent } from '../alarm/alarm.component';
import { AddMileageComponent } from '../add-mileage/add-mileage.component';
import { SearchDelegComponent } from '../search-deleg/search-deleg.component';
import { AddDelegFormComponent } from '../add-deleg-form/add-deleg-form.component';
import { SearchWindowsFormComponent } from '../search-windows-form/search-windows-form.component';
import { SearchOfficeFormComponent } from '../search-office-form/search-office-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



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
    SearchOfficeFormComponent,
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
