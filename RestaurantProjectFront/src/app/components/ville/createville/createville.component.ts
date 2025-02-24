import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { VilleService } from 'src/app/services/ville.service';
import { Ville } from 'src/app/models/ville'; // Adjust path if necessary

@Component({
  selector: 'app-createville',
  templateUrl: './createville.component.html',
  styleUrls: ['./createville.component.css']
})
export class CreatevilleComponent {

  villeForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';

  // Liste des gouvernorats de la Tunisie
  gouvernorats: string[] = [
    'Tunis', 'Ariana', 'Ben Arous', 'Manouba', 'Bizerte', 'Nabeul', 'Sousse', 'Monastir', 
    'Mahdia', 'Kairouan', 'Kasserine', 'Sidi Bouzid', 'Tozeur', 'Gabès', 'Medenine', 
    'Tataouine', 'Gafsa', 'Jendouba', 'Béja', 'Le Kef', 'Siliana', 'Zaghouan', 'Kébili'
  ];

  constructor(private fb: FormBuilder, private villeService: VilleService) {
    this.villeForm = this.fb.group({
      nom: ['', Validators.required],
      gouvernorat: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.villeForm.valid) {
      const ville: Ville = this.villeForm.value;

      this.villeService.createVille(ville).subscribe({
        next: (response) => {
          this.successMessage = 'Ville added successfully!';
          this.errorMessage = '';
          this.villeForm.reset();
        },
        error: (err) => {
          this.errorMessage = 'Failed to add Ville: ' + err.message;
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = 'Please fill in all fields.';
      this.successMessage = '';
    }
  }
}
