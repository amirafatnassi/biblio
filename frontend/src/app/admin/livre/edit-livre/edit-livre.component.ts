import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LivreService } from '../../../services/livre/livre.service';
import { CategorieService } from '../../../services/categorie/categorie.service';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.scss'],
})
export class EditLivreComponent {
  validForm = false;
  livreForm!: FormGroup;
  livre: any;
  livreId: any;
  selectedFile?: File;
  categories: any[] = [];

  constructor(
    private livreService: LivreService,
    private categorieService: CategorieService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.livreForm = new FormGroup({
      titre: new FormControl(''),
      auteur: new FormControl(''),
      categorie: new FormControl(''),
      description: new FormControl(''),
    });
    this.livreId = this.route.snapshot.params['id'];
    this.myLivre();
    this.categoriesList();
  }

  myLivre() {
    this.livreService.getLivre(this.livreId).subscribe((res: any) => {
      this.livre = res;
      this.livreForm.patchValue(res);
    });
  }

  update() {
    this.validForm = true;
    if (this.livreForm.invalid) {
      return;
    }

    let formData = new FormData();
    Object.keys(this.livreForm.value).forEach((fieldName: any) => {
      formData.append(fieldName, this.livreForm.value[fieldName]);
    });

    if (this.selectedFile) {
      formData.append('contenu', this.selectedFile);
    }

    this.livreService
      .updateLivre(this.livreId, formData)
      .subscribe((res: any) => {
        this.ngOnInit();
      });
  }

  categoriesList() {
    this.categorieService.getCategories().subscribe((res: any) => {
      this.categories = res;
    });
  }

  onSelectFile(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
