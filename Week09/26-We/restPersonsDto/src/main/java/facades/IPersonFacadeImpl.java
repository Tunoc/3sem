package facades;

import dto.PersonDTO;
import dto.PersonsDTO;
import entities.Person;
import java.util.Date;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;


/**
 *
 * @author rando 
 */
public class IPersonFacadeImpl implements IPersonFacade{

    private static IPersonFacadeImpl instance;
    private static EntityManagerFactory emf;
    
    //Private Constructor to ensure Singleton
    private IPersonFacadeImpl() {}
    
    
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
    public PersonDTO addPerson(String fName, String lName, String phone) {
        Person p = new Person(fName, lName, phone);
        EntityManager em = getEntityManager();
        try {
            em.getTransaction().begin();
            em.persist(p);
            em.getTransaction().commit();
            return new PersonDTO(p);
        } finally {
            em.close();
        }
    }

    @Override
    public PersonDTO deletePerson(int id) {
        EntityManager em = getEntityManager();
        try{
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
        try{
            Person person = em.find(Person.class, p.getId());
            em.getTransaction().begin();
            person.setFirstName(p.getFirstName());
            person.setLastName(p.getLastName());
            person.setPhone(p.getPhone());
            person.setLastEdited(new Date());
            em.getTransaction().commit();
            return new PersonDTO(person);
        }   finally {
            em.close();
        }
    }

}
