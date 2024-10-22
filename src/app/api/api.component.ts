import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent  {
  constructor(private apiservice:DataService,public Dashboard:Router){}
 
  Username:string="";
  password:string="";

  email= new FormControl('',[Validators.required,Validators.email]);
  getErrorMessage(){
    if(this.email.hasError('required')){
      return 'You must enter a value';
    }
    return this.email.hasError('email')?'Not a valid email':'';
  }
  hide=true;
  passemail=new FormGroup({
    email:new FormControl('',Validators.email),
    password:new FormControl('',Validators.required),
    Number:new FormControl('',Validators.required),
  })

  

  pass(){
    console.log(this.passemail.value);
    console.log(this.passemail.get('Number')?.setValue('9390254030'));
    this.apiservice.getdata(this.passemail.value)
    
    
  }

}
