import { Component, OnDestroy, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms'
import {Router} from "@angular/router"
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  formData: FormGroup;

  constructor(private router : Router  ) { }

  ngOnInit() {
     this.formData = new FormGroup({
        userName: new FormControl("admin"),
        password: new FormControl("admin"),
     });
  }

   
  handleLoginEmail(event : any){
     this.userName =event.target.value;
     
  }

  handleLoginPassword(event : any){
   this.password =event.target.value;
    
   }

   handleLoginSubmit(){
      let payload ={
         userName:this.userName,
         password:this.password
      }
      console.log(payload)
      localStorage.setItem("user",JSON.stringify(payload))
      this.router.navigate(['/'])
   }

    
  
}