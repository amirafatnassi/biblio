import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../../../services/categorie/categorie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-show-categorie',
  templateUrl: './show-categorie.component.html',
  styleUrls: ['./show-categorie.component.scss'],
})
export class ShowCategorieComponent {
  categorie: any;
  categorieId: any;
  constructor(
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.categorieId = this.route.snapshot.params['id'];
    this.Myctaegorie();
  }

  Myctaegorie() {
    this.categorieService.getCategorie(this.categorieId).subscribe((res: any) => {
      let arr = [0, 0, 0, 0, 0];
      for (let i = 0; i < res.rating; i++) {
        arr[i] = 1;
      }
      res.rating = arr;
      this.categorie = res;
    });
  }

  suppCategorie(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûre?',
      showCancelButton: true,
      confirmButtonColor: 'btn btn-primary',
      cancelButtonColor: 'btn btn-secondary',
      confirmButtonText: 'Oui, supprimer!',
      cancelButtonText: 'Annuler',
    }).then((result) => {
      if (result.isConfirmed) {
        this.categorieService.deleteCategorie(id).subscribe((res: any) => {
          this.ngOnInit();
        });
      }
    });
  }
}
