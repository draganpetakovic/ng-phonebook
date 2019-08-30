import { Injectable } from '@angular/core';

import { Contact } from '../models/contact';

@Injectable({
	providedIn: 'root'
})
export class AddContactService {
	contacts: Contact[] = JSON.parse(localStorage.getItem('imenik')) || [];

	constructor() {}

	getContacts(): Contact[] {
		return this.contacts.slice().sort((a, b) => (a.name > b.name ? 1 : b.name > a.name ? -1 : 0));
	}

	addContact(contact: Contact) {
		const newContact = new Contact(contact.name, contact.address, contact.mobile, contact.home);
		this.contacts.push(newContact);
		localStorage.setItem('imenik', JSON.stringify(this.contacts));
		return this.contacts;
	}

	updateContact(contact: Contact, updatedContact: Contact) {
		const idx = this.contacts.indexOf(contact);
		this.contacts.splice(idx, 1, updatedContact);
		localStorage.setItem('imenik', JSON.stringify(this.contacts));
		return this.contacts;
	}

	deleteContact(deletedContact: Contact) {
		const phonebook = this.contacts.slice().filter((contact) => contact !== deletedContact);
		localStorage.setItem('imenik', JSON.stringify(phonebook));
		this.contacts = phonebook;
		return this.contacts;
	}
}
