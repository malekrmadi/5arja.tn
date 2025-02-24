package com.example.ApiRestRestaurant1.controllers;

import com.example.ApiRestRestaurant1.entities.Plat;
import com.example.ApiRestRestaurant1.services.ServicePlat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/plats")
public class PlatController {

    @Autowired
    private ServicePlat servicePlat;

    @PostMapping
    public ResponseEntity<Plat> createPlat(@RequestBody Plat plat) {
        Plat newPlat = servicePlat.createPlat(plat);
        return ResponseEntity.ok(newPlat);
    }

    @GetMapping
    public ResponseEntity<List<Plat>> getAllPlats() {
        List<Plat> plats = servicePlat.getAllPlats();
        return ResponseEntity.ok(plats);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Plat> getPlatById(@PathVariable Long id) {
        Optional<Plat> plat = servicePlat.getPlatById(id);
        return plat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Plat> updatePlat(@PathVariable Long id, @RequestBody Plat plat) {
        Plat updatedPlat = servicePlat.updatePlat(id, plat);
        return updatedPlat != null ? ResponseEntity.ok(updatedPlat) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePlat(@PathVariable Long id) {
        servicePlat.deletePlat(id);
        return ResponseEntity.noContent().build();
    }
}
