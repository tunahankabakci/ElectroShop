import { FormControl } from '@angular/forms';
import validator from 'validator';

export function ValidateEmail(control: FormControl) {
    if (validator.isEmpty(control.value)) {
        return { valid: false, error: "Email required" };
    } else if (!validator.isEmail(control.value)) {
        return { valid: false, error: "Invalid Email pattern" };
    }
    return null
}

export function ValidatePassword(control: FormControl) {

    if (validator.isEmpty(control.value)) {
        return { valid: false, error: "Password required" };
    } else if (validator.contains(control.value, " ")) {
        return { valid: false, error: "Password can not contain space character" };
    } else if (!validator.isLength(control.value, { min: 6 })) {
        return { valid: false, error: "Password must be at least 6 characters" };
    } else if (!validator.isLength(control.value, { max: 15 })) {
        return { valid: false, error: "Password must be at most 15 characters" };
    }
    return null
}

export function ValidateFirstName(control: FormControl) {
    if (validator.isEmpty(control.value)) {
        return { valid: false, error: "Firstname required" };
    } else if (
        !validator.isAlpha(control.value, ['tr-TR']) &&
        !validator.isAlpha(control.value, ['ru-RU']) &&
        !validator.isAlpha(control.value, ['en-US']) &&
        !validator.isAlpha(control.value, ['de-DE']) &&
        !validator.isAlpha(control.value, ['es-ES'])
    ) {
        return { valid: false, error: "Firstname can not contain special characters or numbers" };
    } else if (!validator.isLength(control.value, { min: 2 })) {
        return { valid: false, error: "Firstname must be at least 2 characters" };
    } else if (!validator.isLength(control.value, { max: 30 })) {
        return { valid: false, error: "Firstname must be at most 30 characters" };
    }
    return null
}

export function ValidateLastName(control: FormControl) {
    if (validator.isEmpty(control.value)) {
        return { valid: false, error: "Lastname required" };
    } else if (
        !validator.isAlpha(control.value, ['tr-TR']) &&
        !validator.isAlpha(control.value, ['ru-RU']) &&
        !validator.isAlpha(control.value, ['en-US']) &&
        !validator.isAlpha(control.value, ['de-DE']) &&
        !validator.isAlpha(control.value, ['es-ES'])
    ) {
        return { valid: false, error: "Lastname can not contain special characters or numbers" };
    } else if (!validator.isLength(control.value, { min: 2 })) {
        return { valid: false, error: "Lastname must be at least 2 characters" };
    } else if (!validator.isLength(control.value, { max: 30 })) {
        return { valid: false, error: "Lastname must be at most 30 characters" };
    }
    return null
}


