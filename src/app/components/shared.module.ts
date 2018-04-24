import { TablesComponent } from './../tables/tables.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';






const SHARED_COMPONENTS = [ TablesComponent];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  declarations: SHARED_COMPONENTS,
  exports: SHARED_COMPONENTS
})

export class SharedModule { }
