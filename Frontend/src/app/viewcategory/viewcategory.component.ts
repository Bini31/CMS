import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import {Router} from '@angular/router'
import { CategoryModel } from '../services/CategoryModel';
@Component({
  selector: 'app-viewcategory',
  templateUrl: './viewcategory.component.html',
  styleUrls: ['./viewcategory.component.css']
})
export class ViewcategoryComponent implements OnInit {
  category:CategoryModel[]=[]
  categories=[{
    categoryId:'',
    category:'',
   
     }]
  constructor(public adminprofileservice: AuthservicesService,private router:Router) { }

  ngOnInit(): void {
    this.adminprofileservice.getCategories().subscribe((data)=>{
      this.categories=JSON.parse(JSON.stringify(data));
    
      console.log(this.category)
  })
  }
  editCategory(i:any)
  {
    localStorage.setItem("categoryId", i._id.toString())
    
  //  // let profileId = localStorage.getItem("editProductId");
     this.router.navigate(['/categoryupdate']);

  }
  deleteCategory(i:any)
  {
    alert("Deleted Successfully");
    this.adminprofileservice.deleteCategory(i._id)
  
      .subscribe((data) => {
   
        this.categories= this.categories.filter(p => p !== i)
        
        //console.log(profile.email);

  })
  window.location.reload();
  }
 
}



