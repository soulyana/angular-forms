import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  ValidatorFn,
  AbstractControl
} from '@angular/forms';
import { Observable } from 'rxjs';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      projectName: new FormControl(null, [
        Validators.required,
        CustomValidators.invalidProjectName, CustomValidators.asyncInvalidProjectName
      ]),
      email: new FormControl(null, [Validators.email, Validators.required]),
      projectStatus: new FormControl('critical')
    });
  }

  // forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  //   return (control: AbstractControl): { [key: string]: any } | null => {
  //     const forbidden = nameRe.test(control.value);
  //     return forbidden ? { forbiddenName: { value: control.value } } : null;
  //   };
  // }

  onSubmit() {
    console.log(this.projectForm.value);
  }
}
