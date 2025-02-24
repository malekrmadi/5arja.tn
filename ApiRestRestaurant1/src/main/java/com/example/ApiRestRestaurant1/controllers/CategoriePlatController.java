package com.example.ApiRestRestaurant1.controllers;

import com.example.ApiRestRestaurant1.entities.Categorieplat;
import com.example.ApiRestRestaurant1.services.ServiceCategoriePlat;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/categorieplats")
public class CategoriePlatController {

    @Autowired
    private ServiceCategoriePlat serviceCategoriePlat;

    @PostMapping
    public ResponseEntity<Categorieplat> createCategoriePlat(@RequestBody Categorieplat categoriePlat) {
        Categorieplat newCategoriePlat = serviceCategoriePlat.createCategoriePlat(categoriePlat);
        return ResponseEntity.ok(newCategoriePlat);
    }

    @GetMapping
    public ResponseEntity<List<Categorieplat>> getAllCategoriePlats() {
        List<Categorieplat> categoriePlats = serviceCategoriePlat.getAllCategoriePlats();
        return ResponseEntity.ok(categoriePlats);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Categorieplat> getCategoriePlatById(@PathVariable Long id) {
        Optional<Categorieplat> categoriePlat = serviceCategoriePlat.getCategoriePlatById(id);
        return categoriePlat.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Categorieplat> updateCategoriePlat(@PathVariable Long id, @RequestBody Categorieplat categoriePlat) {
        Categorieplat updatedCategoriePlat = serviceCategoriePlat.updateCategoriePlat(id, categoriePlat);
        return updatedCategoriePlat != null ? ResponseEntity.ok(updatedCategoriePlat) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteCategoriePlat(@PathVariable Long id) {
        serviceCategoriePlat.deleteCategoriePlat(id);
        return ResponseEntity.noContent().build();
    }
}
