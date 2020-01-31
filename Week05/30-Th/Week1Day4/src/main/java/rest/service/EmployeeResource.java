/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest.service;

import com.google.gson.Gson;
import dto.EmployeeDTO;
import entities.Employee;
import facades.EmployeeFacade;
import static facades.EmployeeFacade.getEmployeeFacade;
import java.util.List;
import javax.persistence.Persistence;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
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
@Path("employee")
public class EmployeeResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of EmployeeResource
     */
    public EmployeeResource() {
    }

    /**
     * Retrieves representation of an instance of rest.service.EmployeeResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson1() {
        EmployeeFacade ef = getEmployeeFacade(Persistence.createEntityManagerFactory("pu"));
        List<Employee> allEmployees = ef.getAllEmployees();
        return Response.ok().entity(new Gson().toJson(allEmployees)).build();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson2(@PathParam("id") Long id) {
        EmployeeFacade ef = getEmployeeFacade(Persistence.createEntityManagerFactory("pu"));
        EmployeeDTO employee = ef.getEmployeeByID(id);
        return new Gson().toJson(employee);
    }

    @GET
    @Path("/highestpaid")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson3() {
        EmployeeFacade ef = getEmployeeFacade(Persistence.createEntityManagerFactory("pu"));
        List<EmployeeDTO> employee = ef.getEmployeeWithHighestSalary();
        return new Gson().toJson(employee);
    }

    @GET
    @Path("/name/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson4(@PathParam("name") String name) {
        EmployeeFacade ef = getEmployeeFacade(Persistence.createEntityManagerFactory("pu"));
        List<EmployeeDTO> employee = ef.getEmployeeByName(name);
        return new Gson().toJson(employee);
    }
    
    @GET
    @Path("/populate/database")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson5() {
        EmployeeFacade ef = getEmployeeFacade(Persistence.createEntityManagerFactory("pu"));
        ef.populateDB();
        String msg = "Updated DB";
        return new Gson().toJson(msg);
    }

    /**
     * PUT method for updating or creating an instance of EmployeeResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public Response putJson(String content) {
        return null;
    }
}
