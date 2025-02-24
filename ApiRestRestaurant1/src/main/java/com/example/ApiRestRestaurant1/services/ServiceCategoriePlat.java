package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Categorieplat;
import java.util.List;
import java.util.Optional;

public interface ServiceCategoriePlat {
    Categorieplat createCategoriePlat(Categorieplat categoriePlat);
    List<Categorieplat> getAllCategoriePlats();
    Optional<Categorieplat> getCategoriePlatById(Long id);
    Categorieplat updateCategoriePlat(Long id, Categorieplat categoriePlat);
    void deleteCategoriePlat(Long id);
}
