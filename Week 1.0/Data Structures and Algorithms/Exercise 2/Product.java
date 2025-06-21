public class Product {
    int productID;
    String productName;
    String category;

    public Product(int productID, String productName, String category) {
        this.productID = productID;
        this.productName = productName;
        this.category = category;
    }

    @Override
    public String toString() {
        return productID + " | " + productName + " (" + category + ")";
    }
    
}



