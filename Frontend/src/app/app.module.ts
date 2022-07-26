import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {ReactiveFormsModule} from '@angular/forms';
import { RootuserComponent } from './rootuser/rootuser.component';
import { AddpostComponent } from './addpost/addpost.component';
import { ViewpostComponent } from './viewpost/viewpost.component';
import { PostupdateComponent } from './postupdate/postupdate.component';
import { CategoryComponent } from './category/category.component';
import { AdminuserComponent } from './adminuser/adminuser.component';
import { AuthenticateduserComponent } from './authenticateduser/authenticateduser.component';
import { AdduserComponent } from './adduser/adduser.component';
import { AdduserupdateComponent } from './adduserupdate/adduserupdate.component';
import { MypostsComponent } from './myposts/myposts.component';
import { AuaddpostComponent } from './auaddpost/auaddpost.component';
import { AuviewpostComponent } from './auviewpost/auviewpost.component';
import { ViewcategoryComponent } from './viewcategory/viewcategory.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { ReadpostComponent } from './readpost/readpost.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    RootuserComponent,
    AddpostComponent,
    ViewpostComponent,
    PostupdateComponent,
    CategoryComponent,
    AdminuserComponent,
    AuthenticateduserComponent,
    AdduserComponent,
    AdduserupdateComponent,
    MypostsComponent,
    AuaddpostComponent,
    AuviewpostComponent,
    ViewcategoryComponent,
    CategoryupdateComponent,
    ReadpostComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
   

  
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
