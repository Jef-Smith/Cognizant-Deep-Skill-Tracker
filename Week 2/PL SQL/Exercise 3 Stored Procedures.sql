--Scenario 1
--SET SERVEROUTPUT ON;
CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest IS
BEGIN

    for rec in( select accountid,balance from accounts where accounttype='Savings')
    LOOP
        update accounts set balance=balance+(balance*0.01),LastModified = SYSDATE where accountid=rec.accountid;
        
        DBMS_OUTPUT.PUT_LINE('Interest applied to AccountID: ' || rec.AccountID);
    
    end LOOP;
    
    commit;
END;
/

begin

ProcessMonthlyInterest;

end;

select * from accounts;




select * from employees;

--scenario 2
CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus(dep in varchar2, bonus in number ) IS
BEGIN
    for rec in ( select employeeid,name,salary from employees where department=dep)
    LOOP
        update employees set salary=salary+(rec.salary*(bonus/100)) where employeeid=rec.employeeid;
        
        DBMS_OUTPUT.PUT_LINE('Bonus applied to ' || rec.Name || 
                             '. New salary will take effect from next month');
        
    end LOOP;
    
    commit;
END;
/


begin
UpdateEmployeeBonus('IT',10);
end;


--scenario 3

CREATE SEQUENCE Transactions_seq
START WITH 3
INCREMENT BY 1
NOCACHE;

CREATE OR REPLACE PROCEDURE TransferFunds (p_source_account_id IN NUMBER,p_dest_account_id IN NUMBER,p_amount IN NUMBER) IS
    v_source_balance   NUMBER;
    BEGIN
    
    SELECT Balance INTO v_source_balance
    FROM Accounts
    WHERE AccountID = p_source_account_id;

    IF v_source_balance < p_amount THEN
        RAISE_APPLICATION_ERROR(-20001, 'Insufficient balance in source account.');
    END IF;

    UPDATE Accounts
    SET Balance = Balance - p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_source_account_id;

    UPDATE Accounts
    SET Balance = Balance + p_amount,
        LastModified = SYSDATE
    WHERE AccountID = p_dest_account_id;

    -- Log transaction for source account
    INSERT INTO Transactions (
        TransactionID, AccountID, TransactionDate, Amount, TransactionType
    ) VALUES (
        Transactions_seq.NEXTVAL, p_source_account_id, SYSDATE, p_amount, 'DEBIT'
    );

    -- Log transaction for destination account
    INSERT INTO Transactions (
        TransactionID, AccountID, TransactionDate, Amount, TransactionType
    ) VALUES (
        Transactions_seq.NEXTVAL, p_dest_account_id, SYSDATE, p_amount, 'CREDIT'
    );

    COMMIT;

    DBMS_OUTPUT.PUT_LINE('Funds transferred successfully.');

END;
/

BEGIN
    TransferFunds(1, 2, 500);
END;
/
SELECT * FROM Transactions;


