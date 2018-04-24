import { Component, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

import { ContactService } from './../services/contact.service';
import { Contact } from './../constants/contact';
import { ADDRESS_BOOK_HEAD } from './../constants/dataModel';
import { ToastrService } from '../common/toast.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  currentContact: Contact = null;
  tempContact: Contact = null;
  addressBookHead: any[] = ADDRESS_BOOK_HEAD;
  addressBookContent: Contact[];
  currentLanguage: any = 'en';


  newContactName: string;
  newContactCity: string;
  newContactAddress: string;
  newContactOfficePhone: string;
  newContactCellPhone: string;




  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private datePipe: DatePipe,
    private translate: TranslateService
  ) {
    translate.setDefaultLang(this.currentLanguage);
  }

  ngOnInit() {
    this.addressBookHead = ADDRESS_BOOK_HEAD;
    this.addressBookContent = this.contactService.listContacts();
  }

  selectedContactChange(contact: Contact) {
    if (contact.isChosen) {
      this.currentContact = contact;
    } else {
      this.currentContact = null;
    }
  }

  onCreateContact() {
    const contact: Contact = new Contact();
    this.contactService.addContact(contact);
  }
  onUpdateContact(contact: Contact) {
    this.tempContact = JSON.parse(JSON.stringify(contact));
  }
  onSubmitContact(contact: Contact) {
    const id = contact._id;
    this.contactService.updateContact(id, contact);
    this.currentContact.isChosen = false;
    this.currentContact = null;
  }
  onDeleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.currentContact.isChosen = false;
    this.currentContact = null;
  }
  switchLanguage() {
    this.currentLanguage = this.currentLanguage === 'en' ? 'zh-CN' : 'en';
    this.translate.use(this.currentLanguage);
  }

}
