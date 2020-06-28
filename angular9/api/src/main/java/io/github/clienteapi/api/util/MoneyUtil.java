package io.github.clienteapi.api.util;

import java.math.BigDecimal;

import org.springframework.stereotype.Component;

@Component
public class MoneyUtil {
	
	public static BigDecimal convertToDouble(String str) {
        str = str.replace(".","");
        str = str.replace(",", ".");
        str = str.trim();
        return new BigDecimal(str);
	}
	
}
