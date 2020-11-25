package cme.hadi.rola.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@Table(name="Restaurant")
public class Restaurant {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String type;
    private long avCost;
    private String address;
    private String phone;
    private String imageUrl;

    @OneToMany(mappedBy="restaurant",cascade = CascadeType.MERGE)
    @JsonIgnore
    List<Visit> restaurantVisits;

    public Restaurant( String name, String type, long avCost, String address, String phone,String imageUrl) {
        this.name = name;
        this.type = type;
        this.avCost = avCost;
        this.address = address;
        this.phone = phone;
        this.imageUrl=imageUrl;
    }

    public Restaurant() {
    }
};



