import { ContactsComponent } from './contacts/contacts.component';
import {Routes} from '@angular/router';

export const ROUTES: Routes = [
    { path: '', redirectTo: 'contacts', pathMatch: 'full'},
    {path: 'contacts', component: ContactsComponent}
];

