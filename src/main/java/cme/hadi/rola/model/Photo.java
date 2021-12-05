package cme.hadi.rola.model;


import cme.hadi.rola.model.enums.AccessRightEnum;
import cme.hadi.rola.model.enums.DetectionResultEnum;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@Table(name="Photo")
public class Photo {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    Visitor person;
    AccessRightEnum accessRight;
    DetectionResultEnum detectionResults;

    public Photo(Visitor person, AccessRightEnum accessRight, DetectionResultEnum detectionResults) {
        this.person = person;
        this.accessRight = accessRight;
        this.detectionResults = detectionResults;
    }

    public Photo() {
    }
}
