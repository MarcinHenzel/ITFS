import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchCarComponent } from './pages/search-car/search-car.component';
import { AlarmComponent } from './pages/alarm/alarm.component';
import { DistCarFormComponent } from './pages/dist-car-form/dist-car-form.component';
import { DelegViewComponent } from './pages/deleg-view/deleg-view.component';
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
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SearchCarComponent,
    AlarmComponent,
    DistCarFormComponent,
    DelegViewComponent,
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
    NavlistComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
