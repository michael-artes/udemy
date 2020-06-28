package io.github.clienteapi.api.rest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.github.clienteapi.api.model.entity.Cliente;
import io.github.clienteapi.api.model.repository.ClienteRepository;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController extends GenericController<Cliente, Cliente>{
	
	@Autowired
	public ClienteController(ClienteRepository clienteRepository) {
		super(clienteRepository);
	}
	
	@SuppressWarnings("unchecked")
	@PutMapping("{id}")
	@ResponseStatus(HttpStatus.NO_CONTENT)
	public void atualizar( @PathVariable Integer id, @RequestBody Cliente clientForm ) throws Throwable {
		Cliente cliente = findById(id);
		
		cliente.setNome(clientForm.getNome());
		cliente.setCpf(clientForm.getCpf());
		
		repository.save(cliente);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Cliente salvar(@RequestBody @Valid Cliente formRequest) {
		return (Cliente) repository.save(formRequest);
	}
}
