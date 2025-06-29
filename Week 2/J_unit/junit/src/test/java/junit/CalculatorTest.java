package com.example;

import org.junit.Before;
import org.junit.After;
import org.junit.Test;
import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {
       
        calculator = new Calculator();
        System.out.println("Setup: Calculator object created");
    }

    @After
    public void tearDown() {
       
        calculator = null;
        System.out.println("Teardown: Calculator object destroyed");
    }

    @Test
    public void testAddition() {
        // Arrange
        int a = 5;
        int b = 7;

        // Act
        int result = calculator.add(a, b);

        // Assert
        assertEquals(12, result);
    }

    @Test
    public void testSubtraction() {
        // Arrange
        int a = 10;
        int b = 4;

        // Act
        int result = calculator.subtract(a, b);

        // Assert
        assertEquals(6, result);
    }
}
