import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FirebaseService }  from '../../services/firebase.service'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm = new FormGroup({
    email: new FormControl(''),
    pass: new FormControl('')

  })

  constructor(
    private firebaseService: FirebaseService
  ) { }

  ngOnInit() {
  }

  onLogin() {
    this.firebaseService.login(this.loginForm.value.email, this.loginForm.value.pass).then(resp => {
      console.log('response login -->', resp);
    }).catch(error => {
      console.error('error login -->', error);
    })
  }

}
