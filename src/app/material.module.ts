import { NgModule } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule, MatButtonModule, MatTabsModule, MatListModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';


const modules: Array<any> = [MatDividerModule, MatTableModule, MatDatepickerModule, MatNativeDateModule,
                            MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, MatTabsModule, MatListModule];
@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class MaterialModule { }
