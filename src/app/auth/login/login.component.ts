import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FirebaseError } from 'firebase/app';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  adminLoginForm: FormGroup;
  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) { }
  ngOnInit(): void {
    this.adminLoginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get f() {
    return this.adminLoginForm.controls
  }

  async login() {
    this.authService.login(this.f['email'].value, this.f['password'].value)
    .then(()=>{
      console.log("Successfully logged IN")
      this.router.navigate(['/dashBoard'])
    })
    .catch(err=>{
      console.log("login failed")
      console.log(err.message)
    })
   
  }
}
