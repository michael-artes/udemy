package io.github.clienteapi.api.rest;

import javax.validation.Valid;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.server.ResponseStatusException;

public abstract class GenericController<T,E> {
	
	@SuppressWarnings("rawtypes")
	protected JpaRepository repository;
	
	@SuppressWarnings("rawtypes")
	GenericController(JpaRepository repository) {
		this.repository = repository;
	}
	
	
	@SuppressWarnings("unchecked")
	@GetMapping("{id}")
	public T findById( @PathVariable Integer id ) throws Throwable {
		return (T) repository
				.findById(id)
				.orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "T não econtrado!" + this.toString()) );
	}
	
	@SuppressWarnings("unchecked")
	@GetMapping
	public  Iterable<T> findAll() {
		return repository.findAll();
	}
	
	@SuppressWarnings("unchecked")
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletar( @PathVariable Integer id ) throws Throwable {
		findById(id);
		repository.deleteById(id);
	}
	
	
	@PutMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public abstract void atualizar( @PathVariable Integer id, @RequestBody E formRequest ) throws Throwable;
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public abstract T salvar( @RequestBody @Valid E formRequest);

}
