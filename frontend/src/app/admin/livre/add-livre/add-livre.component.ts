import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LivreService } from '../../../services/livre/livre.service';
import { CategorieService } from '../../../services/categorie/categorie.service';

@Component({
  selector: 'app-add-livre',
  templateUrl: './add-livre.component.html',
  styleUrls: ['./add-livre.component.scss'],
})
export class AddLivreComponent implements OnInit {
  livreForm!: FormGroup;
  validForm = false;
  categories: any[] = [];
  selectedFile?: File;

  constructor(
    private livreService: LivreService,
    private categorieService: CategorieService
  ) {}
  
  ngOnInit() {
    this.categoriesList();
    this.livreForm = new FormGroup({
      titre: new FormControl('', Validators.required),
      auteur: new FormControl('', Validators.required),
      categorie: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      contenu: new FormControl(''),
    });
  }

  onSubmitFormGroupe() {
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
    this.livreService.createLivre(formData).subscribe((res: any) => {});
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
