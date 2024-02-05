// // signup.component.ts

// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent {
//   username: string = '';
//   email: string = '';
//   password: string = '';

//   signup() {
//     // Implement your sign-up logic here
//     console.log('Signing up...');
//     console.log('Username:', this.username);
//     console.log('Email:', this.email);
//     console.log('Password:', this.password);
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  
})
export class SignupComponent implements OnInit {
  
  signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      // Add validation for other fields
    });
  }

  onSubmit() {
    // Handle form submission logic
    console.log(this.signupForm.value);
  }
}