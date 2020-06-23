package io.github.clienteapi.api.rest;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.server.ResponseStatusException;

import io.github.clienteapi.api.rest.exception.ApiErrors;

@RestControllerAdvice
public class ApplicationControllerAdvice {

	
	@ExceptionHandler(MethodArgumentNotValidException.class)
	@ResponseStatus(HttpStatus.BAD_REQUEST)
	public ApiErrors handleValidationErros(MethodArgumentNotValidException ex) {
		
		BindingResult bindingResult = ex.getBindingResult();
		List<String> erros = bindingResult.getAllErrors()
			.stream()
			.map(ObjectError::getDefaultMessage)
			.collect( Collectors.toList() );
		
		return new ApiErrors(erros);
	}
	
	
	@ExceptionHandler(ResponseStatusException.class)
	public ResponseEntity<ApiErrors> handleResponseStatusException(ResponseStatusException ex) {
		return new ResponseEntity<ApiErrors>(new ApiErrors(ex.getMessage()), ex.getStatus()); 
	}
	
}
