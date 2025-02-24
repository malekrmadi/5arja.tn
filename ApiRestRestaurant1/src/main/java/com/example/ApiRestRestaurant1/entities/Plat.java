package com.example.ApiRestRestaurant1.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.FieldDefaults;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@FieldDefaults(level = AccessLevel.PRIVATE)
public class Plat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long platid;
    String nom;
    String description;
    Double prix;
    Double notemoyennesur10;
    String imageUrl; // Peut être null
    Long restaurantid;
    Long categorieplatid;
}
