import { AbstractControl, ValidationErrors } from "@angular/forms";

export function passwordStregthValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.value;

    if (!password) {
        return null;
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const validPassword = hasUpperCase && hasLowerCase && hasNumber && hasSpecialCharacter;

    if (validPassword) {
        return null;
    }

    return {
        weakPassword: true
    };

}