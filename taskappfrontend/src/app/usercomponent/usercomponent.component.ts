import Toastify from 'toastify-js';
import "toastify-js/src/toastify.css";

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserserviceService } from '../userservice.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usercomponent',
  imports: [CommonModule,FormsModule],
  templateUrl: './usercomponent.component.html',
  styleUrl: './usercomponent.component.css'
})
export class UsercomponentComponent {
       userobj : User = new User();
       constructor(private userService : UserserviceService,private router:Router){}
       ngOnInit(){}
      //  storeValue(){
      //      this.userService.createUser(this.userobj).subscribe(data=>{
      //       this.userobj = new User();
      //      })
      //  }
      checkLogin(){
        this.userService.validateUser(this.userobj).subscribe(data=>{
             if(data){
              console.log("Valid user");
              localStorage.setItem("user",this.userobj.username);
              this.router.navigate(["view",this.userobj.username]);
             }
             else{
              Toastify({
                            text: "Please Enter Valid Credentials",
                            duration: 2000, 
                            gravity: "top", 
                            position: "right", 
                            backgroundColor: "linear-gradient(to right, #ff416c, #ff4b2b)",
                          }).showToast();
              console.log("Invalid User");
             }
        })
      }
      newaccount(){
        this.router.navigate(['newaccount'])
      }

}
