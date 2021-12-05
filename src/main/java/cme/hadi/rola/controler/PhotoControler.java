package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.ILocation;
import cme.hadi.rola.model.Photo;
import cme.hadi.rola.repository.MinistryRepository;
import cme.hadi.rola.repository.PhotoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

public class PhotoControler {
    @Autowired
    private PhotoRepository photoRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/photo")
    public void createPhoto(@Valid @RequestBody Photo photo) {
        photoRepository.save(photo);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/photo")
    public Page<Photo> listPhotos(Pageable page)
    { return photoRepository.findAll(page); }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/photo/{id}")
    public Photo getById(@PathVariable Long id) {
        return photoRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("photo not found for id " + id));
    }
}
