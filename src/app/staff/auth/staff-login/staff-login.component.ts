import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.scss']
})
export class StaffLoginComponent implements OnInit {

  login: FormGroup;

  hide = true;

  constructor(private fb: FormBuilder) { 
    this.login = this.fb.group(
      {
        email: ['',[Validators.required, Validators.email]],
        password: ['', Validators.required] ,
      }
    );
  }

  ngOnInit(): void {
  }

  onLogin(){

  }

}
