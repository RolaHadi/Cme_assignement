package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.ILocation;
import cme.hadi.rola.repository.MinistryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

public class MinistryController {

    @Autowired
    private MinistryRepository ministryRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/location/ministry")
    public void createMinistry(@Valid @RequestBody ILocation.Ministry ministry) {
        ministryRepository.save(ministry);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/location/ministry")
    public Page<ILocation.Ministry> listMinistry(Pageable page)
    { return ministryRepository.findAll(page); }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/location/ministry/{id}")
    public ILocation.Ministry getById(@PathVariable Long id) {
        return ministryRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ministry not found for id " + id));
    }
}
