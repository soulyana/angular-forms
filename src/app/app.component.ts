import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 genders = ['male', 'female'];
 signupForm: FormGroup;

 ngOnInit() {
   this.signupForm = new FormGroup({
     'userData': new FormGroup({
       'username': new FormControl(null, Validators.required),
     'email': new FormControl(null, [Validators.required, Validators.email])}),
     'gender': new FormControl('female'),
     'hobbies': new FormArray([])
   });
 }

//  getControls() {
//    return (this.signupForm.get('hobbies') as FormArray).controls;
//  }

getControls() {
  return (<FormArray>this.signupForm.get('hobbies')).controls;
}

onAddHobby() {
  const control = new FormControl(null, Validators.required);
  (<FormArray>this.signupForm.get('hobbies')).push(control);
}
 onSubmit() {
   console.log(this.signupForm);
 }
}
