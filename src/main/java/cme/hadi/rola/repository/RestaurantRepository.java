package cme.hadi.rola.repository;
import cme.hadi.rola.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {


    @Query(value = "SELECT u FROM Restaurant u WHERE u.name = :name ")
    Collection<Restaurant> findByName(String name);

    @Query(value= "SELECT u FROM Restaurant u WHERE u.type = :type ")
    Collection<Restaurant> findByType(String type);
}