import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import  {ProfileModel} from '../services/ProfileModel'
import {Router} from '@angular/router'
@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  profilemodel:ProfileModel[]=[]
  users=[{
    userId:'',
      name:'',
      email:'',
       userrole:'',
     
     }]
  constructor(private adminprofileservice: AuthservicesService,private router:Router) { }

  ngOnInit(): void {
  
  this.adminprofileservice.getUsers().subscribe((data)=>{
      
  
      
      

    this.users=JSON.parse(JSON.stringify(data));
  //const ids=this.profilemodel.map((obj)=>obj._id)
  //  console.log(ids)
    //console.log(this.profilemodel.)
    //console.log(this.profile.name)
    
})
}
editUser(i:any)
{
  localStorage.setItem("edituserId", i._id.toString())
  
 // let profileId = localStorage.getItem("editProductId");
  this.router.navigate(['/userupdate']);

}
deleteUser(i:any)
{
  this.adminprofileservice.deleteUser(i._id)

    .subscribe((data) => {
      alert("Deleted Successfully");
      this.users= this.users.filter(p => p !== i)
  
      //console.log(profile.email);

})
window.location.reload();
}

}
