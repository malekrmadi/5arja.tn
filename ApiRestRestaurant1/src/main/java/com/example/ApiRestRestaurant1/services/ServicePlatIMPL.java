package com.example.ApiRestRestaurant1.services;

import com.example.ApiRestRestaurant1.entities.Plat;
import com.example.ApiRestRestaurant1.repositories.PlatRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ServicePlatIMPL implements ServicePlat {

    @Autowired
    private PlatRepo platRepo;

    @Override
    public Plat createPlat(Plat plat) {
        return platRepo.save(plat);
    }

    @Override
    public List<Plat> getAllPlats() {
        return platRepo.findAll();
    }

    @Override
    public Optional<Plat> getPlatById(Long id) {
        return platRepo.findById(id);
    }

    @Override
    public Plat updatePlat(Long id, Plat plat) {
        if (platRepo.existsById(id)) {
            plat.setPlatid(id);
            return platRepo.save(plat);
        }
        return null;
    }

    @Override
    public void deletePlat(Long id) {
        platRepo.deleteById(id);
    }
}
