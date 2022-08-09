import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../services/authservices.service';
import { Router } from '@angular/router';
import { CategoryModel } from '../services/CategoryModel';
@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent implements OnInit {
  category:CategoryModel[]=[]
  categoryItem= {
    categoryId:'',
    category:'',
    }
  constructor(private adminprofileservice: AuthservicesService,private router:Router ) { }

  ngOnInit(): void {
    let categoryId = localStorage.getItem("categoryId");
    console.log(categoryId)
    this.adminprofileservice.getCategory(categoryId).subscribe((data)=>{
      this.categoryItem=JSON.parse(JSON.stringify(data));
    
      console.log(this.categoryItem)
     
  })
  }
editCategory(){
  this.adminprofileservice.editCategory(this.categoryItem); 
  alert("Success");
  this.router.navigate(['/rootuser/viewcategory']);
}
}
