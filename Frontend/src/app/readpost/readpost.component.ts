import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-readpost',
  templateUrl: './readpost.component.html',
  styleUrls: ['./readpost.component.css']
})
export class ReadpostComponent implements OnInit {
  readItem= {
    profileId:'',
    title :'',
    slug:'',
    body:'',
    date:'',
    category:''
    }
  constructor(private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    let profileId = localStorage.getItem("ProductId");
    console.log(profileId)
    this.adminprofileservice.get(profileId).subscribe((data)=>{
      this.readItem=JSON.parse(JSON.stringify(data));
  
    
})

}
}

