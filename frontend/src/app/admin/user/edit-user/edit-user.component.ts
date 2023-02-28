import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent {
  validForm = false;
  userId: any;
  user: any;

  userForm = new FormGroup({
    lastName: new FormControl("", Validators.required),
    firstName: new FormControl("", Validators.required),
    address: new FormControl("", Validators.required),
    role: new FormControl(0, [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required]),
  });

  constructor(private userService: UserService, private route:ActivatedRoute) {}
  ngOnInit() {
    this.userId = this.route.snapshot.params["id"];
    this.myUser();
  }
  
  myUser() {
    this.userService
      .getUser(this.userId)
      .subscribe((res: any) => {
        this.user = res;
        this.userForm.patchValue(res);
      });
  }
  
  update() {
    this.validForm = true;
    if (this.userForm.invalid) {
      return;
    }

    this.userService
      .updateUser(this.userId, this.userForm.value)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }

}

