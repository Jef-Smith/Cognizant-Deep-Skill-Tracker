select * from customers;
select * from loans;

--SET SERVEROUTPUT ON;
--scenario 1
Begin
   
    for rec in ( select c.CUSTOMERID,c.DOB,l.LOANID,l.interestrate from CUSTOMERS c JOIN LOANS l ON c.CUSTOMERID=l.CUSTOMERID)
    
    LOOP
        DECLARE
            age number;
            begin
                age:= FLOOR(MONTHS_BETWEEN(SYSDATE,rec.DOB)/12);
                IF age>60 then
                    update LOANS SET INTERESTRATE=rec.interestrate-1 where LOANID=rec.LOANID;
                    
                    dbms_output.put_line('discout to customer id: '||rec.CUSTOMERID||' new intrest: '||(rec.INTERESTRATE-1));
                END IF;
                                
            end;
    
    END LOOP;
    
    commit;

end;


--scenario 2

ALTER TABLE ACCOUNTS add isvip varchar(5);

select * from ACCOUNTS;


BEGIN
    for rec in (select ACCOUNTID,BALANCE from ACCOUNTS)
    
    LOOP
        begin
        
            if rec.BALANCE>10000 then
                update ACCOUNTS set ISVIP= 'TRUE' where ACCOUNTID=rec.ACCOUNTID;
                
                dbms_output.put_line('VIP Accounts are: '||rec.ACCOUNTID);
            end IF;
        
        end;
            
    end LOOP;
    
    commit;
end;






--scenario 3

BEGIN

    for rec in (select l.loanid,l.enddate,c.name,c.customerid from loans l join customers c on l.customerid=c.customerid where l.enddate between sysdate and sysdate+30)
    
    LOOP
        dbms_output.put_line('Reminder: Dear ' || rec.Name || 
            ', your loan (Loan ID: ' || rec.LoanID || 
            ') is due on ' || TO_CHAR(rec.EndDate, 'DD-Mon-YYYY') || 
            '. Please make necessary arrangements.');
    
    end LOOP;

END;








