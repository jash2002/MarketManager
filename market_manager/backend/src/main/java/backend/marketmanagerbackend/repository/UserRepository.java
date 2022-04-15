package backend.marketmanagerbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import backend.marketmanagerbackend.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{

}