import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required]),
      confirmPassword: new FormControl('', [Validators.minLength(6), Validators.required]),
      country: new FormControl('', Validators.required),
      age: new FormControl('', [Validators.required, Validators.min(19)]),
      gender: new FormControl('', Validators.required),
      phone: new FormControl('', [Validators.required, Validators.pattern("^\\+84\\d{9}$")])
    }, this.confirmPass)
  }

  ngOnInit(): void {

  }

  submit() {

  }

  confirmPass(form: any) {
    let pass1 = form.controls.password.value;
    let pass2 = form.controls.confirmPassword.value
    if (pass1 != pass2) {
      return {'passwordNotMatch': true};
    } else return null;
  }

}
