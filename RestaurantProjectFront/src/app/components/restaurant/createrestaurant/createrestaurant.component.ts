import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestaurantService } from 'src/app/services/restaurant.service'; // Importez votre service pour l'ajout de restaurant
import { VilleService } from 'src/app/services/ville.service'; // Pour récupérer la liste des villes
import { Restaurant } from 'src/app/models/restaurant';
import { Ville } from 'src/app/models/ville';

@Component({
  selector: 'app-createrestaurant',
  templateUrl: './createrestaurant.component.html',
  styleUrls: ['./createrestaurant.component.css']
})
export class CreaterestaurantComponent implements OnInit {
  restaurantForm: FormGroup;
  villes: Ville[] = [];
  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private restaurantService: RestaurantService,
    private villeService: VilleService
  ) {
    this.restaurantForm = this.fb.group({
      nom: ['', [Validators.required]],
      description: ['', [Validators.required]],
      heuresouverture: ['', [Validators.required]],
      notemoyenne: [0, [Validators.required, Validators.min(0), Validators.max(5)]],
      villeid: ['', [Validators.required]]  // Pour la ville, on lie cette propriété à la liste déroulante
    });
  }

  ngOnInit(): void {
    this.villeService.getAllVilles().subscribe({
      next: (data) => {
        this.villes = data;
        console.log('Liste des villes récupérées :', this.villes);
      },
      error: (err) => {
        this.errorMessage = 'Erreur lors du chargement des villes: ' + err.message;
        console.error('Erreur lors de la récupération des villes:', err);
      }
    });
  }
  

  onSubmit(): void {
    if (this.restaurantForm.valid) {
      const restaurant: Restaurant = this.restaurantForm.value;
  
      console.log('Restaurant à envoyer:', restaurant);  // Affichez les données pour vérifier
  
      this.restaurantService.createRestaurant(restaurant).subscribe({
        next: () => {
          this.successMessage = 'Restaurant ajouté avec succès!';
          this.errorMessage = '';
          this.restaurantForm.reset();
        },
        error: (err) => {
          console.error('Erreur lors de l\'ajout du restaurant:', err);
          this.errorMessage = 'Échec de l\'ajout du restaurant: ' + err.message;
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Veuillez remplir tous les champs.';
      this.successMessage = '';
    }
  }
  
}
