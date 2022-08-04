import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  submitted = false;
  
  categoryForm=new FormGroup({
   
    categoryname: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/), Validators.maxLength(10)])
  })

  constructor(private fb:FormBuilder,private router:Router,private categoryservice: AuthservicesService) { }

  ngOnInit(): void {
  }
  onCategory() {
   this.submitted = true;
     let data=this.categoryForm.value;

      console.log(this.categoryForm.value);
      this.categoryservice.categoryData(data) 
      .subscribe(
        res => {
        if(res.success){
          
          
          alert("Category saved successfully")
          window.location.reload();
        }else 
        {
          alert("Not saved ")
          window.location.reload();
        }  
        
       
        },
        err => {
         
      alert("server error")
         
        }
       
      )
    

   
  }

}
