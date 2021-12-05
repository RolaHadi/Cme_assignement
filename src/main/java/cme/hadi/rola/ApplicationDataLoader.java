package cme.hadi.rola;

import cme.hadi.rola.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

@Component
    public class ApplicationDataLoader implements ApplicationRunner {
    private final CameraRepository cameraRepository;
    private final MallRepository mallRepository;
    private final MinistryRepository ministryRepository;
    private final PhotoRepository photoRepository;
    private final VisitRepository visitRepository;
    private final VisitorRepository visitorRepository;


    @Autowired
    public ApplicationDataLoader(CameraRepository cameraRepository, MallRepository mallRepository, MinistryRepository ministryRepository, PhotoRepository photoRepository, VisitRepository visitRepository, VisitorRepository visitorRepository) {
        this.cameraRepository = cameraRepository;
        this.mallRepository = mallRepository;
        this.ministryRepository = ministryRepository;
        this.photoRepository = photoRepository;
        this.visitRepository = visitRepository;
        this.visitorRepository = visitorRepository;
    }

    @Override
    public void run(ApplicationArguments args) throws Exception {
    }
}
