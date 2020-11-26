package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.Restaurant;
import cme.hadi.rola.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api/")
public class RestaurantControler {
    @Autowired
    private RestaurantRepository restaurantRepository;
    @CrossOrigin("http//localhost:3000")
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/restaurants")
    public void createRestaurant(@Valid @RequestBody Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }
    @CrossOrigin("http//localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants")
    public List<Restaurant> listRestaurant() {
        return restaurantRepository.findAll();

    }
    @CrossOrigin("http//localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/{id}")
    public Restaurant getById(@PathVariable Long id) {
        return restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Restaurant not found for id " + id));
    }
    @CrossOrigin("http//localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/name/{name}")
    public List<Restaurant> getByName(@PathVariable String name) {
        return restaurantRepository.findByName(name);
    }
    @CrossOrigin("http//localhost:3000")
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/type/{type}")
    public List<Restaurant> getByType(@PathVariable String type) {
        return restaurantRepository.findByType(type);
    }
    }

