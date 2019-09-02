import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailFormatValidator} from './contact.validators';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group(
      {
        sender: [null, Validators.required],
        email: [null,
          Validators.compose(
            [
              Validators.required,
              emailFormatValidator()
            ]
          )],
        subject: [null, Validators.required],
        message: [null, Validators.required]
      }
    );
  }

  sendMessage() {
    this.submitted = true;
    // console.log('Üzenet küldése');
    // console.log(this.form);
    // console.log(this.form.value);
    // console.log(this.form.value['message']);
    console.log(this.form.valid);
  }
}
