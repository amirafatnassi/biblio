import { Component } from '@angular/core';
import { LivreService } from '../../services/livre/livre.service';
import Swal from 'sweetalert2';
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/user/user.service';
import { HttpClient } from '@angular/common/http';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.scss'],
})
export class LivreComponent {
  livres: any[] = [];
  fileName = 'ExcelSheet.xlsx';
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

  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
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
