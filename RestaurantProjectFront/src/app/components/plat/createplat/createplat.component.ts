import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Plat } from 'src/app/models/plat';
import { Restaurant } from 'src/app/models/restaurant';
import { CategoriePlat } from 'src/app/models/categorieplat';
import { PlatService } from 'src/app/services/plat.service';
import { RestaurantService } from 'src/app/services/restaurant.service';
import { CategorieplatService } from 'src/app/services/categorieplat.service';

@Component({
  selector: 'app-createplat',
  templateUrl: './createplat.component.html',
  styleUrls: ['./createplat.component.css']
})
export class CreateplatComponent implements OnInit {
  platForm: FormGroup;
  restaurants: Restaurant[] = [];
  categories: CategoriePlat[] = [];
  message: string = ''; // Nouvelle variable pour stocker les messages de confirmation

  constructor(
    private fb: FormBuilder,
    private platService: PlatService,
    private restaurantService: RestaurantService,
    private categoriePlatService: CategorieplatService
  ) {
    this.platForm = this.fb.group({
      nom: ['', Validators.required],
      description: ['', Validators.required],
      prix: ['', [Validators.required, Validators.min(1)]],
      notemoyennesur10: ['', [Validators.required, Validators.min(1), Validators.max(10)]],
      imageUrl: ['', Validators.required],
      restaurantid: ['', Validators.required],
      categorieplatid: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    // Fetch the list of restaurants
    this.restaurantService.getAllRestaurants().subscribe(
      (data) => {
        this.restaurants = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching restaurants', error);
      }
    );

    // Fetch the list of categories of plats
    this.categoriePlatService.getAllCategoriePlats().subscribe(
      (data) => {
        this.categories = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching categories of plats', error);
      }
    );
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit(): void {
    if (this.platForm.valid) {
      const formValue = this.platForm.value;
      const plat: Plat = { ...formValue };

      // Appel du service pour créer le plat
      this.platService.createPlat(plat).subscribe(
        (response) => {
          console.log('Plat created successfully', response);
          this.message = 'Plat créé avec succès!'; // Afficher le message de succès
          this.platForm.reset(); // Réinitialiser le formulaire
        },
        (error) => {
          console.error('Error creating Plat', error);
          this.message = 'Erreur lors de la création du plat. Veuillez réessayer.'; // Afficher le message d'erreur
        }
      );
    }
  }
}
