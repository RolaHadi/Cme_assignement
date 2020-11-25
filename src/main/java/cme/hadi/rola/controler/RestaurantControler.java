package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.Restaurant;
import cme.hadi.rola.repository.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;


@RestController
@RequestMapping("/api/")
public class RestaurantControler {
    @Autowired
    private RestaurantRepository restaurantRepository;

    @CrossOrigin
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/restaurants")
    public void createRestaurant(@Valid @RequestBody Restaurant restaurant) {
        restaurantRepository.save(restaurant);
    }

    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants")
    public List<Restaurant> listRestaurant() {
        return restaurantRepository.findAll();

    }

    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/{id}")
    public Restaurant getById(@PathVariable Long id) {
        return restaurantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Restaurant not found for id " + id));
    }

    /*@CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/name/{name}")
    public Restaurant getByName(@PathVariable String nameofResto) {
        return restaurantRepository.findByName(nameofResto).orElseThrow(() -> new ResourceNotFoundException("Restaurant not found for name " ));
    }

    @CrossOrigin
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/restaurants/type/{type}")
    public Restaurant getByType(@PathVariable String typeofResto) {
        return restaurantRepository.findByType(typeofResto).orElseThrow(() -> new ResourceNotFoundException("Restaurant not found for type "));} */
    }

