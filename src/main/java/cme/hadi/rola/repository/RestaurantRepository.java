package cme.hadi.rola.repository;
import cme.hadi.rola.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {


    @Query(value = "SELECT u FROM Restaurant u WHERE u.name = :name ")
    List<Restaurant> findByName(String name);

    @Query(value= "SELECT u FROM Restaurant u WHERE u.type = :type ")
    List<Restaurant> findByType(String type);
}