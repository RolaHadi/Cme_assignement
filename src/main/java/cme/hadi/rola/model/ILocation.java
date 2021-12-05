package cme.hadi.rola.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

public interface ILocation {
    String latitude = null;
    String longitude = null;
    ArrayList<Camera> cameras = null;

    @Entity
    @Getter
    @Setter
    @Table(name="Mall")
    class Mall implements ILocation{
        @Id
        @Column(name = "id", nullable = false)
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        String latitude = null;
        String longitude = null;

        @OneToMany(mappedBy="mall",cascade = CascadeType.MERGE)
        @JsonIgnore
        ArrayList<Camera> cameras = null;

        public Mall(String latitude, String longitude) {
            this.latitude = latitude;
            this.longitude = longitude;
        }

        public Mall() {
        }
    }

    @Entity
    @Getter
    @Setter
    @Table(name="Ministry")
    class Ministry implements ILocation{
        @Id
        @Column(name = "id", nullable = false)
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        String latitude = null;
        String longitude = null;

        @OneToMany(mappedBy="ministry",cascade = CascadeType.MERGE)
        @JsonIgnore
        ArrayList<Camera> cameras = null;

        public Ministry(String latitude, String longitude) {
            this.latitude = latitude;
            this.longitude = longitude;
        }

        public Ministry() {
        }
    }
}
