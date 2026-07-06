import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Auth } from '../../services/auth';
import { Router, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: Auth,
    private router: Router,
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  login() {

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  const { email, password } = this.loginForm.value;

  console.log(email, password);

  const users = this.authService.getUsers();

  const user = users.find(
    u => u.email === email && u.password === password
  );

  console.log("User found:", user);

  if (user) {
    alert("Login successful!");
    this.router.navigate(['/dashboard']);
  } else {
    alert("Invalid email or password.");
  }
    
    this.loginForm.reset();
}
}
