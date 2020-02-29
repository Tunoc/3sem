package entities;

import java.io.Serializable;
import java.util.List;
import java.util.Objects;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

/**
 *
 * @author rando
 */
@Entity
public class Orders implements Serializable {

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long orderID;
    @ManyToOne
    private Customer customer;
    @OneToMany(cascade = CascadeType.PERSIST)
    private List<OrderLine> orders;

//Constructors
    public Orders() {
    }

    public Orders(Long orderID) {
        this.orderID = orderID;
    }

    public Orders(Customer customer) {
        this.customer = customer;
    }

//Getters & Setters
    public Long getOrderID() {
        return orderID;
    }

    public void setOrderID(Long orderID) {
        this.orderID = orderID;
    }

    @Override
    public int hashCode() {
        int hash = 3;
        hash = 97 * hash + Objects.hashCode(this.orderID);
        return hash;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        final Orders other = (Orders) obj;
        if (!Objects.equals(this.orderID, other.orderID)) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "Orders{" + "orderID=" + orderID + '}';
    }

}
