import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Router, Navigation } from '@angular/router';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { AddContactService } from './../../shared/add-contact.service';

import { Contact } from '../../models/contact';

/**
 * @title Display value autocomplete
 */
@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: [
		'./search.component.scss'
	]
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  
  selected: Boolean;

	options: Contact[] = this.service.getContacts();

	filteredOptions: Observable<Contact[]>;

	constructor(private service: AddContactService, router: Router) {}

	ngOnInit() {
		this.filteredOptions = this.myControl.valueChanges.pipe(
			startWith(''),
			map((value) => (typeof value === 'string' ? value : value.name)),
			map((name) => (name ? this._filter(name) : this.options.slice()))
		);
	}

	displayFn(user?: Contact): string | undefined {
		return user ? user.name : undefined;
	}

	private _filter(name: string): Contact[] {
		const filterValue = name.toLowerCase();

		return this.options.filter((option) => option.name.toLowerCase().indexOf(filterValue) === 0);
	}

	onSubmit(form: any) {
    if(typeof form === 'object'){
      const contactId = document.getElementById(form.name);
		contactId.scrollIntoView();
		contactId.click();
    } else {
      this.selected=false;
    }
		
	}
}
