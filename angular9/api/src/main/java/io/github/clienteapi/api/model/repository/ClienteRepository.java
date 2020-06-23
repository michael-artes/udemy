package io.github.clienteapi.api.model.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.clienteapi.api.model.entity.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer> {

}
