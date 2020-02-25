package entities;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author rando
 */
public class Tester {
    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
    
    public static void main(String[] args) {
        EntityManager em = emf.createEntityManager();
        em.getTransaction().begin();
        Customer c1 = new Customer("Jens", "Jensen");
        Customer c2 = new Customer("Mads", "Madsen");
        
        c1.addHobby("Løb");
        c1.addHobby("Øl");
        c2.addHobby("Folkedans");
        
        c1.addPhone("63524174", "Mobil");
        c1.addPhone("56144050", "Fastnet");
        c2.addPhone("95763480", "Mobil");
        
        em.persist(c1);
        em.persist(c2);
        em.getTransaction().commit();
    }
}
