import { Injectable } from '@angular/core';
import { ValidatorFn, AbstractControl,ValidationErrors } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class CustomvalidatorService {
  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key:string]:any} => {
      if (!control.value) {
        // if control is empty return no error
       return {};
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$')
      // test the value of the control against the regexp supplied
      const valid = regex.test(control.value);
      
      return valid ? {}:{ invalidPassword: true };
      
      // if true, return no error (no error), else return error passed in the second parameter
    
    };
  }
  constructor() { }
}
