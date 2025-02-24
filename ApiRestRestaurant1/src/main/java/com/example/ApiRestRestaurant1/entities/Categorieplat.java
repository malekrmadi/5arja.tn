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
public class Categorieplat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long categorieplatid;
    String nom; //pizza tacos crepe panuuzzoo
    String type; // Sucrée, Salée, ou Sucré-Salé
    String nationalite; // Peut être null
}
