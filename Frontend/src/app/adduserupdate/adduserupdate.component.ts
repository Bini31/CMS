import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-adduserupdate',
  templateUrl: './adduserupdate.component.html',
  styleUrls: ['./adduserupdate.component.css']
})
export class AdduserupdateComponent implements OnInit {
  userItem= {
    userId:'',
    name :'',
    email:'',
    userrole:'',
    }
  constructor(private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    let userId = localStorage.getItem("edituserId");
    console.log(userId)
    this.adminprofileservice.getUser(userId).subscribe((data)=>{
      this.userItem=JSON.parse(JSON.stringify(data));
    
      console.log(this.userItem)
  })
  }
  editUser()
  {    
    this.adminprofileservice.editUser(this.userItem);
    alert("Success");
    this.router.navigate(['/rootuser/users']);
  }
}
