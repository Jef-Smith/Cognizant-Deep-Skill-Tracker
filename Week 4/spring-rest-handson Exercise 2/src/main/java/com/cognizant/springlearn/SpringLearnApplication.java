package com.cognizant.springlearn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class SpringLearnApplication {

    private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

    public static void main(String[] args) {
        LOGGER.info("STARTING SPRING LOG");
        displayDate();
        LOGGER.info("END SPRING LOG");
    }

    public static void displayDate() {
        ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
        SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);

        try {
            Date date = format.parse("12/07/2025");
            System.out.println("Parsed Date: " + date);
        } catch (ParseException e) {
            System.err.println("Date parsing failed: " + e.getMessage());
        }

        ((ClassPathXmlApplicationContext) context).close(); // Optional but good practice
    }
}
