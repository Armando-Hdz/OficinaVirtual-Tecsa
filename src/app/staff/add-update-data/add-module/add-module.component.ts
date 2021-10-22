import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Module } from 'src/app/interfaces/module';

@Component({
  selector: 'app-add-module',
  templateUrl: './add-module.component.html',
  styleUrls: ['./add-module.component.scss']
})
export class AddModuleComponent implements OnInit {

  addModule: FormGroup;

  constructor(private fb: FormBuilder) {
    this.addModule = this.fb.group(
      {
        Title_Module: ['',Validators.required],
      }
    )
   }

  ngOnInit(): void {
  }

  addModuleDB(){
    console.log(this.addModule)
    
    const module: Module = {
      Name_module: this.addModule.get('Title_Module')?.value
    }
  
    console.log(module)
  }

}
