package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.Photo;
import cme.hadi.rola.model.Visitor;
import cme.hadi.rola.repository.PhotoRepository;
import cme.hadi.rola.repository.VisitorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

public class VisitorControler {
    @Autowired
    private VisitorRepository visitorRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/visitor")
    public void createVisitor(@Valid @RequestBody Visitor visitor) {
        visitorRepository.save(visitor);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/visitor")
    public Page<Visitor> listVisitors(Pageable page)
    { return visitorRepository.findAll(page); }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/visitor/{id}")
    public Visitor getById(@PathVariable Long id) {
        return visitorRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("visitor not found for id " + id));
    }
}
