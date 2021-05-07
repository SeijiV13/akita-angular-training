import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../state/user.service';
import { User } from '../../state/user.model';
import { UserStore } from '../../state/user.store';
import { UserQuery } from '../../state/user.query';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  action: string;
  user$;
  user: User;
  constructor(private activatedRoute: ActivatedRoute,
    private userQuery: UserQuery,
    private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.checkRoutes();
    this.getSelectedUser();
  }
  checkRoutes() {
    this.action = this.activatedRoute.snapshot.paramMap.get('action');
  }

  getSelectedUser() {
    // store query
    this.user$ = this.userQuery.selectActive();
    // service getter
    this.user = this.userService.getSelectedUser();
  }

  submit(data:{form: FormGroup, action: string}) {
    if(data.action === "create") {
       this.userService.addUser(data.form.value as User).subscribe(() => {
         this.router.navigate(['home']);
       });
    }
    else if(data.action === "update") {
      this.userService.updateUser(data.form.value as User).subscribe(() => {
        this.router.navigate(['home'])
      })
    }
  }


}
