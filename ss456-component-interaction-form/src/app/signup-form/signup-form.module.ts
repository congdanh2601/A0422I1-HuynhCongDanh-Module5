import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupFormRoutingModule } from './signup-form-routing.module';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FormComponent],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SignupFormRoutingModule
  ]
})
export class SignupFormModule { }
