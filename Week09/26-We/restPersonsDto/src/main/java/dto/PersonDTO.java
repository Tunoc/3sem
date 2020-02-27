package dto;

import entities.Person;

/**
 *
 * @author rando
 */
public class PersonDTO {

    private Integer id;
    private String firstName;
    private String lastName;
    private String phone;

//Constructors
    public PersonDTO() {
    }

    public PersonDTO(Person p) {
        this.firstName = p.getFirstName();
        this.lastName = p.getLastName();
        this.phone = p.getPhone();
        this.id = p.getId();
    }

    public PersonDTO(String firstName, String lastName, String phone) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
    }

//Setters & Getters
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
    

//ToString
    @Override
    public String toString() {
        return "PersonDTO{" + "firstName=" + firstName + ", lastName=" + lastName + ", phone=" + phone + '}';
    }

}
