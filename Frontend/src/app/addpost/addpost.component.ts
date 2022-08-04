import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { CustomvalidatorService } from '../services/customvalidator.service';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
import { CategoryModel } from '../services/CategoryModel';
@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {
  category:CategoryModel[]=[]
  className=""

    
  
  
  
  submitted = false;
  message='';
  
  isProcessing = false;
 
// profiles=[{
//   profileId:'',
//     categoryname:'',
    
//    }]
  constructor(private fb:FormBuilder,private customValidator: CustomvalidatorService,private _router:Router,private addpostservice: AuthservicesService) { }
  addPost=new FormGroup({
  

    //password:new FormControl('',Validators.compose([Validators.required, this.customValidator.patternValidator()])),
    title: new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z])$/), Validators.maxLength(10)]),
    slug: new FormControl('', [Validators.required, Validators.email]),
    
    body: new FormControl('', Validators.compose([Validators.required, this.customValidator.patternValidator()])),
    date: new FormControl('', Validators.compose([Validators.required, this.customValidator.patternValidator()])),
    category: new FormControl('', Validators.required),
  })
  ngOnInit(): void {
    this.addpostservice.getCategories().subscribe((data)=>{
      this.category=JSON.parse(JSON.stringify(data));
      console.log(this.category)
  })
  
  }

  onAddPost() {
   

  
    let data = this.addPost.value;
  
    console.log(this.addPost.value);
    this.addpostservice.addPostData(data)
    .subscribe(
      res => {
      if(res.success){
        
        
        alert("Post data saved successfully")
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
get(){
  
} 
  onremove(){
    window.location.reload();
  }
  getclassName(){
    return this.className;
  }


}


