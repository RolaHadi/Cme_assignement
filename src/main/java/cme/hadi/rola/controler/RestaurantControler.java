package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.Restaurant;
import cme.hadi.rola.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api/")
@CrossOrigin(origins="http://localhost:3000")
public class RestaurantControler {
    @Autowired
    private RestaurantRepository restaurantRepository;
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/restaurants")
    public void createRestaurant(@Valid @RequestBody Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants")
    public Page<Restaurant> listRestaurant(Pageable page) {
        return restaurantRepository.findAll(page);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/{id}")
    public Restaurant getById(@PathVariable Long id) {
        return restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Restaurant not found for id " + id));
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/name/{name}")
    public List<Restaurant> getByName(@PathVariable String name) {
        return restaurantRepository.findByName(name);
    }


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/type/{type}")
    public List<Restaurant> getByType(@PathVariable String type) {
        return restaurantRepository.findByType(type);
    }


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/search/{prefix}")
    public List<Restaurant> getByPrefix(@PathVariable String prefix) {
        return restaurantRepository.findByNameContainingIgnoreCase(prefix).toList();
    }







    }

