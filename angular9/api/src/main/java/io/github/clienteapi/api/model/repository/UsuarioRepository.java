package io.github.clienteapi.api.model.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.clienteapi.api.model.entity.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
	
	Optional<Usuario> findByLogin(String login);
	
	boolean existsByLogin(String login);

}
