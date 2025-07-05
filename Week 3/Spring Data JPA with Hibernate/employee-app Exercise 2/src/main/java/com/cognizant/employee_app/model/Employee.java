package com.cognizant.employee_app.model;



import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data // generates getters, setters, toString, etc.
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String name;
    private String department;
}

