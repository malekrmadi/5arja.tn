package com.example.ApiRestRestaurant1.repositories;

import com.example.ApiRestRestaurant1.entities.Plat;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PlatRepo extends JpaRepository<Plat, Long> {
}
