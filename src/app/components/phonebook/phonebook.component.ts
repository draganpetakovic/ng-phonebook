import { Component, OnInit } from '@angular/core';
import { AddContactService } from './../../shared/add-contact.service';
import { Contact } from '../../models/contact';

@Component({
	selector: 'app-phonebook',
	templateUrl: './phonebook.component.html',
	styleUrls: [
		'./phonebook.component.scss'
	]
})
export class PhonebookComponent implements OnInit {
	contacts: Contact[];

	constructor(private service: AddContactService) {}

	ngOnInit() {
		this.contacts = this.service.getContacts();
	}

	addContact($event) {
		this.service.addContact($event);
		this.contacts = this.service.getContacts();
	}

	updateContact(contact, $event) {
		this.service.updateContact(contact, $event);
		this.contacts = this.service.getContacts();
	}

	deleteContact(contact: Contact) {
		this.service.deleteContact(contact);
		this.contacts = this.service.getContacts();
	}

	newChange() {
		this.contacts = this.service.getContacts();
	}
}
