
import { ToastrService } from './../common/toast.service';
import { TablesComponent } from './../tables/tables.component';
import { SharedModule } from './../components/shared.module';
import { ContactService } from './../services/contact.service';
import { ContactsComponent } from './contacts.component';

import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {DatePipe} from '@angular/common';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {HttpLoaderFactory} from '../common/loaderFactory';



@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
   TranslateModule.forRoot({
     loader: {
       provide: TranslateLoader,
       useFactory: (HttpLoaderFactory),
       deps: [HttpClient]
     }
   })
  ],
  declarations: [
    ContactsComponent,
    TablesComponent
  ],
  entryComponents: [ContactsComponent],
  providers: [
    DatePipe,
    ContactService,
    ToastrService,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactModule {}

