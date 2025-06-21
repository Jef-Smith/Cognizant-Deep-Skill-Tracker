import java.util.*;
public class FinancialForecast {

    public static double calculateFutureValue(double presentValue, double growthRate, int years) {
        if (years == 0) {
            return presentValue;
        }
        return calculateFutureValue(presentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) 
    {
        Scanner s=new Scanner(System.in);
        System.out.println("Enter the Present Value:");
        double presentValue = s.nextDouble();     
        System.out.println("Enter the Growth rate:");
        double growthRate = s.nextDouble();         
        System.out.println("Enter the Years:");
        int years = s.nextInt();                    

        double futureValue = calculateFutureValue(presentValue, growthRate, years);
        System.out.printf("Future value after %d years: %.2f%n", years, futureValue);
    }
}
