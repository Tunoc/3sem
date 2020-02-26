package entities;

import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author rando
 */
public class Tester {

    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");

//    public static void main(String[] args) {
//        Persistence.generateSchema("pu", null);
//    }

//3OneToMany    
//    public static void main(String[] args) {
//        EntityManager em = emf.createEntityManager();
//        em.getTransaction().begin();
//        Customer c1 = new Customer("Jens", "Jensen");
//        Customer c2 = new Customer("Mads", "Madsen");
//        
//        List<Address> addresses = new ArrayList<>();
//        Address a1 = new Address("Street1", "City1");
//        Address a2 = new Address("Street2", "City2");
//        addresses.add(a1);
//        addresses.add(a2);
//        c1.addAddress(addresses.get(0));
//        c1.addAddress(addresses.get(1));
//        c2.addAddress(a2);
//        
////        We don't need to persist the 2 adresses if we add the - "(cascade=CascadeType.PERSIST)" 
////        in our Customer class to our @OneToMany tag.
////        em.persist(a1);
////        em.persist(a2);
//        em.persist(c1);
//        em.persist(c2);
//        em.getTransaction().commit();
//    }
    
//4OneToMany    
//    public static void main(String[] args) {
////        Persistence.generateSchema("pu", null);
//        EntityManager em = emf.createEntityManager();
//        em.getTransaction().begin();
//        Customer c1 = new Customer("Jens", "Jensen");
//        Customer c2 = new Customer("Mads", "Madsen");
//        
//        Address a1 = new Address("Street1", "City1");
//        Address a2 = new Address("Street2", "City2");
//        a1.setCustomer(c1);
//        a2.setCustomer(c1);
//        a1.setCustomer(c2);
//        c1.addAddress(a1);
//        c1.addAddress(a2);
//        c2.addAddress(a1);
//        
//        em.persist(c1);
//        em.persist(c2);
//        em.getTransaction().commit();
//
//    }

    public static void main(String[] args) {
        Persistence.generateSchema("pu", null);
    }
    }
