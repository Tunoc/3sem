package rest;

import dto.PersonDTO;
import entities.Address;
import entities.Person;
import io.restassured.RestAssured;
import static io.restassured.RestAssured.given;
import io.restassured.http.ContentType;
import io.restassured.parsing.Parser;
import java.net.URI;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.core.UriBuilder;
import org.glassfish.grizzly.http.server.HttpServer;
import org.glassfish.grizzly.http.util.HttpStatus;
import org.glassfish.jersey.grizzly2.httpserver.GrizzlyHttpServerFactory;
import org.glassfish.jersey.server.ResourceConfig;
import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import utils.EMF_Creator;
import utils.EMF_Creator.DbSelector;
import utils.EMF_Creator.Strategy;

public class PersonResourceTest {

    private static final int SERVER_PORT = 7777;
    private static final String SERVER_URL = "http://localhost/api";
    private static final String TEST_DB = "jdbc:mysql://localhost:3307/startcode_test";
    private static Person p1, p2;

    static final URI BASE_URI = UriBuilder.fromUri(SERVER_URL).port(SERVER_PORT).build();
    private static HttpServer httpServer;
    private static EntityManagerFactory emf;

    static HttpServer startServer() {
        ResourceConfig rc = ResourceConfig.forApplication(new ApplicationConfig());
        return GrizzlyHttpServerFactory.createHttpServer(BASE_URI, rc);
    }

    @BeforeAll
    public static void setUpClass() {
        EMF_Creator.startREST_TestWithDB();
        emf = EMF_Creator.createEntityManagerFactory(DbSelector.TEST, Strategy.CREATE);

        //Set System property so the project executed by the Grizly-server wil use this same database
        System.setProperty("IS_TEST", TEST_DB);
        httpServer = startServer();

        //Setup RestAssured
        RestAssured.baseURI = SERVER_URL;
        RestAssured.port = SERVER_PORT;
        RestAssured.defaultParser = Parser.JSON;
    }

    @AfterAll
    public static void closeTestServer() {
        EMF_Creator.endREST_TestWithDB();
        httpServer.shutdownNow();
    }

    @BeforeEach
    public void setUp() {
        EntityManager em = emf.createEntityManager();
        Address a1 = new Address("abc", 1, "def");
        p1 = new Person("Karl", "Aage", "86754253", a1);
        p2 = new Person("Alfred", "Johansen", "20378416", a1);
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

    @Test
    public void testServerConnection() throws Exception {
        given().when()
                .get("/person")
                .then()
                .assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("msg", is("Hello World"));
    }

    @Test
    public void testAddPerson() throws Exception {
        given().contentType(ContentType.JSON)
                .body(new PersonDTO("TestFirstName", "TestLastName", "TestPhone", "TestStreet", "TestCity", 852))
                .when()
                .post("person/add")
                .then()
                .body("firstName", equalTo("TestFirstName"))
                .body("lastName", equalTo("TestLastName"))
                .body("id", notNullValue())
                .body("street", equalTo("TestStreet"));
    }

    @Test
    public void testDeletePerson() throws Exception {
        int id = p1.getId();
        given().contentType(ContentType.JSON)
                .when()
                .delete("person/delete/{id}", id)
                .then()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("firstName", equalTo("Karl"))
                .body("lastName", equalTo("Aage"));
    }

    @Test
    public void testGetPerson() throws Exception {
        int id = p2.getId();
        given().contentType(ContentType.JSON)
                .when()
                .get("person/id/{id}", id)
                .then()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("firstName", equalTo("Alfred"))
                .body("lastName", equalTo("Johansen"));
    }

    @Test
    public void testGetAllPersons() throws Exception {
        given().when()
                .get("person/all").
                then()
                .assertThat()
                .statusCode(HttpStatus.OK_200.getStatusCode())
                .body("PersonList", hasSize(2));
    }

    @Test
    public void testEditPerson() throws Exception {
        p1.setLastName("Larsen");
        given().contentType(ContentType.JSON)
                .body(new PersonDTO(p1))
                .when()
                .put("person/edit")
                .then()
                .body("lastName", equalTo(p1.getLastName()));
    }
    
    @Test
    public void testExceptionGetID() throws Exception {
        given().contentType(ContentType.JSON)
                .when()
                .get("/person/id/{id}", 0)
                .then()
                .assertThat()
                .statusCode(HttpStatus.NOT_FOUND_404.getStatusCode())
                .body("message", equalTo("No person with provided id found"));
    }
    
    @Test
    public void testExceptionDeleteID() throws Exception {
        given().contentType(ContentType.JSON)
                .when()
                .delete("/person/delete/{id}", 0)
                .then()
                .assertThat()
                .statusCode(HttpStatus.NOT_FOUND_404.getStatusCode())
                .body("msg", equalTo("Person does not exist"));
    }

}