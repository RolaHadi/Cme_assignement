package cme.hadi.rola.repository;
import cme.hadi.rola.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;
import java.util.Optional;

public interface RestaurantRepository extends JpaRepository<Restaurant,Long> {


    @Query(value = "select u from restaurant u where u.name = ?1",nativeQuery = true)
    Restaurant findByName(String name);

    @Query(value= "select u from restaurant u where u.type = ?1", nativeQuery = true)
    Restaurant findByType(String type);
}