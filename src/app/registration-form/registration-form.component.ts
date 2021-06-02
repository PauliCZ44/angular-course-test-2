import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  submitRegistration(f) {
    console.log(f);
  }

  categories = [
    { name: 'Education', id: 0 },
    { name: 'IT', id: 1 },
    { name: 'Economics', id: 2 }
  ];
}
