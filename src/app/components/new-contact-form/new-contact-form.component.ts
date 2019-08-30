import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-new-contact-form',
	templateUrl: './new-contact-form.component.html',
	styleUrls: [
		'./new-contact-form.component.scss'
	]
})
export class NewContactFormComponent implements OnInit {
	contactForm: FormGroup;
	@Output() submittedForm = new EventEmitter();

	constructor(private fb: FormBuilder) {
		this.contactForm = fb.group({
			name: [
				'',
				[
					Validators.required,
					Validators.pattern(/^[a-zA-Z]+[\s]*[a-zA-Z0-9]+$/)
				]
			],
			address: [
				'',
				[
					Validators.required,
					Validators.pattern(/^[a-zA-Z]+[\s]*[a-zA-Z]+\s*[0-9]{1,3}$/)
				]
			],
			mobile: [
				'',
				[
					Validators.required,
					Validators.pattern(/^(\+381|0)*[6][0-9][\s\.-/]*[0-9]{2,4}[\.\s-]*[0-9]{2,3}[\.\s-]*[0-9]{0,3}$/)
				]
			],
			home: [
				'',
				[
					Validators.required,
					Validators.pattern(/^(\+381|0)*[1-3][1-9][\s\.-/]*[0-9]{2,4}[\.\s-]*[0-9]{2,3}[\.\s-]*[0-9]{0,3}$/)
				]
			]
		});
	}

	ngOnInit() {}

	get name() {
		return this.contactForm.get('name');
	}

	get address() {
		return this.contactForm.get('address');
	}

	get mobile() {
		return this.contactForm.get('mobile');
	}

	get home() {
		return this.contactForm.get('home');
	}

	onSubmit(form: any): void {
		this.submittedForm.emit(form);
		this.contactForm.reset();
		Object.keys(this.contactForm.controls).forEach((key) => {
			this.contactForm.controls[key].setErrors(null);
		});
	}
}
