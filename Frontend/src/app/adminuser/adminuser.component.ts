import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminuser',
  templateUrl: './adminuser.component.html',
  styleUrls: ['./adminuser.component.css']
})
export class AdminuserComponent implements OnInit {
  username= localStorage.getItem('username')
  constructor() { }

  ngOnInit(): void {
  }

}
