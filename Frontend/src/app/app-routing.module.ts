import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { PostupdateComponent } from './postupdate/postupdate.component';
import { CategoryComponent } from './category/category.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RootuserComponent } from './rootuser/rootuser.component';
import { AddpostComponent } from './addpost/addpost.component';
const routes: Routes = [  
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'rootuser',component:RootuserComponent,children:[
    {path:'addpost',component:AddpostComponent},
    {path:'viewpost',component:ViewpostComponent},
    {path:'category',component:CategoryComponent}
  ]},
  {path:'postupdate',component:PostupdateComponent}
  ];
  
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
