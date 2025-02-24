import { Component } from '@angular/core';
import { CategoriePlat } from 'src/app/models/categorieplat'; // Assurez-vous que le chemin est correct
import { CategorieplatService } from 'src/app/services/categorieplat.service'; // Assurez-vous que le chemin est correct
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-createcategorieplat',
  templateUrl: './createcategorieplat.component.html',
  styleUrls: ['./createcategorieplat.component.css']
})
export class CreatecategorieplatComponent {
  categoriePlatForm: FormGroup;
  types = ['Sucrée', 'Salée', 'Sucré-Salé'];
  successMessage: string = ''; // Message de succès
  errorMessage: string = '';   // Message d'erreur

  constructor(
    private fb: FormBuilder,
    private categorieplatService: CategorieplatService
  ) {
    // Initialisation du formulaire
    this.categoriePlatForm = this.fb.group({
      nom: ['', Validators.required],
      type: ['', Validators.required],
      nationalite: ['', Validators.required]
    });
  }

  // Méthode pour gérer la soumission du formulaire
  onSubmit(): void {
    if (this.categoriePlatForm.valid) {
      const formValue = { ...this.categoriePlatForm.value };

      // Convertir la nationalité en majuscules avant l'envoi à l'API
      formValue.nationalite = formValue.nationalite.toUpperCase();

      // Appel du service pour créer la catégorie de plat
      this.categorieplatService.createCategoriePlat(formValue).subscribe(
        (response) => {
          console.log('Catégorie de plat créée avec succès', response);
          this.successMessage = 'La catégorie de plat a été créée avec succès !'; // Afficher le message de succès
          this.errorMessage = ''; // Réinitialiser le message d'erreur
          this.categoriePlatForm.reset(); // Réinitialiser le formulaire si nécessaire
        },
        (error) => {
          console.error('Erreur lors de la création de la catégorie de plat', error);
          this.errorMessage = 'Une erreur s\'est produite lors de la création de la catégorie de plat.'; // Afficher le message d'erreur
          this.successMessage = ''; // Réinitialiser le message de succès
        }
      );
    }
  }
}
