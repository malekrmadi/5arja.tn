import { Restaurant } from './restaurant';
import { CategoriePlat } from './categorieplat';

export class Plat {
    platid!: number;
    nom!: string;
    description!: string;
    prix!: number;
    notemoyennesur10!: number;
    imageUrl?: string; // Optional attribute
    restaurantid!: number; // Reference to the Restaurant model
    categorieplatid!: number; // Reference to the CategoriePlat model
}
