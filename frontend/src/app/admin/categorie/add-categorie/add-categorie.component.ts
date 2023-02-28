import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategorieService } from '../../../services/categorie/categorie.service';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss'],
})
export class AddCategorieComponent implements OnInit {
  validForm = false;

  constructor(private categorieService: CategorieService) {}
  ngOnInit() {}

  categorieForm = new FormGroup({
    nomCategorie: new FormControl('', Validators.required),
  });

  onSubmitFormGroupe() {
    this.validForm = true;
    if (this.categorieForm.invalid) {
      return;
    }
    this.categorieService
      .createCategorie(this.categorieForm.value)
      .subscribe((res: any) => {});
  }
}
