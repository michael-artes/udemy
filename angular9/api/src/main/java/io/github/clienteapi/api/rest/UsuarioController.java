package io.github.clienteapi.api.rest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.clienteapi.api.model.entity.Usuario;
import io.github.clienteapi.api.model.repository.UsuarioRepository;
import io.github.clienteapi.api.service.UsuarioService;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController extends GenericController<Usuario, Usuario> {

	private UsuarioService usuarioService;
	
	@Autowired
	UsuarioController(UsuarioRepository usuarioRepository, UsuarioService usuarioService) {
		super(usuarioRepository);
		this.usuarioService = usuarioService;
	}

	@Override
	public void atualizar(Integer id, Usuario formRequest) throws Throwable {
		// TODO Auto-generated method stub
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public Usuario salvar(@RequestBody @Valid Usuario formRequest) {
		
		if (this.usuarioService.existsByLogin(formRequest.getLogin())) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Já existe login cadastrado login=" + formRequest.getLogin());
		}
		
		return (Usuario) repository.save(formRequest);
	}

}
