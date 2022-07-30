import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(public auth:AuthservicesService,private routes:Router) { }
//   registerForm=new FormGroup({
//   userrole: new FormControl('Buyer', Validators.required)
// })
  ngOnInit(): void {
  }
  logOut(){
    localStorage.removeItem('token')
    localStorage.removeItem('userrole')
    localStorage.removeItem('username')
    this.routes.navigate(['/'])
      }
}
