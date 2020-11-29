package cme.hadi.rola.controler;
import cme.hadi.rola.exception.ResourceNotFoundException;
import cme.hadi.rola.model.Visit;
import cme.hadi.rola.repository.VisitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/")
@CrossOrigin(origins="http://localhost:3000")
public class VisitControler {
    @Autowired
    private VisitRepository visitRepository;
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping("/visits")
    public void createVisit(@Valid @RequestBody Visit visit) {
        visitRepository.save(visit);
    }
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/visits")
    public List<Visit> listVisits() {
        return visitRepository.findAll();
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/visits/{id}")
    public Visit findById(@PathVariable Long id) {
        return visitRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Visit not found for id "+ id));
    }



}

