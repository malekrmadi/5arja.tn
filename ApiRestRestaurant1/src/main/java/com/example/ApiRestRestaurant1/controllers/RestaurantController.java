package com.example.ApiRestRestaurant1.controllers;

import com.example.ApiRestRestaurant1.entities.Restaurant;
import com.example.ApiRestRestaurant1.services.ServiceRestaurant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/restaurants")
public class RestaurantController {

    @Autowired
    private ServiceRestaurant serviceRestaurant;

    @PostMapping
    public ResponseEntity<Restaurant> createRestaurant(@RequestBody Restaurant restaurant) {
        Restaurant newRestaurant = serviceRestaurant.createRestaurant(restaurant);
        return ResponseEntity.ok(newRestaurant);
    }

    @GetMapping
    public ResponseEntity<List<Restaurant>> getAllRestaurants() {
        List<Restaurant> restaurants = serviceRestaurant.getAllRestaurants();
        return ResponseEntity.ok(restaurants);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Restaurant> getRestaurantById(@PathVariable Long id) {
        Optional<Restaurant> restaurant = serviceRestaurant.getRestaurantById(id);
        return restaurant.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Restaurant> updateRestaurant(@PathVariable Long id, @RequestBody Restaurant restaurant) {
        Restaurant updatedRestaurant = serviceRestaurant.updateRestaurant(id, restaurant);
        return updatedRestaurant != null ? ResponseEntity.ok(updatedRestaurant) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRestaurant(@PathVariable Long id) {
        serviceRestaurant.deleteRestaurant(id);
        return ResponseEntity.noContent().build();
    }
}
