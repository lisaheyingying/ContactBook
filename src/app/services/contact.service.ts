import { Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { mockContacts } from './../constants/dataModel';
import { Contact } from './../constants/contact';




@Injectable()
export class ContactService {

  allContacts: Contact[] = mockContacts;

  constructor(private http: HttpClient) { }

 listContacts(): Contact[] {
    return this.allContacts;
 }
 addContact(contact: Contact): Contact {
   const ID  = this.allContacts.reduce((a, b) => {
     return Math.max(a, b._id);
   }, 0) + 1;
   contact._id = ID;
   contact.cellPhone = 'changeIt';
   contact.city = 'changeIt';
   contact.name = 'changeIt';
   contact.officeAddress = 'changeIt';
   contact.officePhone = 'changeIt';
   this.allContacts.push(contact);
   return contact;
 }
 deleteContact(contact: Contact): void {
   const index = this.allContacts.findIndex(member => member._id === contact._id);
   this.allContacts.splice(index, 1);
 }
 updateContact(id: number, contact: Contact) {
   this.http.put('http://address-book.com/api/contact/${id}', JSON.stringify(contact))
  .map((response: Response) => {
    return response.json();
  })
  .catch(this.handleError);
 }
 private handleError(error?: Response) {
  if (error) {
    console.log('Error in Contact Service: ' + error);
    return Observable.throw(error.json().error || 'Server Error');
  } else {
    console.log('Unknown err');
  }
}
}
