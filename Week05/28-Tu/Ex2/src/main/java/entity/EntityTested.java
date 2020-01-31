/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entity;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author rando
 */
public class EntityTested {
    //PSVM        

    public static void main(String[] args) {
        EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
        EntityManager em = emf.createEntityManager();
        // Create 2 Customers
        Customer customer1 = new Customer("FirstName1", "LastName1");
        Customer customer2 = new Customer("Hans", "Peter-Hansen");
        try {
            em.getTransaction().begin();
            em.persist(customer1);
            em.persist(customer2);
            em.getTransaction().commit();
            //Verify that books are managed and has been given a database id
            System.out.println(customer1.getFirstname());
            System.out.println(customer1.getLastname());
            System.out.println(customer1.getCreated());
            System.out.println(customer2.getFirstname());
            System.out.println(customer2.getLastname());
            System.out.println(customer2.getCreated());
        } finally {
            em.close();
            emf.close();
        }
    }
}
