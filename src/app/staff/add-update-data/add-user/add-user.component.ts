import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';
import { Tecsauser } from 'src/app/interfaces/tecsauser';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  addUser: FormGroup;
  
  hide = true;
  //fecha = [this.date.getFullYear,'-',this.date.getMonth,'-', this.date.getDay].toString;

  dates = new Date()

  /*anio = this.dates.getFullYear().toString;
  mes= this.dates.getMonth().toString;
  dia = this.dates.getDate().toString;

  fechas: any = this.anio+'-'+this.mes+'-'+ this.anio*/
  /*formatoFecha(date: Date, format: String) {
    const map = {
      dd: date.getDate(),
      mm: date.getMonth() + 1,
      yy: date.getFullYear().toString().slice(-2),
      yyyy: date.getFullYear(),

      //datecomplete: any = [dd,'-',mm'-',yyyy].toString
    }  
    //return format.replace(/yyyy|mm|dd|yy/gi, matched => map[matched])
    return map
  }*/
  

  

// LEER MODULO --> DEPARTAMENTO
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

  constructor(private fb: FormBuilder /*, public date: Date*/) { 
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

  addUserDB(){
    console.log(this.addUser)

    const user: Tecsauser = {
      NameUser: this.addUser.get('Nombre')?.value,
      EmailUser: this.addUser.get('Correo')?.value,
      PasswordUser: this.addUser.get('Password')?.value,
      DateUser: this.dates,
      IdRol: this.addUser.get('Id_module')?.value
    }

    console.log(user);
    console.log(this.dates)
  }
  

}


