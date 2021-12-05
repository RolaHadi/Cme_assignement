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
    Visitor visitor;
    ILocation location;
    Date date;

    public Visit(Visitor visitor, ILocation location, Date date) {
        this.visitor = visitor;
        this.location = location;
        this.date = date;
    }

    public Visit() {
    }
}

