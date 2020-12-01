package cme.hadi.rola.repository;
import cme.hadi.rola.model.Restaurant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.util.Streamable;

import java.util.List;

public interface RestaurantRepository extends PagingAndSortingRepository<Restaurant,Long> {


    @Query(value = "SELECT u FROM Restaurant u WHERE u.name = :name ")
    List<Restaurant> findByName(String name);

    @Query(value= "SELECT u FROM Restaurant u WHERE u.type = :type ")
    List<Restaurant> findByType(String type);

    Streamable<Restaurant> findByNameContainingIgnoreCase(String prefix);
}