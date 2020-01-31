/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package rest;

import com.google.gson.Gson;
import entities.Animal;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * REST Web Service
 *
 * @author rando
 */
@Path("animal")
public class AnimalResource {

    @Context
    private UriInfo context;

    /**
     * Creates a new instance of AnimalResource
     */
    public AnimalResource() {
    }

    /**
     * Retrieves representation of an instance of rest.AnimalResource
     *
     * @return an instance of java.lang.String
     */
    @GET //HTTP - Get, Post, Put, Delete  SQL - Create, Read, Update, Delete
    //@Produces(MediaType.APPLICATION_JSON)
    public String getJson() {
        //TODO return proper representation object
        //return "{\"msg\":\"det virker\"}";
        return "Hello from my first web service";
    }

    /**
     * PUT method for updating or creating an instance of AnimalResource
     *
     * @param content representation for the resource
     */
    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    public void putJson(String content) {
    }
    
    
    //Man kan også lave 2 get metoder herinde - Hvis man husker at give den en ny path med f.eks.
    //Men best practice er vel at lave nye klasser for nye resources?
    //ID delen er endpoint som vi kan bruge til at display i f.eks vores besked som set for neden.
    @GET
    @Path("/random")
    @Produces(MediaType.APPLICATION_JSON)
    public String getJson(@PathParam("id")int id) {
        List<Animal> randomAnimal = animalCollection();
        Animal finAnimal = getRandomElement(randomAnimal);
        return new Gson().toJson(finAnimal);
    }
    
    public List<Animal> animalCollection(){
        List<Animal> animalList = new ArrayList();
        animalList.add(new Animal("Duck", "Quack", 2000));
        animalList.add(new Animal("Dog", "Bork", 0001));
        animalList.add(new Animal("Cat", "Meow", 3333));
        animalList.add(new Animal("Turtle", "Silence..", 0000));
        return animalList;
    }
    
    public Animal getRandomElement(List<Animal> list) 
    { 
        Random rand = new Random(); 
        return list.get(rand.nextInt(list.size())); 
    } 
    
    
    
    
    
}
