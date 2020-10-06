import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { ParticlesConfig } from 'src/app/shared/particles/particles-config';
import { getUser } from 'src/app/store/user/user.actions';
import { UserState } from 'src/app/store/user/user.state';

declare const particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;

  @Select(UserState.getUserData) userData : Observable<User>;
  

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

    if(particlesJS){
      particlesJS('particles-js', ParticlesConfig, function() {});
    }

  }

  submit(){
    this.authService.signin(this.loginForm.value).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('Authorization', res.token);
        this.store.dispatch(new getUser(res.user))
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
