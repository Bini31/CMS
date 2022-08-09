import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import  {PostModel} from '../services/ViewPostModel';
import {Router} from '@angular/router'
import { CategoryModel } from '../services/CategoryModel';
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  category:CategoryModel[]=[]
  postmodel:PostModel[]=[]
  profiles=[{
    profileId:'',
      title:'',
      slug:'',
      body:'',
      date:'',
      category:'',
     email:''
     }]
  constructor( public adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    this.adminprofileservice.getProfiles().subscribe((data)=>{
      this.profiles=JSON.parse(JSON.stringify(data));
      console.log(data)
 
   
    // const email=this.postmodel.map((obj)=>obj.email)
    //  console.log(email)
      //console.log(this.profilemodel.)
      //console.log(this.profile.name)
      
  })
  this.adminprofileservice.getCategories().subscribe((data)=>{
    this.category=JSON.parse(JSON.stringify(data));
  
    console.log(this.category)
})
  }
  editProduct(i:any)
  {
    localStorage.setItem("editProductId", i._id.toString())
    
   let profileId = localStorage.getItem("editProductId");
    this.router.navigate(['/postupdate']);

  }
  deleteProduct(i:any)
  {     alert("Deleted Successfully");
    this.adminprofileservice.deleteProduct(i._id)
  
      .subscribe((data) => {
   
        this.profiles= this.profiles.filter(p => p !== i)
        
        //console.log(profile.email);

  })
  window.location.reload();
}

 get(i:any){
  localStorage.setItem("ProductId", i._id.toString())
 let readpost=localStorage.getItem("ProductId")
 this.adminprofileservice.get(readpost)
  this.router.navigate(['/readpost']);
 } 
}
