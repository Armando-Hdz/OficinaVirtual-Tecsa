import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';
import { Tecsauser } from 'src/app/interfaces/tecsauser';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup;

  password1: string = '';
  password2: string = '';
  respuesta: Boolean = false;
  //fecha = [this.date.getFullYear,'-',this.date.getMonth,'-', this.date.getDay];

  date = new Date();

  readModule: Module[] = [
    {
      Id_module: 1,
      Name_module: 'ModuleOne'
    },
    {
      Id_module: 2,
      Name_module: 'ModuleTwo'
    }
  ];

  constructor(private fb: FormBuilder /*public date: Date*/) { 
    this.addUser = this.fb.group(
      {
        Nombre: ['', Validators.required],
        Correo: ['', [Validators.required, Validators.email]],
        Password: ['', Validators.required],
        Passwordconf: ['', Validators.required],
        Id_module: ['', Validators.required]

      }
    );
    
    //date = new Date();

    //let year = this.date.getFullYear();
    //let month = this.date.getMonth();
    //let day = this.date.getDay();

  }

  ngOnInit(): void {
  }

  validate_pass(pass1: string, pass2: string){
    this.password1 = pass1;
    this.password2 = pass2;
    
    //this.password1 = (<HTMLInputElement>document.getElementById('password')).value
    //this.password2 = (<HTMLInputElement>document.getElementById('passwordconf')).value
  
    console.log(this.password1);
    console.log(this.password2);
    
    if(this.password1 != this.password2){
        this.respuesta = true
        console.log('Esta es la respuesta de las contraseñas', this.respuesta)
    }
  

  }

  addUserDB(){
    console.log(this.addUser)

    const user: Tecsauser = {
      NameUser: this.addUser.get('Nombre')?.value,
      EmailUser: this.addUser.get('Correo')?.value,
      PasswordUser: this.addUser.get('Password')?.value,
      DateUser: this.date,
      IdRol: this.addUser.get('Id_module')?.value
    }

    console.log(user);
  }
  

}
