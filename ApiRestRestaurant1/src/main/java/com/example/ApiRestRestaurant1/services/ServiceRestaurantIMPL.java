package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Restaurant;
import com.example.ApiRestRestaurant1.repositories.RestaurantRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceRestaurantIMPL implements ServiceRestaurant {

    @Autowired
    private RestaurantRepo restaurantRepo;

    @Override
    public Restaurant createRestaurant(Restaurant restaurant) {
        return restaurantRepo.save(restaurant);
    }

    @Override
    public List<Restaurant> getAllRestaurants() {
        return restaurantRepo.findAll();
    }

    @Override
    public Optional<Restaurant> getRestaurantById(Long id) {
        return restaurantRepo.findById(id);
    }

    @Override
    public Restaurant updateRestaurant(Long id, Restaurant restaurant) {
        if (restaurantRepo.existsById(id)) {
            restaurant.setRestaurantid(id);
            return restaurantRepo.save(restaurant);
        }
        return null;
    }

    @Override
    public void deleteRestaurant(Long id) {
        restaurantRepo.deleteById(id);
    }
}
