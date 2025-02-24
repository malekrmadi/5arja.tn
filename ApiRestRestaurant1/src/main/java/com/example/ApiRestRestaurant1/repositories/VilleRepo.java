package com.example.ApiRestRestaurant1.repositories;

import com.example.ApiRestRestaurant1.entities.Ville;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VilleRepo extends JpaRepository<Ville, Long> {
}
