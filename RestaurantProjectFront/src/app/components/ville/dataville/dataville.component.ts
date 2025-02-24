import { Component, OnInit } from '@angular/core';
import { VilleService } from 'src/app/services/ville.service'; // Adjust the path as necessary
import { Ville } from 'src/app/models/ville'; // Define Ville model or adjust import as necessary

@Component({
  selector: 'app-dataville',
  templateUrl: './dataville.component.html',
  styleUrls: ['./dataville.component.css']
})
export class DatavilleComponent implements OnInit {

  villes: Ville[] = [];

  constructor(private villeService: VilleService) { }

  ngOnInit(): void {
    this.getAllVilles();
  }

  getAllVilles(): void {
    this.villeService.getAllVilles().subscribe(
      (data: Ville[]) => {
        this.villes = data;
        console.log('List of villes:', this.villes); // This will log the list of villes
      },
      (error) => {
        console.error('Error fetching villes:', error);
      }
    );
  }

  deleteVille(id: number): void {
    this.villeService.deleteVille(id).subscribe(
      () => {
        this.villes = this.villes.filter(v => v.villeid !== id);
      },
      (error) => {
        console.error('Error deleting ville:', error);
      }
    );
  }
}
