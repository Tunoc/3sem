/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

/**
 *
 * @author rando
 */
public class Animal {
    private String type = "Duck";
    private String sound = "Quack";
    private int birthYear = 2000;

    public Animal(String type, String sound, int birthYear) {
        this.type = type;
        this.sound = sound;
        this.birthYear = birthYear;
    }

    public Animal() {
        
    }

    
    
    
}
