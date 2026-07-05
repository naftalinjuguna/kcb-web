import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { passwordStregthValidator } from '../../validators/password.validator';
import { passwordMatchValidator } from '../../validators/password-match.validator';
import { Auth } from '../../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register {
  registerForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: Auth,
    private router: Router,
  ) {
    this.registerForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(3)]],
        lastName: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
        password: ['', [Validators.required, Validators.minLength(6), passwordStregthValidator]],
        confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
        terms: [false, Validators.requiredTrue],
      },
      {
        validators: passwordMatchValidator,
      },
    );
  }
  
  users: any[] = [];
  

  register() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    const { confirmPassword, ...user } = this.registerForm.value;
    const success = this.authService.register(user);
    
  
      alert('Register Successfully')
    this.registerForm.reset();
    this.router.navigate(['/login']);
    

  }
}
