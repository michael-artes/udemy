package io.github.clienteapi.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import io.github.clienteapi.api.model.entity.Usuario;
import io.github.clienteapi.api.model.repository.UsuarioRepository;

@Service
public class UsuarioService implements UserDetailsService{

	@Autowired
	private UsuarioRepository usuarioRepository;
	
	public boolean existsByLogin(String login) {
		return usuarioRepository.existsByLogin(login);
	}
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		
		Usuario usuario = usuarioRepository
			.findByLogin(username)
			.orElseThrow(() -> new UsernameNotFoundException("Login não encontrado"));
		
		
		return User.builder()
					.username(usuario.getLogin())
					.password(usuario.getPassword())
					.roles("USER")
					.build();
		
	}
}
