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
        Restaurant roadster = new Restaurant("Roadster ","american",50000,"Verdun","01756646","/photos/roadster.jpg");
        restaurantRepository.save(roadster);
        Restaurant macdonald = new Restaurant("Macdonald","american",25000,"Mansourieh","01943546","/photos/macdonald.jpg");
        restaurantRepository.save(macdonald);
        Restaurant tsunami = new Restaurant("Tsunami","asian",75000,"Achrafieh","01773546","/photos/tsunamie.jpg");
        restaurantRepository.save(tsunami);
        Restaurant kfc = new Restaurant("KFC","american",25000,"Hamra","01453546","/photos/kfc.jpg");
        restaurantRepository.save(kfc);
        Restaurant leila = new Restaurant("Leila","lebanese",45000,"Zeytouna Bay","01653546","/photos/leila.jpg");
        restaurantRepository.save(leila);
        Restaurant dipndip = new Restaurant("Dip n Dip","american",35000,"Verdun","01853546","/photos/dipndip.jpg");
        restaurantRepository.save(dipndip);
        Restaurant kababji = new Restaurant("Kababji","lebanese",35000,"Hamra","01353546","/photos/kababji.jpg");
        restaurantRepository.save(kababji);
        Restaurant obi = new Restaurant("Obi","asian",55000,"Badaro","01753546","/photos/obi.jpg");
        restaurantRepository.save(obi);
        Restaurant kampai = new Restaurant("Kampai","asian",65000,"Downtown","01953246","/photos/kampai.jpg");
        restaurantRepository.save(kampai);





    }
}
