package cme.hadi.rola.repository;

import cme.hadi.rola.model.Visit;
import cme.hadi.rola.model.Visitor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VisitorRepository extends JpaRepository<Visitor,Long> {
}
