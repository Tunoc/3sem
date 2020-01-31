/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package facades;

import dto.CustomerDTO;
import entities.BankCustomer;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * @author rando
 */
public class BankCustomerFacade {

    private static BankCustomerFacade instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private BankCustomerFacade() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static BankCustomerFacade getBankCustomerFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new BankCustomerFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    //PSVM
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        BankCustomerFacade bkf = BankCustomerFacade.getBankCustomerFacade(emf);
        //Find BankCustomer by ID
        System.out.println("\nBankCustomer (Found by id = 1):               " + bkf.getCustomerByID(1));
        //Find BankCustomer by name
        System.out.println("\nBankCustomer (Found by name = Jason DerekBrown):        " + bkf.getCustomerByName("Jason DerekBrown"));
        //Add BankCustomer
        BankCustomer bk = new BankCustomer("FirstName", "LastName", "789531654648", 568, 7, "Internal info");
        System.out.println("\nBankCustomer (New BankCustomer Added):        " + bkf.addCustomer(bk));
    }

    public CustomerDTO getCustomerByID(int id) {
        EntityManager em = emf.createEntityManager();
        try {
            BankCustomer bk = em.find(BankCustomer.class, id);
            return new CustomerDTO(bk);
        } finally {
            em.close();
        }
    }

    public List<CustomerDTO> getCustomerByName(String fullname) {
        String[] strArray = fullname.split(" ");
        String fname = strArray[0].trim();
        String lname = strArray[1].trim();
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<BankCustomer> query
                    = em.createQuery("SELECT c FROM BankCustomer c WHERE c.firstName = :fname AND c.lastName = :lname", BankCustomer.class);
            query.setParameter("fname", fname);
            query.setParameter("lname", lname);
            List<CustomerDTO> listOfBankCustomers = new ArrayList<>();
            //Convert from BankCustomers to DTO's
            for (BankCustomer bk : query.getResultList()) {
                listOfBankCustomers.add(new CustomerDTO(bk));
            }
            return listOfBankCustomers;
        } finally {
            em.close();
        }
    }

    public BankCustomer addCustomer(BankCustomer cust) {
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(cust);
            em.getTransaction().commit();
            return cust;
        } finally {
            em.close();
        }
    }

    public List<BankCustomer> getAllBankCustomers() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<BankCustomer> query
                    = em.createQuery("SELECT e FROM BankCustomer e", BankCustomer.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

}
