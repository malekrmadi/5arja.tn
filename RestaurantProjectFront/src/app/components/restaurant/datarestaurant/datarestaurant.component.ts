import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service'; // Adjust path as necessary
import { Restaurant } from 'src/app/models/restaurant'; // Define Restaurant model or adjust import as necessary

@Component({
  selector: 'app-datarestaurant',
  templateUrl: './datarestaurant.component.html',
  styleUrls: ['./datarestaurant.component.css']
})
export class DatarestaurantComponent implements OnInit {

  restaurants: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants(): void {
    this.restaurantService.getAllRestaurants().subscribe(
      (data: Restaurant[]) => {
        this.restaurants = data;
        console.log('List of restaurants:', this.restaurants);
      },
      (error) => {
        console.error('Error fetching restaurants:', error);
      }
    );
  }

  deleteRestaurant(id: number): void {
    this.restaurantService.deleteRestaurant(id).subscribe(
      () => {
        this.restaurants = this.restaurants.filter(r => r.restaurantid !== id);
      },
      (error) => {
        console.error('Error deleting restaurant:', error);
      }
    );
  }
}
