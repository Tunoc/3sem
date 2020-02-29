package facade;

import entities.Customer;
import entities.ItemType;
import entities.Orders;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;

/**
 *
 * @author rando
 */
public class EntityFacade {

    private static EntityFacade instance;
    private static EntityManagerFactory emf;

    private EntityFacade() {
    }

    public static EntityFacade getEntityFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new EntityFacade();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

    //Create customer - Green
    public Customer createCustomer(String name, String eMail) {
        EntityManager em = getEntityManager();
        Customer c = new Customer(name, eMail);
        try {
            em.getTransaction().begin();
            em.persist(c);
            em.getTransaction().commit();
            return c;
        } finally {
            em.close();
        }
    }

    //Find customer - Green
    public Customer getCustomerById(int id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            Customer c = em.find(Customer.class, id);
            em.getTransaction().commit();
            return c;
        } finally {
            em.close();
        }
    }

    //Get all customers - Green
    public List<Customer> getAllCustomers() {
        EntityManager em = getEntityManager();
        List<Customer> cl;
        cl = new ArrayList(em.createQuery("SELECT p FROM Person p").getResultList());
        return cl;
    }

    //Create an item type - Green
    public ItemType createItemType(String name, String description, Long price) {
        EntityManager em = getEntityManager();
        ItemType it = new ItemType(name, description, price);
        try {
            em.getTransaction().begin();
            em.persist(it);
            em.getTransaction().commit();
            return it;
        } finally {
            em.close();
        }
    }

    //Find an item type - Green
    public ItemType findItemTypeOnID(int id) {
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            ItemType it = em.find(ItemType.class, id);
            em.getTransaction().commit();
            return it;
        } finally {
            em.close();
        }
    }

    //Create an order and add to a customer - Green
    public Orders createOrder(int customerID) {
        EntityManager em = getEntityManager();
        Customer c = em.find(Customer.class, customerID);
        Orders order = new Orders(c);
        em.getTransaction().begin();
        em.persist(order);
        em.getTransaction().commit();
        return order;
    }
}
