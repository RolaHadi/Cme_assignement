package cme.hadi.rola.model;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;

@Entity
@Getter
@Setter
@Table(name="Camera")
public class Camera {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String ip;

    private ArrayList< Photo> photos;

    public Camera(String ip) {
        this.ip = ip;
    }

    public Camera() {
    }
}
