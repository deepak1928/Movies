import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  edit: Boolean = false;
  passwordReset : Boolean =false;
  constructor() { }

  handleEdit(){
    this.edit= true ;
  }
  handlePasswordReset(){
    this.passwordReset= true ;
  }
  handleCancel(){
    this.edit=false;
  }

  handleResetCancel(){
    this.passwordReset=false;
  }
  ngOnInit(): void {
  }

}
