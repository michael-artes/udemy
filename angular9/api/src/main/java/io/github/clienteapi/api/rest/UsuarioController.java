package io.github.clienteapi.api.rest;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.github.clienteapi.api.model.entity.Usuario;
import io.github.clienteapi.api.model.repository.UsuarioRepository;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController extends GenericController<Usuario, Usuario> {

	private PasswordEncoder passwordEncoder;
	
	@Autowired
	UsuarioController(UsuarioRepository usuarioRepository, PasswordEncoder passwordEncoder) {
		super(usuarioRepository);
		this.passwordEncoder = passwordEncoder;
	}

	@Override
	public void atualizar(Integer id, Usuario formRequest) throws Throwable {
		// TODO Auto-generated method stub
		
	}

	@SuppressWarnings("unchecked")
	@Override
	public Usuario salvar(@RequestBody @Valid Usuario formRequest) {
		return (Usuario) repository.save(formRequest);
	}

}
