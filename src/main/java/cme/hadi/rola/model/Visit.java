package cme.hadi.rola.model;
import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Getter
@Setter
@Table(name="Visit")
public class Visit {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Date date;
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name="restaurantVisits")
    private Restaurant restaurant;


    public Visit(Restaurant restaurant, Date date) {
        this.restaurant = restaurant;
        this.date = date;
    }

    public Visit() {
    }
}

