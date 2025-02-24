package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Ville;
import com.example.ApiRestRestaurant1.repositories.VilleRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceVilleIMPL implements ServiceVille {

    @Autowired
    private VilleRepo villeRepo;

    // Create a new Ville
    @Override
    public Ville createVille(Ville ville) {
        return villeRepo.save(ville);  // Save the Ville and return it
    }

    // Get all Villes
    @Override
    public List<Ville> getAllVilles() {
        return villeRepo.findAll();  // Retrieve all Villes from the repository
    }

    // Get a Ville by its ID
    @Override
    public Optional<Ville> getVilleById(Long id) {
        return villeRepo.findById(id);  // Find Ville by ID
    }

    // Update a Ville by its ID
    @Override
    public Ville updateVille(Long id, Ville ville) {
        if (villeRepo.existsById(id)) {
            ville.setVilleid(id);  // Ensure that the ID is set
            return villeRepo.save(ville);  // Save the updated Ville and return it
        }
        return null;  // Return null if the Ville doesn't exist
    }

    // Delete a Ville by its ID
    @Override
    public void deleteVille(Long id) {
        villeRepo.deleteById(id);  // Delete the Ville by its ID
    }
}
