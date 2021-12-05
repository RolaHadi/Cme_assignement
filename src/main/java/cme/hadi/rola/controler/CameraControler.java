package cme.hadi.rola.controler;

import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.Camera;
import cme.hadi.rola.repository.CameraRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

public class CameraControler {
    @Autowired
    private CameraRepository cameraRepository;

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/camera")
    public void createCamera(@Valid @RequestBody Camera camera) {
        cameraRepository.save(camera);
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/camera")
    public Page<Camera> listCamera(Pageable page)
    { return cameraRepository.findAll(page); }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/camera/{id}")
    public Camera getById(@PathVariable Long id) {
        return cameraRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Ministry not found for id " + id));
    }
}
