import { Component } from '@angular/core';
import { LivreService } from '../services/livre/livre.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-normal',
  templateUrl: './normal.component.html',
  styleUrls: ['./normal.component.scss'],
})
export class NormalComponent {
  livres: any[] = [];

  constructor(private livreService: LivreService) {}

  ngOnInit(): void {
    this.LivresList();
  }

  LivresList() {
    this.livreService.getLivres().subscribe((res: any) => {
      this.livres = res;
    });
  }
}
