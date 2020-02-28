package facades;

import dto.PersonDTO;
import dto.PersonsDTO;
import entities.Address;
import entities.Person;
import java.util.Date;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.TypedQuery;

/**
 *
 * @author rando
 */
public class IPersonFacadeImpl implements IPersonFacade {

    private static IPersonFacadeImpl instance;
    private static EntityManagerFactory emf;

    //Private Constructor to ensure Singleton
    private IPersonFacadeImpl() {
    }

    /**
     *
     * @param _emf
     * @return an instance of this facade class.
     */
    public static IPersonFacadeImpl getPersonFacade(EntityManagerFactory _emf) {
        if (instance == null) {
            emf = _emf;
            instance = new IPersonFacadeImpl();
        }
        return instance;
    }

    private EntityManager getEntityManager() {
        return emf.createEntityManager();
    }

//Override interface
    @Override
    public PersonDTO addPerson(String fName, String lName, String phone, String street, String city, Integer zip) {
        EntityManager em = getEntityManager();
        Address adr = new Address(street, zip, city);
        Address check = checkAddress(adr, em);
        if (check != null) {
            adr = check;
        }
        Person p = new Person(fName, lName, phone, adr);
        try {
            em.getTransaction().begin();
            em.persist(p);
            em.getTransaction().commit();
            return new PersonDTO(p);
        } finally {
            em.close();
        }
    }

    private Address checkAddress(Address adr, EntityManager em) {
        try {
            TypedQuery<Address> q = em.createQuery("SELECT a FROM Address a WHERE a.city = :city AND a.street = :street AND a.zip = :zip", Address.class);
            q.setParameter("street", adr.getStreet());
            q.setParameter("city", adr.getCity());
            q.setParameter("zip", adr.getZip());
            Address result = q.getSingleResult();
            return result;
        } catch (Exception e) {
            //System.out.println(e);
            return null;
        }
    }

    @Override
    public PersonDTO deletePerson(int id) {
        EntityManager em = getEntityManager();
        try {
            Person p = em.find(Person.class, id);
            em.getTransaction().begin();
            em.remove(p);
            em.getTransaction().commit();
            return new PersonDTO(p);
        } finally {
            em.close();
        }
    }

    @Override
    public PersonDTO getPerson(int id) {
        EntityManager em = getEntityManager();
        try {
            Person p = em.find(Person.class, id);
            return new PersonDTO(p);
        } finally {
            em.close();
        }
    }

    @Override
    public PersonsDTO getAllPersons() {
        EntityManager em = getEntityManager();
        PersonsDTO personsDTO = new PersonsDTO(em.createQuery("SELECT p FROM Person p").getResultList());
        return personsDTO;
    }

    @Override
    public PersonDTO editPerson(PersonDTO p) {
        EntityManager em = getEntityManager();
        try {
            Person person = em.find(Person.class, p.getId());
            Address address = new Address(p.getStreet(), p.getZip(), p.getCity());
            Address check = checkAddress(address, em);
            if (check != null) {
                address = check;
            }
            em.getTransaction().begin();
            person.setFirstName(p.getFirstName());
            person.setLastName(p.getLastName());
            person.setPhone(p.getPhone());
            person.setLastEdited(new Date());
            person.setAddress(address);
            
            em.getTransaction().commit();
            return new PersonDTO(person);
        } finally {
            em.close();
        }
    }

}
