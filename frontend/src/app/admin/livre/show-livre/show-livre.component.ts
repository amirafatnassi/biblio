import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../../../services/livre/livre.service';
import { UserService } from '../../../services/user/user.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-show-livre',
  templateUrl: './show-livre.component.html',
  styleUrls: ['./show-livre.component.scss'],
})
export class ShowLivreComponent {
  livre: any;
  livreId: any;
  pdfUrl: string = '';
  downloads: number = 0;
  user: any;

  constructor(
    private livreService: LivreService,
    private userService: UserService,
    private route: ActivatedRoute,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.livreId = this.route.snapshot.params['id'];
    this.Monlivre();
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userId = decodedToken.userId;
      this.userService.getUser(userId).subscribe((res: any) => {
        this.user = res;
        this.downloads = this.user.downloads;
      });
    }
  }

  Monlivre() {
    this.livreService.getLivre(this.livreId).subscribe((res: any) => {
      let arr = [0, 0, 0, 0, 0];
      for (let i = 0; i < res.rating; i++) {
        arr[i] = 1;
      }
      res.rating = arr;
      this.livre = res;
      this.pdfUrl = res.contenu;
    });
  }

  suppLivre(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûre?',
      showCancelButton: true,
      confirmButtonColor: 'btn btn-primary',
      cancelButtonColor: 'btn btn-secondary',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.livreService.deleteLivre(id).subscribe((res: any) => {
          this.ngOnInit();
        });
      }
    });
  }

  downloadPdf(url: string) {
    if (this.downloads < 5) {
      const pdfUrl = 'http://localhost:4000/pdfFolder/' + url;
      this.downloads++;
      this.user.downloads = this.downloads;
      this.userService
        .updateUser(this.user._id, this.user)
        .subscribe((res: any) => {});

      this.http
        .get(pdfUrl, { responseType: 'blob' })
        .subscribe((blob: Blob) => {
          const fileUrl = URL.createObjectURL(blob);
          window.open(fileUrl, '_blank');
        });
      this.toastr.success('File downloaded successfulley', 'Success!');
    } else {
      this.toastr.error(
        'Vous avez surpassé la limite de téléchargement de ce mois !',
        'Error!'
      );
    }
  }
}
