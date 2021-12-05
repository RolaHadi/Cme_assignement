package cme.hadi.rola.model;

import java.util.ArrayList;
import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="Visitor")
public class Visitor {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    String name;

    @OneToMany(mappedBy="visitor",cascade = CascadeType.MERGE)
    @JsonIgnore
    ArrayList< Visit> visits;

    public Visitor(String name) {
        this.name = name;
    }

    public Visitor() {
    }
}
