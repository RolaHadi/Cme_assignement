package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.ILocation;
import cme.hadi.rola.repository.MallRepository;
import cme.hadi.rola.repository.MinistryRepository;
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
public class MallControler {
    @Autowired
    private MallRepository mallRepository;


    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/location/mall/{id}")
    public ILocation.Mall getById(@PathVariable Long id) {
        return mallRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Mall not found for id " + id));
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/location/mall")
    public void createMall(@Valid @RequestBody ILocation.Mall mall) {
        mallRepository.save(mall);
    }
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/location/mall")
    public Page<ILocation.Mall> listMall(Pageable page) {
        return mallRepository.findAll(page);
    }


}

