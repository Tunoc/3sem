/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author rando
 */
public class MakeTestData {

    private static EntityManagerFactory emf;
    private static MakeTestData instance;

    //Constructor(s)
    public MakeTestData() {
    }

    //Singleton.
    public static MakeTestData getMakeTestData(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new MakeTestData();
        }
        return instance;
    }

    public static void main(String[] args) {
        populateDB();
    }

    public static void populateDB() {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        MakeTestData mtd = MakeTestData.getMakeTestData(emf);
        //Add Customers of the bank
        BankCustomer bk1 = mtd.createBankCustomer("Eugene", "Palmer", "123456789", 102030, 3, "Bad credit mby?");
        BankCustomer bk2 = mtd.createBankCustomer("Alexis", "Flores", "987654321", 12, 1, "Good credit mby?");
        BankCustomer bk3 = mtd.createBankCustomer("Jason", "DerekBrown", "321654987", 3581, 2, "Good and Bad credit mby?");
        BankCustomer bk4 = mtd.createBankCustomer("RobertWilliam", "Fisher", "987654321", 953764, 5, "Internal info mby?");
        BankCustomer bk5 = mtd.createBankCustomer("BhadreshkumarChetanbhai", "Patel", "8524560", 7391, 8, "Wanted by FBI mby?");
    }

    public BankCustomer createBankCustomer(String firstName, String lastName, String accountNumber, double balance, int customerRanking, String internalInfo) {
        BankCustomer bk = new BankCustomer(firstName, lastName, accountNumber, balance, customerRanking, internalInfo);
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(bk);
            em.getTransaction().commit();
            return bk;
        } finally {
            em.close();
        }
    }

}
