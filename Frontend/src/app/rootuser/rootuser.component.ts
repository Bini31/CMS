import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rootuser',
  templateUrl: './rootuser.component.html',
  styleUrls: ['./rootuser.component.css']
})
export class RootuserComponent implements OnInit {
  username= localStorage.getItem('username')
  constructor() { }

  ngOnInit(): void {
  }

}
