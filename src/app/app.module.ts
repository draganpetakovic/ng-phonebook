import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from './shared/material.module/material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import 'hammerjs';

import { PhonebookComponent } from './components/phonebook/phonebook.component';
import { ContactComponent } from './components/contact/contact.component';
import { NewContactFormComponent } from './components/new-contact-form/new-contact-form.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
	declarations: [
		AppComponent,
		PhonebookComponent,
		ContactComponent,
		NewContactFormComponent,
		SearchComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MaterialModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule {}
