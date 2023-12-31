import { Component, OnInit } from '@angular/core';
import { LoginService
 } from 'src/app/services/login/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private loginService: LoginService) { 
    this.loginService.getAuthToken();
  }

  ngOnInit(): void {
  }
}
