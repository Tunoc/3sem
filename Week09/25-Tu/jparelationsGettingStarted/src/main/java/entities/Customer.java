package entities;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 *
 * @author rando
 */
@Entity
public class Customer implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cId;
    private String firstName;
    private String lastName;
    /*
    1)
    @OneToOne
    With the one to one relation was generated another column in the Customer table.
    That column is called; "ADDRESS_ID". Den er en foreign key som hører sammen med en 
    primary key "ID" fra "ADDRESSES" tabel.
    */
    
    /*
    2)
    @OneToOne
    The first change we see imedietly is that we get a;
    "@OneToOne(mappedBy = "address")
    private Customer customer;"
    generated in our Address.java class.
    
    After running we see that the database still looks the same as before.
    This also shows us the difference between Unidirectional and Bidirectional is what is happening in Java and not in the database.
    What i mean by that is that the database is relational. In the database the Customers will allways have a realtion to the Address table.
    This is because they are connected through a private and public key. However in Java the unidirectional One to One connection,
    allows the Customer to see the Address to "see" the address but not vice versa. And the unidirectional allows both the Address to "see" the Customer
    And the Customer to "see" the Address.
    */
    
    /*
    3)
    @OneToMany
    This generates 3 tables in the database;
    "ADDRESS
    CUSTOMER
    CUSTOMER_ADDRESS"
    It makes a relation table between 2 tables.
    The Customer_Address table holds 2 columns. One with the ID-PK from Address and the other with ID-PK from Customer.

    @OneToMany(cascade=CascadeType.PERSIST)
    @JoinColumn(name = "cId")    
    After joining the 2 colums into one and if we add the cascade persist. When we then persist our data in the Tester class
    We don't need to first persist the addresses and then persist the customers. We can just add the addresses to the customers
    and cascade persist.
     */
    
    /*
    4)
    "@OneToMany(mappedBy = "customer")"
    We generated the OneToMany relation above in the Customer entity as well as the code down below in Addresses.
    "@ManyToOne
    private Customer customer;"
    The "mappedBy = "customer" attribute specifies that the "private Customer customer" field in Address own the relationship.
    
    In the database we see 2 tables Addresses with City, Street, ID & CustomerID. Customers with frist-, lastName and ID.
    
    The step requiered is again adding the @OneToMany(cascade=CascadeType.PERSIST).
    And we need to add the customer to the address. I forgot to turn around the customer and address earlier, like the assignment implied that we should.
    */
    
    /*
    5)
    How can we implement ManyToMany relationships in an OO-language like Java?
        We can implement a many to many relation in OO-languages like java, by making lists of obejcts.
        Just like we have here in this project, Adresses can have a attribute list of customers and Customer can have a attribute list of Address.
    
    How can we implement ManyToMany relationships in a Relational Database?
        We can implement a many to many relation in a relational databse by connecting 2 tabels like down below.
        If we have a Customer and Address table, we could make a third table called, "Link_Csutomer_Address".
        The Link_Customer_Address then contains the PK from both Customer and Address.
        And that is one way to implement a many to many relationship in the DB.
        - The link table is nescesary if there is a many to many relation. If there is a one to many we can just use a PK and FK.
    
    a) <- Remove the generated code.
    
    b) <- Create a "façade" class CustomerFacade and add the following methods.
    
    
    */
    
    private List<Address> addresses = new ArrayList();

//Constructors
    public Customer() {
    }

    public Customer(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

//Getters & Setters
    public Integer getCId() {
        return cId;
    }

    public void setCId(Integer id) {
        this.cId = id;
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

    public void addAddress(Address address) {
        addresses.add(address);
        address.setCustomer(this);//Test if this works with my code.
    }
}
