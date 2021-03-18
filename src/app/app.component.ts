import { Component  } from '@angular/core';
import { Router  } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent   {
  title="Movie House"
  user=null;
  constructor(  private router : Router  ) { } 
   
  ngDoCheck() {
 
      let obj= JSON.parse(localStorage.getItem('user'))
      if(obj) 
       this.user=obj;
   
}
  

 logout(){
   
  this.user=null;
  localStorage.removeItem('user')
   this.router.navigate(['/login'])
 }

}
