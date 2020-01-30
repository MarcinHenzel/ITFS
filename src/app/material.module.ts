import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatButtonModule } from '@angular/material';
import {MatTableModule} from '@angular/material/table';


const modules: Array<any> = [MatTableModule, MatDatepickerModule, MatNativeDateModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
