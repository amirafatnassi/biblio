import { Component } from '@angular/core';
import { LivreService } from '../services/livre/livre.service';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-abonne',
  templateUrl: './abonne.component.html',
  styleUrls: ['./abonne.component.scss'],
})
export class AbonneComponent {
  livres: any[] = [];
  downloads: number = 0;
  user: any;

  constructor(
    private livreService: LivreService,
    private userService: UserService,
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.LivresList();
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

  LivresList() {
    this.livreService.getLivres().subscribe((res: any) => {
      this.livres = res;
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
