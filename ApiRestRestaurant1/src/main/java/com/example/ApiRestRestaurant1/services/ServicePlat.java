package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Plat;
import java.util.List;
import java.util.Optional;

public interface ServicePlat {
    Plat createPlat(Plat plat);
    List<Plat> getAllPlats();
    Optional<Plat> getPlatById(Long id);
    Plat updatePlat(Long id, Plat plat);
    void deletePlat(Long id);
}
