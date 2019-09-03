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
 forbiddenUsernames = ['Chris', 'Anna'];

 ngOnInit() {
   this.signupForm = new FormGroup({
     'userData': new FormGroup({
       'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
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

forbiddenNames(control: FormControl): {[s: string]: boolean} {
  if (this.forbiddenUsernames.indexOf(control.value) !== -1) {
    return {'nameIsForbidden': true};
  }
  return null;
}

onSubmit() {
   console.log(this.signupForm);
 }
}
