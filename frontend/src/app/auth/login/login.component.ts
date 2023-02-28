import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  validForm = false;
  users: any[] = [];
  constructor(
    private userService: UserService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  login() {
    this.validForm = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.userService.login(this.loginForm.value).subscribe(
      (res: any) => {
        if (res) {
          this.toastr.success(res.message, 'Success!');
          localStorage.setItem('token', res.token);
          localStorage.setItem('role', res.userRole);
          if (res.userRole == 'Admin') {
            this.route.navigate(['/admin/livre']);
          } else if (res.userRole == 'Abonne') {
            this.route.navigate(['/abonne/livre']);
          } else if (res.userRole == 'Normal') {
            this.route.navigate(['/normal/livre']);
          } else {
            this.route.navigate(['/welcome']);
          }
        }
      },
      (error: any) => {
        this.toastr.error(error.error.message, 'Error!');
      }
    );
  }
}
