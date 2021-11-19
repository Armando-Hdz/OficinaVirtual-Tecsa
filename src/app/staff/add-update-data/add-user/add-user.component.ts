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
  
  hide = true;

  answer = false;
  answer1 =false;
  caracteres= '';

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

  constructor(private fb: FormBuilder) { 
    this.addUser = this.fb.group(
      {
        Nombre: ['', Validators.required],
        Correo: ['', [Validators.required, Validators.email]],
        Password: ['', [Validators.required, Validators.minLength(10)]],
        Id_module: ['', Validators.required]
      }
    );
  }



  ngOnInit(): void {
  }

  resetForm(){
    this.addUser.reset();
  }

  addUserDB(){
    console.log(this.addUser)
    
    const user: Tecsauser = {
      Name_user: this.addUser.get('Nombre')?.value,
      Email_user: this.addUser.get('Correo')?.value,
      Password_user: this.addUser.get('Password')?.value,
      Date_user: '' ,
      Id_rol: this.addUser.get('Id_module')?.value
    }
    
    //this.respuesta1 = false;
    console.log(user);
    this.resetForm();
    this.disable();
    
  }

  disable(){
    setTimeout("alert('EL Usuario se ha Agregado')", 500);
  }

  validate(event: Event){
    this.caracteres = (<HTMLInputElement>event.target).value
    //console.log(this.caracteres)
    if(this.caracteres.length > 0 && this.caracteres.length <10 ){
      this.answer= true;
    }
    if (this.caracteres.length >= 10){
      this.answer = false;
    }
  }

  /*checkemail(event: Event){
    this.mail = (<HTMLInputElement>event.target).value
    var filter = /^\w+([\.-]?\w+)*@tecnicaencolectores.com.mx$/;
    if (filter.test(this.mail)){
        alert("Direccion de Correo valida");
    }
    else{
      alert("Direccion invalida");
    }
  }*/

  checkemail(emails:HTMLInputElement){
    let check = emails.value
    // nativa = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/
    //var filter = /^\w+([\.-]?\w+)*@tecnicaencolectores.com.mx$/; 1
    //let filter = /^[^@]+@[tecnicaencolectores.com]+\.[a-zA-Z]{2,} $/;2
    // let bla = /[a-z]+/i\\/@\\/tecnicaencolectores\\/.com\\/.mx/ ---->MIO
    //console.log(check);
    //https://www.youtube.com/watch?v=lvtL8KWpnBc
    let intento1 = /^[A-Z-a-z-0-9-_]+@+[t]+[e]+[c]+[n]+[i]+[c]+[a]+[e]+[n]+[c]+[o]+[l]+[e]+[c]+[t]+[o]+[r]+[e]+[s]+.+[c]+[o]+[m]+.+[m]+[x]/
    if (intento1.test(check)){
      //alert("Direccion de Correo valida");
      this.answer1 = false;
    }
    else{
      //alert("Direccion invalida");
      this.answer1 = true;
    }
    }
  
    

}