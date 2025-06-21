import java.util.*;
public class LinearSearch 
{
    public static void search(Product arr[],int searchId)
    {
        int n=arr.length;
        boolean flag=false;
        if(n==0)
        {
            print(flag);
            return;
        }
        for(Product i:arr)
        {
            if(i.productID==searchId)
            {
                flag=true;
                print(flag);
                return;
            }
            
        }
        print(flag);
    }
    
    public static void print(boolean val)
    {
        if(val==true)
            System.out.println("Item Found");
        else
            System.out.println("Item Not Present");
        


    }


}
