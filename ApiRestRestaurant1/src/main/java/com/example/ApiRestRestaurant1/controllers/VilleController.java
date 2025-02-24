package com.example.ApiRestRestaurant1.controllers;

import com.example.ApiRestRestaurant1.entities.Ville;
import com.example.ApiRestRestaurant1.services.ServiceVille;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/villes")
public class VilleController {

    @Autowired
    private ServiceVille serviceVille;

    // Create a new Ville
    @PostMapping
    public ResponseEntity<Ville> createVille(@RequestBody Ville ville) {
        Ville newVille = serviceVille.createVille(ville);
        return ResponseEntity.ok(newVille);
    }

    // Get all Villes
    @GetMapping
    public ResponseEntity<List<Ville>> getAllVilles() {
        List<Ville> villes = serviceVille.getAllVilles();
        return ResponseEntity.ok(villes);
    }

    // Get a Ville by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Ville> getVilleById(@PathVariable Long id) {
        Optional<Ville> ville = serviceVille.getVilleById(id);
        return ville.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Update a Ville by its ID
    @PutMapping("/{id}")
    public ResponseEntity<Ville> updateVille(@PathVariable Long id, @RequestBody Ville ville) {
        Ville updatedVille = serviceVille.updateVille(id, ville);
        return updatedVille != null ? ResponseEntity.ok(updatedVille) : ResponseEntity.notFound().build();
    }

    // Delete a Ville by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVille(@PathVariable Long id) {
        serviceVille.deleteVille(id);
        return ResponseEntity.noContent().build();
    }
}
