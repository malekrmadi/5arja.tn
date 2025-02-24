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
public class Ville {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long villeid;
    String nom;
    String gouvernorat;
}
