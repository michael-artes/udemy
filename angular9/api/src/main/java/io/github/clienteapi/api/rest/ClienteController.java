package io.github.clienteapi.api.rest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.clienteapi.api.model.entity.Cliente;
import io.github.clienteapi.api.model.repository.ClienteRepository;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
	
	@Autowired
	private ClienteRepository clienteRepository;
	
	
	@PostMapping
	@ResponseStatus(HttpStatus.CREATED)
	public Cliente salvar( @RequestBody @Valid Cliente cliente) {
		return clienteRepository.save(cliente);
	}
	
	@GetMapping("{id}")
	public Cliente findById( @PathVariable Integer id ) {
		return clienteRepository
					.findById(id)
					.orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND) );
	}
	
	@GetMapping
	public Iterable<Cliente> findAll(){
		return clienteRepository.findAll();
	}
	
	@DeleteMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void deletar( @PathVariable Integer id ) {
		findById(id);
		clienteRepository.deleteById(id);
	}
	
	
	@PutMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizar( @PathVariable Integer id, @RequestBody Cliente clientForm ) {
		Cliente cliente = findById(id);
		
		cliente.setNome(clientForm.getNome());
		cliente.setCpf(clientForm.getCpf());
		
		clienteRepository.save(cliente);
	}
	

}
