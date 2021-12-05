package cme.hadi.rola.repository;

import cme.hadi.rola.model.ILocation;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MallRepository  extends JpaRepository<ILocation.Mall,Long> {
}
