package io.github.clienteapi.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import io.github.clienteapi.api.model.entity.Cliente;
import io.github.clienteapi.api.model.repository.ClienteRepository;

@SpringBootApplication
public class ApiApplication {

	@Bean
	public CommandLineRunner run( @Autowired ClienteRepository clienteRepository ) {
		return args -> {
			Cliente c = new Cliente();
			c.setNome("Michael");
			c.setCpf("04436786188");
			
			clienteRepository.save(c);
		};
	}
	
	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

}
