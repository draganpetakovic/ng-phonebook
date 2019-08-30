import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Contact } from './../../models/contact';

@Component({
	selector: 'app-contact',
	templateUrl: './contact.component.html',
	styleUrls: [
		'./contact.component.scss'
	]
})
export class ContactComponent implements OnInit {
	@Input() contact: Contact;
	@Output() delete = new EventEmitter();
	@Output() update = new EventEmitter();

	panelOpenState = false;

	editForm;

	constructor(private fb: FormBuilder) {}

	ngOnInit() {
		this.editForm = this.fb.group({
			name: [
				this.contact.name,
				[
					Validators.required,
					Validators.pattern(/^[a-zA-Z]+[\s]*[a-zA-Z0-9]+$/)
				]
			],
			address: [
				this.contact.address,
				[
					Validators.required,
					Validators.pattern(/^[a-zA-Z]+[\s]*[a-zA-Z]+\s*[0-9]{1,3}$/)
				]
			],
			mobile: [
				this.contact.mobile,
				[
					Validators.required,
					Validators.pattern(/^(\+381|0)*[6][0-9][\s\.-/]*[0-9]{2,4}[\.\s-]*[0-9]{2,3}[\.\s-]*[0-9]{0,3}$/)
				]
			],
			home: [
				this.contact.home,
				[
					Validators.required,
					Validators.pattern(/^(\+381|0)*[1-3][1-9][\s\.-/]*[0-9]{2,4}[\.\s-]*[0-9]{2,3}[\.\s-]*[0-9]{0,3}$/)
				]
			]
		});
	}

	get name() {
		return this.editForm.get('name');
	}

	get address() {
		return this.editForm.get('address');
	}

	get mobile() {
		return this.editForm.get('mobile');
	}

	get home() {
		return this.editForm.get('home');
	}

	onSubmit(e) {
		this.update.emit(e);
	}

	onClick() {
		this.delete.emit(this.contact);
	}
}
