import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authenticateduser',
  templateUrl: './authenticateduser.component.html',
  styleUrls: ['./authenticateduser.component.css']
})
export class AuthenticateduserComponent implements OnInit {
  username= localStorage.getItem('username')
  constructor() { }

  ngOnInit(): void {
  }

}
