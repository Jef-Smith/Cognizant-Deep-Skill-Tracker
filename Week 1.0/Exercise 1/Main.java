
public class Main {
    public static void main(String[] args) {

        Logger lg=Logger.getInstance();
        Logger lg2=Logger.getInstance();
        if(lg==lg2)
        {
            System.out.println("Instance Verifed Both are Same!!");

        }
        else
            System.out.println("Instance Not Verifed Both are Not Same!!");
    }
    
}
