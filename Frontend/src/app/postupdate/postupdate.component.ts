import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
import { CategoryModel } from '../services/CategoryModel';
@Component({
  selector: 'app-postupdate',
  templateUrl: './postupdate.component.html',
  styleUrls: ['./postupdate.component.css']
})
export class PostupdateComponent implements OnInit {
  category:CategoryModel[]=[]
   
  profileItem= {
    profileId:'',
    title :'',
    slug:'',
    body:'',
    date:'',
    category:''
    }
  constructor(private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    let profileId = localStorage.getItem("editProductId");
    console.log(profileId)
    this.adminprofileservice.getProfile(profileId).subscribe((data)=>{
      this.profileItem=JSON.parse(JSON.stringify(data));
    
      console.log(this.profileItem)
     
  })
  this.adminprofileservice.getCategories().subscribe((data)=>{
    this.category=JSON.parse(JSON.stringify(data));
    console.log(this.category)})
  }
  editProduct()
  {    let userrole=localStorage.getItem("userrole") 
    this.adminprofileservice.editProduct(this.profileItem);
alert("Success")
    if(userrole=="SuperAdmin")
    {
    this.router.navigate(['/rootuser/viewpost']);
  }
  else if(userrole=="Admin"){
    this.router.navigate(['/rootuser/viewpost']);
  }
  else if(userrole=="User"){
    this.router.navigate(['/auuser/mypost']);
  }
}
  }

