import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import  {PostModel} from '../services/ViewPostModel';
import {Router} from '@angular/router'
import { CategoryModel } from '../services/CategoryModel';
@Component({
  selector: 'app-myposts',
  templateUrl: './myposts.component.html',
  styleUrls: ['./myposts.component.css']
})
export class MypostsComponent implements OnInit {

  category:CategoryModel[]=[]
  postmodel:PostModel[]=[]
  profiless=[{
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
    let email= localStorage.getItem("usermail");
    this.adminprofileservice.getmyPost(email).subscribe((data)=>{
      this.profiless=JSON.parse(JSON.stringify(data));
    
      console.log(data)
 
   
      
  })
  this.adminprofileservice.getCategories().subscribe((data)=>{
    this.category=JSON.parse(JSON.stringify(data));
  
    console.log(this.category)
})
  }
  editProduct(i:any)
  {
    localStorage.setItem("editProductId", i._id.toString())
    
   // let profileId = localStorage.getItem("editProductId");
    this.router.navigate(['/postupdate']);

  }
  deleteProduct(i:any)
  {
    this.adminprofileservice.deleteProduct(i._id)
 
      .subscribe((data) => {
        alert("Deleted Successfully");
        this.profiless= this.profiless.filter(p => p !== i)
    
        //console.log(profile.email);

  })
  window.location.reload();
}
  

}

