/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dbfacade;

import entity.Customer;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;
import javax.persistence.TypedQuery;

/**
 *
 * @author rando
 */
public class CustomerFacade {

    private static EntityManagerFactory emf;
    private static CustomerFacade instance;

    //Constructor(s)
    private CustomerFacade() {
    }

    //PSVM
    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        CustomerFacade facade = CustomerFacade.getCustomerFacade(emf);
        //Add Customers
        Customer c1 = facade.addCustomer("FirstName1", "LastName1");
        Customer c2 = facade.addCustomer("Hans", "Peter-Hansen");
        //Find Customer by ID
        System.out.println("\nCustomer 1(Found by id):              " + facade.findByID(1));
        //Find Customer by last name
        System.out.println("Customer 2(Found by last name:        " + facade.findByLastName("Peter-Hansen"));
        //Find number of customers
        System.out.println("Number of Customers:                  " + facade.getNumberOfCustomers());
        //Find list of all customers
        System.out.println("\nList of all customers - Down below");
        for (Customer customer : facade.getAllCustomers()) {
            System.out.println(customer);
        }
    }

    public static CustomerFacade getCustomerFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new CustomerFacade();
        }
        return instance;
    }

    public Customer addCustomer(String firstName, String lastName) {
        Customer customer = new Customer(firstName, lastName);
        EntityManager em = emf.createEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(customer);
            em.getTransaction().commit();
            return customer;
        } finally {
            em.close();
        }
    }

    public Customer findByID(int id) {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Customer> query 
                = em.createQuery("SELECT c FROM Customer c WHERE c.id = :id", Customer.class);
            query.setParameter("id", id);
            return (Customer) query.getSingleResult();
        } finally {
            em.close();
        }
    }

    public List<Customer> findByLastName(String name) {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Customer> query
                = em.createQuery("SELECT c FROM Customer c WHERE c.lastname = :name", Customer.class);
            query.setParameter("name", name);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

    public int getNumberOfCustomers() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Customer> query
                    = em.createQuery("SELECT c FROM Customer c", Customer.class);
            return query.getResultList().size();
        } finally {
            em.close();
        }
    }

    public List<Customer> getAllCustomers() {
        EntityManager em = emf.createEntityManager();
        try {
            TypedQuery<Customer> query
                    = em.createQuery("SELECT c FROM Customer c", Customer.class);
            return query.getResultList();
        } finally {
            em.close();
        }
    }

}
