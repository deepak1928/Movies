import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {MovieListComponent} from "./movie-list/movie-list.component"
import {MovieComponent} from "./movie/movie.component"
import {LoginComponent} from "./login/login.component"
import {RegisterComponent} from "./register/register.component"
import {AccountComponent} from './account/account.component'
const routes:Routes=[
  {path:"", component:MovieListComponent},
  {path:"login",component:LoginComponent},
  {path:"home", component:MovieListComponent},
  {path:"movie",component:MovieComponent},
  {path:"category", component:MovieListComponent},
  {path:"request", component:MovieListComponent},
  {path:"cart", component:MovieListComponent},
  {path:"register",component:RegisterComponent},
  {path:"account",component:AccountComponent}
]


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
