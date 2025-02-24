package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Categorieplat;
import com.example.ApiRestRestaurant1.repositories.CategoriePlatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServiceCategoriePlatMPL implements ServiceCategoriePlat {

    @Autowired
    private CategoriePlatRepo categoriePlatRepo;

    @Override
    public Categorieplat createCategoriePlat(Categorieplat categoriePlat) {
        return categoriePlatRepo.save(categoriePlat);
    }

    @Override
    public List<Categorieplat> getAllCategoriePlats() {
        return categoriePlatRepo.findAll();
    }

    @Override
    public Optional<Categorieplat> getCategoriePlatById(Long id) {
        return categoriePlatRepo.findById(id);
    }

    @Override
    public Categorieplat updateCategoriePlat(Long id, Categorieplat categoriePlat) {
        if (categoriePlatRepo.existsById(id)) {
            categoriePlat.setCategorieplatid(id);
            return categoriePlatRepo.save(categoriePlat);
        }
        return null;
    }

    @Override
    public void deleteCategoriePlat(Long id) {
        categoriePlatRepo.deleteById(id);
    }
}
