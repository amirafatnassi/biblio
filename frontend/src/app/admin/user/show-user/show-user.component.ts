import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/user/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss'],
})
export class ShowUserComponent {
  user: any;
  userId: any;
  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.params['id'];
    this.MonUtilisateur();
  }

  MonUtilisateur() {
    this.userService.getUser(this.userId).subscribe((res: any) => {
      this.user = res;
    });
  }

  suppUser(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûre?',
      showCancelButton: true,
      confirmButtonColor: 'btn btn-primary',
      cancelButtonColor: 'btn btn-secondary',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService.deleteUser(id).subscribe((res: any) => {
          this.ngOnInit();
        });
      }
    });
  }
}
