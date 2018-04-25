import { any } from 'codelyzer/util/function';
import { Contact } from './../constants/contact';
import { concat } from 'rxjs/operators';
import { Component, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.scss']
})
export class TablesComponent {

  isAllChosen: boolean = false;
  selectedTarget: Contact = null;
  editKey: string = '';
  @Input() tableHeader: { key: string, value: string }[];
  @Input() tableContent: Contact[];
  @Output() selectedContact = new EventEmitter();

  selectAllChange() {
   this.tableContent.map((person: Contact) => {
     return Object.assign({}, person, {
      isChosen: false
     });
   });
  }
  selectTargetChange(contact: Contact) {
    const targetId = contact._id;
    this.isAllChosen = false;
    for (const person of this.tableContent) {
       if (person._id !== targetId) {
          person.isChosen = false;
       }
    }
    this.selectedContact.emit(contact);
  }
  editTargetColumn(contact: Contact, key: string) {
      this.editKey = key;
      contact.isEditing = true;
  }
  doneEditingColumn(contact: Contact) {
    contact.isEditing = false;
  }
  sortColumn(column) {
    this.tableContent =  this.tableContent.sort((a, b) => {
      if (a[column] > b[column]) {
         return 1;
      } else if (a[column] < b[column]) {
         return -1;
      }
      return 0;
    });
  }
}
