import { Component, OnInit } from '@angular/core';
import { CategorieplatService } from 'src/app/services/categorieplat.service'; // Adjust path as necessary
import { CategoriePlat } from 'src/app/models/categorieplat'; // Define CategoriePlat model or adjust import as necessary

@Component({
  selector: 'app-datacategorieplat',
  templateUrl: './datacategorieplat.component.html',
  styleUrls: ['./datacategorieplat.component.css']
})
export class DatacategorieplatComponent implements OnInit {

  categoriePlats: CategoriePlat[] = [];

  constructor(private categoriePlatService: CategorieplatService) { }

  ngOnInit(): void {
    this.getAllCategoriePlats();
  }

  getAllCategoriePlats(): void {
    this.categoriePlatService.getAllCategoriePlats().subscribe(
      (data: CategoriePlat[]) => {
        this.categoriePlats = data;
        console.log('List of categoriePlats:', this.categoriePlats);
      },
      (error) => {
        console.error('Error fetching categoriePlats:', error);
      }
    );
  }

  deleteCategoriePlat(id: number): void {
    this.categoriePlatService.deleteCategoriePlat(id).subscribe(
      () => {
        this.categoriePlats = this.categoriePlats.filter(cp => cp.categorieplatid !== id);
      },
      (error) => {
        console.error('Error deleting categoriePlat:', error);
      }
    );
  }
}
