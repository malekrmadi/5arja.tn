

export class Restaurant {
    restaurantid!: number;
    nom!: string;
    description!: string;
    heuresouverture!: string;
    notemoyenne!: number;
    villeid!: number; // Reference to the Ville model
}
