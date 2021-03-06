import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AuthService } from 'src/app/services/auth.service';
import { GetUser } from 'src/app/store/user/user.actions';

declare let particlesJS: any;


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;  

  constructor(
    private fb: FormBuilder, 
    private store: Store,
    private authService: AuthService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      login: ['', [Validators.pattern('[0-9]+'), Validators.required]],
      password: ['', Validators.required]
    });
    particlesJS.load('particles-js', 'assets/particles/particles.json', function() {
      console.log('callback - particles-js config loaded');
    });
  }

  submit(){
    this.authService.signin(this.loginForm.value).subscribe(
      res => {
        sessionStorage.setItem('Authorization', res.token);
        this.store.dispatch(new GetUser(res.user))
        this.router.navigate(['dashboard']);
    },
    err => {
      console.error(err);
    });
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
