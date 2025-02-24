package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Ville;
import java.util.List;
import java.util.Optional;

public interface ServiceVille {
    Ville createVille(Ville ville);
    List<Ville> getAllVilles();
    Optional<Ville> getVilleById(Long id);
    Ville updateVille(Long id, Ville ville);
    void deleteVille(Long id);
}
