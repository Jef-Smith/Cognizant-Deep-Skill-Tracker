package com.cognizant.employee_app;

import com.cognizant.employee_app.model.Employee;
import com.cognizant.employee_app.service.EmployeeService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeAppApplication implements CommandLineRunner {

    @Autowired
    private EmployeeService employeeService;

    public static void main(String[] args) {
        SpringApplication.run(EmployeeAppApplication.class, args);
    }

    @Override
    public void run(String... args) throws Exception {
        Employee e = new Employee();
        e.setName("Alice");
        e.setDepartment("IT");
        employeeService.addEmployee(e);

        System.out.println("Employees:");
        employeeService.getAllEmployees().forEach(System.out::println);
    }
}
