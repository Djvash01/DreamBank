import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParticlesConfig } from 'src/app/shared/particles/particles-config';

declare const particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.pattern('[0-9]+'), Validators.required]],
      password: ['', Validators.required]
    });

    if(particlesJS){
      particlesJS('particles-js', ParticlesConfig, function() {});
    }

  }

  submit(){

  }

  get formControls(){
    return this.loginForm.controls;
  }

  getErrorMessage() {
    if (this.loginForm.controls.password.hasError('required')) {
      return 'Please, enter a valid password';
    }
    return '';
  }

}
