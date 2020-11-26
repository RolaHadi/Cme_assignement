package cme.hadi.rola;

import cme.hadi.rola.model.Restaurant;
import cme.hadi.rola.model.Visit;
import cme.hadi.rola.repository.RestaurantRepository;
import cme.hadi.rola.repository.VisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.Date;

@Component
    public class ApplicationDataLoader implements ApplicationRunner {
    private final RestaurantRepository restaurantRepository;
    private final VisitRepository visitRepository;

    @Autowired
    public ApplicationDataLoader(RestaurantRepository restaurantRepository, VisitRepository visitRepository) {
        this.restaurantRepository = restaurantRepository;
        this.visitRepository = visitRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
        Restaurant bebabel = new Restaurant("Bebabel", "lebanese",50000,"Minet Hosn","01443546","/photos/bebabel.jpg");
        restaurantRepository.save(bebabel);
        Restaurant roadster = new Restaurant("Roadster Diner","american",50000,"Verdun","01756646","/photos/roadster.jpg");
        restaurantRepository.save(roadster);
        Restaurant macdonald = new Restaurant("Macdonald","american",35000,"Mansourieh","01943546","/photos/macdonald.jpg");
        restaurantRepository.save(macdonald);
        Restaurant tsunami = new Restaurant("Tsunami","asian",35000,"Achrafieh","01773546","/photos/tsunamie.jpg");
        restaurantRepository.save(tsunami);
        Date bebabelDate = new Date(2020,11,21);
        Visit bebabelVisit= new Visit(bebabel,bebabelDate);
        visitRepository.save(bebabelVisit);
        Date macdonaldDate = new Date(2020,9,18);
        Visit macdonaldVisit= new Visit(macdonald,macdonaldDate);
        visitRepository.save(macdonaldVisit);
        Date roadsterDate = new Date(2019,12,19);
        Visit roadsterVisit= new Visit(roadster,roadsterDate);
        visitRepository.save(roadsterVisit);
        Date tsunamiDate = new Date(2019,9,20);
        Visit tsunamiVisit= new Visit(tsunami,tsunamiDate);
        visitRepository.save(tsunamiVisit);
    }
}
