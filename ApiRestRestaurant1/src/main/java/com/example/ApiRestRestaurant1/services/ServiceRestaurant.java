package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Restaurant;
import java.util.List;
import java.util.Optional;

public interface ServiceRestaurant {
    Restaurant createRestaurant(Restaurant restaurant);
    List<Restaurant> getAllRestaurants();
    Optional<Restaurant> getRestaurantById(Long id);
    Restaurant updateRestaurant(Long id, Restaurant restaurant);
    void deleteRestaurant(Long id);
}
