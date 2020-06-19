package io.github.clienteapi.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ApiApplication {

//	@Bean
//	public CommandLineRunner run( @Autowired ClienteRepository clienteRepository ) {
//		return args -> {
//			Cliente c = new Cliente();
//			c.setNome("Michael");
//			c.setCpf("04436786188");
//			
//			clienteRepository.save(c);
//		};
//	}
	
	public static void main(String[] args) {
		SpringApplication.run(ApiApplication.class, args);
	}

}
