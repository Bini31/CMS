import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import  {PostModel} from '../services/ViewPostModel';
import {Router} from '@angular/router'
@Component({
  selector: 'app-viewpost',
  templateUrl: './viewpost.component.html',
  styleUrls: ['./viewpost.component.css']
})
export class ViewpostComponent implements OnInit {
  postmodel:PostModel[]=[]
  profiles=[{
    profileId:'',
      title:'',
      slug:'',
      body:'',
      date:'',
     
     }]
  constructor( private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    this.adminprofileservice.getProfiles().subscribe((data)=>{
      
  
      
      

      this.profiles=JSON.parse(JSON.stringify(data));
    //const ids=this.profilemodel.map((obj)=>obj._id)
    //  console.log(ids)
      //console.log(this.profilemodel.)
      //console.log(this.profile.name)
      
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
       
        this.profiles= this.profiles.filter(p => p !== i)
       
        //console.log(profile.email);

  })
  alert("Deleted Successfully");
  window.location.reload();
}
  
}
