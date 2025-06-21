import java.util.*;

public class BinarySearch {
    public static void search(Product[] products, int searchId) {
        Arrays.sort(products, Comparator.comparingInt(p -> p.productID));
        
        int left = 0;
        int right = products.length - 1;
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (products[mid].productID == searchId) {
                print(true);
                return;
            } 
            else if (products[mid].productID < searchId) 
            {
                left = mid + 1;
            } else 
            {
                right = mid - 1;
            }
        }
        print(false);
    }



    public static void print(boolean val)
    {
        if(val==true)
            System.out.println("Item Found");
        else
            System.out.println("Item Not Present");
        


    }
}
