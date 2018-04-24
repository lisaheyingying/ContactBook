import { PreloadAllModules, RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ContactModule } from './contacts/contacts.module';
import { AppComponent } from './app.component';





import { BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';






@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    [ContactModule],
    BrowserModule,
    RouterModule.forRoot(ROUTES, {useHash: true, preloadingStrategy: PreloadAllModules})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
