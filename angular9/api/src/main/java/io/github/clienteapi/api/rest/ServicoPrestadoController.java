package io.github.clienteapi.api.rest;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import io.github.clienteapi.api.model.entity.ServicoPrestado;
import io.github.clienteapi.api.model.repository.ClienteRepository;
import io.github.clienteapi.api.model.repository.ServicoPrestadoRepository;
import io.github.clienteapi.api.util.MoneyUtil;

@RestController
@RequestMapping("/api/servicos-prestados")
public class ServicoPrestadoController extends GenericController<ServicoPrestado, ServicoPrestadoDTO> {

	private ClienteRepository clienteRepository;
	private MoneyUtil moneyUtil;
	
	@Autowired
	ServicoPrestadoController(
			ServicoPrestadoRepository servicoPrestadoRepository, 
			ClienteRepository clienteRepository, 
			MoneyUtil moneyUtil) {
		
		super(servicoPrestadoRepository);
		this.clienteRepository = clienteRepository;
		this.moneyUtil = moneyUtil;
	}

	@Override
	public void atualizar(Integer id, ServicoPrestadoDTO formRequest) throws Throwable {
		// TODO Auto-generated method stub
	}

	@SuppressWarnings({ "static-access", "unchecked" })
	@Override
	public ServicoPrestado salvar(@RequestBody @Valid ServicoPrestadoDTO formRequest) {

		ServicoPrestado servico = new ServicoPrestado();
		servico.setDescricao(formRequest.getDescricao());
		servico.setData( LocalDate.parse(formRequest.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy")) );
		servico.setValor( moneyUtil.convertToDouble(formRequest.getValor()) );
		
		servico.setCliente( clienteRepository.findById(formRequest.getIdCliente()).orElseThrow( () -> new ResponseStatusException(HttpStatus.NOT_FOUND, "cliente não econtrado!" + this.toString()) ) );
		
		return (ServicoPrestado) repository.save(servico);
	}
	
	@GetMapping("/pesquisar")
	public List<ServicoPrestado> pesquisar( 
			@RequestParam(value = "nome", defaultValue = "", required = false) String nome,
			@RequestParam(value = "mes", required = false) Integer mes){
		
		return ((ServicoPrestadoRepository) repository).findByNomeClienteAndMes("%"+nome+"%", mes);
	}

	
	
}
