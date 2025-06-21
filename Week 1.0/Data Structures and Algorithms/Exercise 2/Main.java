import java.util.*;

public class Main {
    public static void main(String[] args) {
        Product[] products = {
            new Product(101, "Laptop", "Electronics"),
            new Product(200, "Shoes", "Fashion"),
            new Product(100, "Smartphone", "Electronics"),
            new Product(110, "Book", "Education")
        };

        Scanner s = new Scanner(System.in);
        System.out.print("Enter Product ID to search: ");
        int searchId = s.nextInt();

        System.out.println("\n--- Linear Search ---");
        LinearSearch.search(products, searchId);

        System.out.println("\n--- Binary Search ---");
        BinarySearch.search(products, searchId);
    }
}
