/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import dbfacade.CustomerFacade;
import static dbfacade.CustomerFacade.getCustomerFacade;
import entity.Customer;
import java.util.List;
import java.util.Random;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.Produces;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

/**
 * REST Web Service
 *
 * @author rando
 */
@Path("customer")
public class CustomerResource {
    
    @Context
    private UriInfo context;

    /**
     * Creates a new instance of CustomerResource
     */
    public CustomerResource() {
    }

    /**
     * Retrieves representation of an instance of rest.CustomerResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson1() { //Kunne ikke bruge String
        CustomerFacade cf = getCustomerFacade(Persistence.createEntityManagerFactory("pu"));
        List<Customer> allCustomers = cf.getAllCustomers();
        return Response.ok().entity(new Gson().toJson(allCustomers)).build();
    }
    
    @GET
    @Path("/random")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson2() {
        CustomerFacade cf = getCustomerFacade(Persistence.createEntityManagerFactory("pu"));
        List<Customer> allCustomers = cf.getAllCustomers();
        Customer customer = getRandomElement(allCustomers);
        return new Gson().toJson(customer);
    }
    
    public Customer getRandomElement(List<Customer> list) 
    { 
        Random rand = new Random(); 
        return list.get(rand.nextInt(list.size())); 
    } 
    
    
    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson3(@PathParam("id")int id) {
        CustomerFacade cf = getCustomerFacade(Persistence.createEntityManagerFactory("pu"));
        Customer customer = cf.findByID(id);
        return new Gson().toJson(customer);
    }
    
    
    

    /**
     * PUT method for updating or creating an instance of CustomerResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
