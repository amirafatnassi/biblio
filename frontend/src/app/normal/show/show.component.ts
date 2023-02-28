import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LivreService } from "../../services/livre/livre.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent {
 

   
      livre: any;
      livreId: any;
      constructor(
        private livreService: LivreService,
        private route: ActivatedRoute
      ) {}
    
      ngOnInit(): void {
        this.livreId = this.route.snapshot.params["id"];
        this.Monlivre();
      }
    
      Monlivre() {
        this.livreService.getLivre(this.livreId).subscribe((res: any) => {
          let arr = [0,0,0,0,0]
          for (let i = 0; i < res.rating ; i++) {
            arr[i]= 1
          }
          res.rating=arr;
          this.livre = res;
        });
      }
    
      suppLivre(id: number) {
        Swal.fire({
          title: "Êtes-vous sûre?",
          showCancelButton: true,
          confirmButtonColor: "btn btn-primary",
          cancelButtonColor: "btn btn-secondary",
          confirmButtonText: "Oui, supprimer!",
          cancelButtonText: "Annuler",
        }).then((result) => {
          if (result.isConfirmed) {
            this.livreService
              .deleteLivre(id)
              .subscribe((res: any) => {
                this.ngOnInit();
              });
          }
        });
      }
    }
