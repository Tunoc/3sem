package facades;

import dto.PersonDTO;
import dto.PersonsDTO;
import entities.Person;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import static org.hamcrest.CoreMatchers.everyItem;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.Matchers.hasProperty;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.AfterEach;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import utils.EMF_Creator;
import utils.EMF_Creator.DbSelector;
import utils.EMF_Creator.Strategy;

//Uncomment the line below, to temporarily disable this test
//@Disabled
public class IPersonFacadeImplTest {

    private static EntityManagerFactory emf;
    private static IPersonFacadeImpl facade;
    private static Person p1, p2;

    public IPersonFacadeImplTest() {
    }

    @BeforeAll
    public static void setUpClass() {
       emf = EMF_Creator.createEntityManagerFactory(DbSelector.TEST,Strategy.DROP_AND_CREATE);
       facade = IPersonFacadeImpl.getPersonFacade(emf);
    }

    @AfterAll
    public static void tearDownClass() {
        //..
    }

    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        p1 = new Person("Karl", "Aage", "86754253");
        p2 = new Person("Alfred", "Johansen", "20378416");
        try {
            em.getTransaction().begin();
            em.createNamedQuery("Person.deleteAllRows").executeUpdate();
            em.persist(p1);
            em.persist(p2);
            em.getTransaction().commit();
        } finally {
            em.close();
        }
    }

    @AfterEach
    public void tearDown() {
        //..
    }
    
    @Test
    public void testAddPerson() {
        System.out.println("createPerson");
        String fname = "TestFirstName";
        String lname = "TestLastName";
        String phone = "852";
        PersonDTO personDTO = facade.addPerson(fname, lname, phone);
        assertEquals(new PersonDTO(fname, lname, phone).toString(), personDTO.toString());
        }
    
    @Test
    public void testDeletePerson(){
        System.out.println("deletePerson");
        PersonDTO personDTO = facade.deletePerson(p1.getId());
        assertEquals(new PersonDTO(p1).toString(), personDTO.toString());
    }
    
    @Test
    public void testGetPerson(){
        System.out.println("getPerson");
        PersonDTO personDTO = facade.getPerson(p1.getId());
        assertEquals(new PersonDTO(p1).toString(), personDTO.toString());
    }
    
    @Test
    public void testGetAllPersons(){
        System.out.println("getAllPersons");
        PersonsDTO persons = facade.getAllPersons();
        assertThat(persons.getPersonList(), everyItem(hasProperty("firstName")));
    }
    
    @Test
    public void testEditPerson(){
        System.out.println("editPerson");
        p1.setLastName("LastNameEdit");
        PersonDTO personDTO = facade.editPerson(new PersonDTO(p1));
        assertEquals(p1.getLastName(), personDTO.getLastName());
    }

}
