import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import './../../../../assets/js/smtp.js'
declare let Email: any;

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  inquiryForm: FormGroup;

  constructor(private fb: FormBuilder, private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.inquiryForm = this.fb.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    const inquery = this.inquiryForm.value;

    this.httpClient.post('https://formsubmit.co/ceec228a6105376b5931736905799296', inquery).subscribe((res) => {
      console.log("Submitted successfully", res);
    }, (err) => {
      console.log(err);
    });
  }

  get inquiry_form() {
    return this.inquiryForm.controls;
  }

}
