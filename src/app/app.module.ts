import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchCarComponent } from './pages/search-car/search-car.component';
import { AlarmComponent } from './pages/alarm/alarm.component';
import { AddMileageComponent } from './pages/add-mileage/add-mileage.component';
import { SearchDelegComponent } from './pages/search-deleg/search-deleg.component';
import { AddDelegFormComponent } from './pages/add-deleg-form/add-deleg-form.component';
import { AddOfficeFormComponent } from './pages/add-office-form/add-office-form.component';
import { SearchWindowsFormComponent } from './pages/search-windows-form/search-windows-form.component';
import { SearchOfficeFormComponent } from './pages/search-office-form/search-office-form.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AddWindowsComponent } from './pages/add-windows/add-windows.component';
import { InfoComponent } from './pages/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SectionNameComponent } from './components/section-name/section-name.component';
import { MenuCircleBtnComponent } from './components/menu-circle-btn/menu-circle-btn.component';
import { AddCarComponent } from './pages/add-car/add-car.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { NavlistComponent } from './components/navlist/navlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerAnsComponent } from './components/server-ans/server-ans.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchCarComponent,
    AlarmComponent,
    AddMileageComponent,
    SearchDelegComponent,
    AddDelegFormComponent,
    AddOfficeFormComponent,
    SearchWindowsFormComponent,
    SearchOfficeFormComponent,
    NavbarComponent,
    AddWindowsComponent,
    InfoComponent,
    SectionNameComponent,
    MenuCircleBtnComponent,
    AddCarComponent,
    CardListComponent,
    NavlistComponent,
    SearchBarComponent,
    ServerAnsComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
