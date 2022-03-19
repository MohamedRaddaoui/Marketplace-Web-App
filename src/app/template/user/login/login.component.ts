import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','fonts/icomoon/style.css','css/bootstrap.min.css']
})
export class LoginComponent implements OnInit {

  constructor(private us:UserService) { 
    
   }

  ngOnInit(): void {
  }


}
