package com.example.ApiRestRestaurant1.repositories;

import com.example.ApiRestRestaurant1.entities.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RestaurantRepo extends JpaRepository<Restaurant, Long> {
}
