package rest;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import dto.PersonDTO;
import dto.PersonsDTO;
import facades.IPersonFacadeImpl;
import javax.persistence.EntityManagerFactory;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import utils.EMF_Creator;
import utils.EMF_Creator.DbSelector;
import utils.EMF_Creator.Strategy;

@Path("person")
public class PersonResource {

    private static final EntityManagerFactory EMF = EMF_Creator.createEntityManagerFactory(DbSelector.DEV, Strategy.CREATE);
    private static final IPersonFacadeImpl FACADE =  IPersonFacadeImpl.getPersonFacade(EMF);
    private static final Gson GSON = new GsonBuilder().setPrettyPrinting().create();
            
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public String demo() {
        return "{\"msg\":\"Hello World\"}";
    }
    
    @Path("add")
    @POST
    @Consumes({MediaType.APPLICATION_JSON})
    @Produces({MediaType.APPLICATION_JSON})
    public Response addPerson(String stringPerson){
        PersonDTO personConverted = GSON.fromJson(stringPerson, PersonDTO.class);
        PersonDTO personDTO;
        try{
            personDTO = FACADE.addPerson(personConverted.getFirstName(), personConverted.getLastName(), personConverted.getPhone(),
                    personConverted.getStreet(), personConverted.getCity(), personConverted.getZip());
        } catch (Exception e) {
            System.out.println("Exception:\n\n\n" + e);
            return Response.status(404).entity("{\"code\":404,\"msg\":\"Person add"
                    + " failed\"}").build();
        }
        return Response.ok(GSON.toJson(personDTO)).build();
    }
    
    @Path("delete/{id}")
    @DELETE
    @Produces({MediaType.APPLICATION_JSON})
    public Response deletePerson(@PathParam("id")int id){
        PersonDTO personDTO;
        try {
            personDTO = FACADE.deletePerson(id);
        } catch (Exception e) {
            System.out.println("Exception:\n\n\n" + e);
            return Response.status(404).entity("{\"code\":404,\"msg\":\"Person does not exist\"}").build();
        }
        return Response.ok(GSON.toJson(personDTO)).build();
    }

    @Path("id/{id}")
    @GET
    @Produces({MediaType.APPLICATION_JSON})
    public Response getPersonId(@PathParam("id") int id){
        PersonDTO personDTO;
        try {
            personDTO = FACADE.getPerson(id);
        } catch (Exception e) {
            return Response.status(404).entity("{\"code\": 404, \"message\": \"No person with provided id found\"}").build();
        }
        return Response.ok(GSON.toJson(personDTO)).build();
    }
    
    @Path("all")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public Response getPersonAll(){
        PersonsDTO personsDTO;
        try {
            personsDTO = FACADE.getAllPersons();
            System.out.println(personsDTO);
        } catch (Exception e) {
            return Response.status(404).entity("{\"code\":404,\"msg\":\"All Persons"
                    + " not found\"}").build();
        }
        return Response.ok(GSON.toJson(personsDTO)).build();
    }
    
    @Path("edit")
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response editPerson(String stringPerson){
        PersonDTO personConverted = GSON.fromJson(stringPerson, PersonDTO.class);
        PersonDTO personDTO;
        try{
            personDTO = FACADE.editPerson(personConverted);
        } catch (Exception e) {
            return Response.status(404).entity("{\"code\":404,\"msg\":\"Edit Person not found in db\"}").build();
        }
        return Response.ok(GSON.toJson(personDTO)).build();
    }
}
