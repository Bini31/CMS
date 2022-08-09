import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RootuserComponent } from './rootuser/rootuser.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { MypostsComponent } from './myposts/myposts.component';
import { PostupdateComponent } from './postupdate/postupdate.component';
import { CategoryComponent } from './category/category.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdduserupdateComponent } from './adduserupdate/adduserupdate.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AuaddpostComponent } from './auaddpost/auaddpost.component';
import { AuviewpostComponent } from './auviewpost/auviewpost.component';
import { AuthenticateduserComponent } from './authenticateduser/authenticateduser.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { ReadpostComponent } from './readpost/readpost.component';
//import { MypostupdateComponent } from './mypostupdate/mypostupdate.component';
const routes: Routes = [  
{path:'',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'rootuser',component:RootuserComponent,children:[
  {path:'addpost',component:AddpostComponent},
  {path:'viewpost',component:ViewpostComponent},
  {path:'viewcategory',component:ViewcategoryComponent},
  {path:'category',component:CategoryComponent},
  {path:'users',component:AdduserComponent}
]},
{path:'postupdate',component:PostupdateComponent},
{path:'readpost',component:ReadpostComponent},
{path:'categoryupdate',component:CategoryupdateComponent},
{path:'userupdate',component:AdduserupdateComponent},
{path:'adminuser',component:AdminuserComponent},
{path:'auuser',component:AuthenticateduserComponent,children:[
  {path:'mypost',component:MypostsComponent},
  {path:'auviewpost',component:AuviewpostComponent},
  
  {path:'auaddpost',component:AuaddpostComponent}
]}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
