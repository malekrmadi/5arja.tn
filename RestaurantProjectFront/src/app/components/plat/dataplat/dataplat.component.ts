import { Component, OnInit } from '@angular/core';
import { PlatService } from 'src/app/services/plat.service'; // Adjust path as necessary
import { Plat } from 'src/app/models/plat'; // Define Plat model or adjust import as necessary

@Component({
  selector: 'app-dataplat',
  templateUrl: './dataplat.component.html',
  styleUrls: ['./dataplat.component.css']
})
export class DataplatComponent implements OnInit {

  plats: Plat[] = [];

  constructor(private platService: PlatService) { }

  ngOnInit(): void {
    this.getAllPlats();
  }

  getAllPlats(): void {
    this.platService.getAllPlats().subscribe(
      (data: Plat[]) => {
        this.plats = data;
        console.log('List of plats:', this.plats);
      },
      (error) => {
        console.error('Error fetching plats:', error);
      }
    );
  }

  deletePlat(id: number): void {
    this.platService.deletePlat(id).subscribe(
      () => {
        this.plats = this.plats.filter(p => p.platid !== id);
      },
      (error) => {
        console.error('Error deleting plat:', error);
      }
    );
  }
}
