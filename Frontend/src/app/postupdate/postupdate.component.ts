import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-postupdate',
  templateUrl: './postupdate.component.html',
  styleUrls: ['./postupdate.component.css']
})
export class PostupdateComponent implements OnInit {
  profileItem= {
    profileId:'',
    title :'',
    slug:'',
    body:'',
    date:'',
    }
  constructor(private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    let profileId = localStorage.getItem("editProductId");
    console.log(profileId)
    this.adminprofileservice.getProfile(profileId).subscribe((data)=>{
      this.profileItem=JSON.parse(JSON.stringify(data));
    
      console.log(this.profileItem)
  })
  }
  editProduct()
  {    
    this.adminprofileservice.editProduct(this.profileItem);
    alert("Success");
    this.router.navigate(['/rootuser/viewpost']);
  }
}

