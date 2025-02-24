package com.example.ApiRestRestaurant1.repositories;

import com.example.ApiRestRestaurant1.entities.Categorieplat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriePlatRepo extends JpaRepository<Categorieplat, Long> {
}
