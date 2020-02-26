import { FormControl } from '@angular/forms';
import validator from 'validator';

export function ValidateEmail(control: FormControl) {
    if (validator.isEmpty(control.value)) {
        return { valid: false, error:"Email is required" };
    }else if (!validator.isEmail(control.value)) {
        return { valid: false, error:"Invalid Email pattern" };
    }
    return null
}

export function ValidatePassword(control: FormControl) {
    
    if (validator.isEmpty(control.value)) {
        return { valid: false, error:"Password is required" };
    }else if (validator.contains(control.value," ")) {
        return { valid: false, error:"Password can not contain space character" };
    }else if (!validator.isLength(control.value,{min:6})) {
        return { valid: false, error:"Password must be at least 6 characters" };
    }else if (!validator.isLength(control.value,{max:15})) {
        return { valid: false, error:"Password must be at most 15 characters" };
    }
    return null
}


