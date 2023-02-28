import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategorieService } from '../../../services/categorie/categorie.service';

@Component({
  selector: 'app-edit-categorie',
  templateUrl: './edit-categorie.component.html',
  styleUrls: ['./edit-categorie.component.scss'],
})
export class EditCategorieComponent {
  validForm = false;
  categorie: any;
  categorieId: any;
  categorieForm = new FormGroup({
    nomCategorie: new FormControl(''),
  });

  constructor(
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categorieId = this.route.snapshot.params['id'];
    this.myCategorie();
  }

  myCategorie() {
    this.categorieService.getCategorie(this.categorieId).subscribe((res: any) => {
      this.categorie = res;
      this.categorieForm.patchValue(res);
    });
  }

  update() {
    this.validForm = true;
    if (this.categorieForm.invalid) {
      return;
    }

    this.categorieService
      .updateCategorie(this.categorieId, this.categorieForm.value)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }
}
