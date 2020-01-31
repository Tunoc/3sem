/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import dto.CustomerDTO;
import entities.BankCustomer;
import entities.MakeTestData;
import static entities.MakeTestData.getMakeTestData;
import facades.BankCustomerFacade;
import static facades.BankCustomerFacade.getBankCustomerFacade;
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
@Path("bankcustomer")
public class BankcustomerResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of BankcustomerResource
     */
    public BankcustomerResource() {
    }

    /**
     * Retrieves representation of an instance of rest.BankcustomerResource
     *
     * @return an instance of java.lang.String
     */
    @GET
    @Path("/id/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson1(@PathParam("id") Integer id) {
        BankCustomerFacade bkf = getBankCustomerFacade(Persistence.createEntityManagerFactory("pu"));
        CustomerDTO cDTO = bkf.getCustomerByID(id);
        return new Gson().toJson(cDTO);
    }

    @GET
    @Path("/name/{name}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson2(@PathParam("name") String name) {
        BankCustomerFacade bkf = getBankCustomerFacade(Persistence.createEntityManagerFactory("pu"));
        List<CustomerDTO> cDTO = bkf.getCustomerByName(name);
        return new Gson().toJson(cDTO);
    }

    @GET
    @Path("/BankMember/add/{firstname}/{lastname}/{accountnumber}/{balance}/{customerranking}/{internalinfo}")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson3(
            @PathParam("firstname") String firstName,
            @PathParam("lastname") String lastName,
            @PathParam("accountnumber") String accNum,
            @PathParam("balance") double balance,
            @PathParam("customerranking") int custRank,
            @PathParam("internalinfo") String intInfo) {
        BankCustomerFacade bkf = getBankCustomerFacade(Persistence.createEntityManagerFactory("pu"));
        BankCustomer cust = new BankCustomer(firstName, lastName, accNum, balance, custRank, intInfo);
        BankCustomer bk = bkf.addCustomer(cust);
        return new Gson().toJson("Customer was added");
    }

    @GET
    @Path("/BankMember/all")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getJson4() {
        BankCustomerFacade bkf = getBankCustomerFacade(Persistence.createEntityManagerFactory("pu"));
        List<BankCustomer> allCustomers = bkf.getAllBankCustomers();
        return Response.ok().entity(new Gson().toJson(allCustomers)).build();
    }

    @GET
    @Path("/BankMember/populate/database")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson5() {
        MakeTestData mtd = getMakeTestData(Persistence.createEntityManagerFactory("pu"));
        mtd.populateDB();
        String msg = "Updated DB";
        return new Gson().toJson(msg);
    }

    /**
     * PUT method for updating or creating an instance of BankcustomerResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
}
