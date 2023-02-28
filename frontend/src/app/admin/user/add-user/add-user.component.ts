import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  validForm = false;
  userForm = new FormGroup({
    lastName: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    role: new FormControl(0, [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
    ]),
  });

  constructor(private userService: UserService, private route: Router) {}
  ngOnInit() {}

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.userForm.invalid) {
      return;
    }
    this.userService
      .createUser(this.userForm.value)
      .subscribe((res: any) => {});
    this.route.navigate(['/dashboard']);
  }
}
