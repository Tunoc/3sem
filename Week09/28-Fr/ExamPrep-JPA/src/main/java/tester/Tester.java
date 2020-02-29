package tester;

import entities.Customer;
import facade.EntityFacade;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Persistence;

/**
 *
 * @author rando
 */
public class Tester {

    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("pu");
    private static final EntityFacade FACADE = EntityFacade.getEntityFacade(emf);

    public static void main(String[] args) {
        EntityManager em = emf.createEntityManager();
        Customer c1 = FACADE.createCustomer("Aage Madsen", "ABC@DEF.COM");
        try {
            em.getTransaction().begin();
            /*
            I noticed while making this program that i continued to get a build failiure.
            The fail was; "on project ExamPrep-JPA: Fatal error compiling: java.lang.NoClassDefFoundError:"
            However when i searched for it on the web i found out that it should be a problem with my; "JAVA_HOME" path.
            But that can't be it since i still am able to run all other projects. Therfore i tried to do my best regarding the facade.
            But i wast able to test/Verify if what i did acctually worked.
            */
            em.persist(c1);
            em.getTransaction().commit();
        } finally {
            em.close();
        }

    }
}
