import { Component } from '@angular/core';
import { CategorieService } from '../../services/categorie/categorie.service';
import Swal from "sweetalert2";

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.scss']
})
export class CategorieComponent {
  categories :any[]=[];
  
  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.categoriesList();
  }

  categoriesList(){
    this.categorieService.getCategories().subscribe((res:any)=>{ this.categories=res})
  }

  suppCategorie(id:number){
    Swal.fire({
      title: "Êtes-vous sûre?",
      showCancelButton: true,
      confirmButtonColor: "btn btn-primary",
      cancelButtonColor: "btn btn-secondary",
      confirmButtonText: "Oui, supprimer!",
      cancelButtonText: "Annuler",
    }).then((result) => {
      if (result.isConfirmed) {      
        this.categorieService.deleteCategorie(id).subscribe((res:any)=>{
          this.ngOnInit();
        });
      }
    });
    
  }
  
}

