import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {emailFormatValidator} from './contact.validators';
import {ContactService} from '../../shared/contact.service';
import {MessageModel} from '../../shared/message-model';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  submitSuccessAlert = false;
  submitErrorAlert = false;
  disabled = false;
  messageO = {
    sender: null,
    email: null,
    subject: null,
    message: null
  };

  constructor(
    private fb: FormBuilder,
    private _contactService: ContactService
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
    this.submitSuccessAlert = false;
    this.submitErrorAlert = false;

    // console.log('Üzenet küldése');
    // console.log(this.form);
    // console.log(this.form.value);
    // console.log(this.form.value['message']);
    // console.log(this.form.valid);
    if (this.form.valid) {
      this.disabled = true;

      this.form.get('sender').disable();
      this.form.get('email').disable();
      this.form.get('subject').disable();
      this.form.get('message').disable();

      this.messageO.sender = this.form.value['sender'];
      this.messageO.email = this.form.value['email'];
      this.messageO.subject = this.form.value['subject'];
      this.messageO.message = this.form.value['message'];

      this._contactService.sendMessage(
        /*this.form.value['sender'],
        this.form.value['email'],
        this.form.value['subject'],
        this.form.value['message'] */
        this.messageO
      ).subscribe(
        (message: MessageModel) => {
          // console.log(message);

          this.submitted = false;
          this.form.reset({
            sender: null,
            email: null,
            subject: null,
            message: null
          });
          // notification user
          this.submitSuccessAlert = true;
          this.disabled = false;

          this.form.get('sender').enable();
          this.form.get('email').enable();
          this.form.get('subject').enable();
          this.form.get('message').enable();
        },
        err => {
          console.error(err);
          // notification user
          this.submitErrorAlert = true;
        }
      );
    }
  }
}
