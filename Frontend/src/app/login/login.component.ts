import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  submitted = false;
  
  loginForm=new FormGroup({
   
    email1:new FormControl('',[Validators.required, Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/)])
  })

  constructor(private fb:FormBuilder,private router:Router,private logservice: AuthservicesService) { }

  ngOnInit(): void {
  }
  onLogin() {
    this.submitted = true;
    let data=this.loginForm.value;
    //if (this.loginForm.valid) {
     // alert('Form Submitted succesfully!!!\n Check the values in browser console.');
      //console.table(this.loginForm.value);
      this.logservice.loginData(data) .subscribe(
        
        res=>{
          if(res.success){
            localStorage.setItem('token',res.token)
            localStorage.setItem('userrole',res.userrole)
            localStorage.setItem('usermail',res.useremail)

            localStorage.setItem('username',res.username)

            //this.router.navigate(['rootuser']);
            if(res.userrole=="SuperAdmin")
            {
            this.router.navigate(['/rootuser']);
            alert(res.message);

            localStorage.setItem('username',res.username)
            }
            else if(res.userrole=="Admin")
            {
            this.router.navigate(['/adminuser']);
            alert(res.message);
            }
            else if(res.userrole=="User")
            {
              this.router.navigate(['/auuser'])
              alert(res.message);
            }
          }
else{
  alert(res.message)
}
        },
        err=>{
          alert("Login Failed")
        }
        
      )
    
   
  }

}
