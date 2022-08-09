import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
  
  constructor(private http:HttpClient) { }
  registerData(data:any) :Observable<any>{

    //console.log("data from Service file" , data)

    return this.http.post<any>("http://localhost:3000/users/register", data)
  }
  categoryData(data:any) :Observable<any>{

    //console.log("data from Service file" , data)

    return this.http.post<any>("http://localhost:3000/users/category", data)
  }
  loginData(data:any):Observable<any>{
  
    console.log("data from Service file" , data)
   
    return this.http.post<any>("http://localhost:3000/users/login",data)
  }
  addPostData(data:any) :Observable<any>{

    //console.log("data from Service file" , data)

    return this.http.post<any>("http://localhost:3000/users/addpost", data)
  }
  loggedIn()
  {
    return !!localStorage.getItem('token')
  
  }
  superadminCheck(){
    var usermail=localStorage.getItem('usermail')
    if(usermail=="superadmin@gmail.com"){
      return true;
    }
    else {
      return false
    }
  }
 
  getProfiles() {
    return this.http.get('http://localhost:3000/users/profile')
  }getUsers() {
    return this.http.get('http://localhost:3000/users/users')
  }
  getUser(id:any) {
    return this.http.get('http://localhost:3000/users/users/'+id)
  }
  getCategory(id:any){
    return this.http.get('http://localhost:3000/users/categories/'+id)
  }
  getCategories() {
    return this.http.get('http://localhost:3000/users/category')
  }
  getProfile(id:any) {
    return this.http.get('http://localhost:3000/users/'+id)
  }
  get(id:any){
    return this.http.get('http://localhost:3000/users/readpost/'+id)
  }
  deleteProduct(id:any)
  {
  
    return this.http.delete("http://localhost:3000/users/remove/"+id)

  }
  deleteCategory(id:any)
  {
  
    return this.http.delete("http://localhost:3000/users/categoryremove/"+id)

  }
  editProduct(profile:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/users/update",profile)
    .subscribe(data =>{console.log(data)})

  }
  editCategory(profile:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/users/categoryupdate",profile)
    .subscribe(data =>{console.log(data)})

  }
 
  deleteUser(id:any)
  {
  
    return this.http.delete("http://localhost:3000/users/removeuser/"+id)

  }
  editUser(profile:any)
  {
    console.log('client update')
    return this.http.put("http://localhost:3000/users/updateuser",profile)
    .subscribe(data =>{console.log(data)})

  }
  adminCheck(){
    var user=localStorage.getItem('userrole')
    if(user=="Admin"){
      return true;
    }
    else {
      return false
    }
  }
  superAdminCheck(){
    var user=localStorage.getItem('userrole')
    if(user=="SuperAdmin"){
      return true;
    }
    else {
      return false
    }
  }
 
  auCheck(){
    var user=localStorage.getItem('userrole')
    if(user=="User"){
      return true;
    }
    else {
      return false
    }

    
  }
  getmyPost(email:any){
    return this.http.get('http://localhost:3000/users/myposts/'+email)
  }
}
