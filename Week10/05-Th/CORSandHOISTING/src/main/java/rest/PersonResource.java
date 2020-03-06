package rest;

import com.google.gson.Gson;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.UriInfo;

/**
 * REST Web Service
 *
 * @author rando
 */
@Path("person")
public class PersonResource {

    private static Person person = new Person("dummyFirstName", "dummyLastName");
    private static Gson gson = new Gson();
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of PersonResource
     */
    public PersonResource() {
    }

    /**
     * Retrieves representation of an instance of rest.PersonResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        return gson.toJson(person);
    }

    /**
     * PUT method for updating or creating an instance of PersonResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
        person = gson.fromJson(content, Person.class);
    }
}
