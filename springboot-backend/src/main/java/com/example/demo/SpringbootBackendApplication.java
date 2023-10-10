package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class SpringbootBackendApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	     // String port=System.getenv("PORT");
	     // String host=System.getenv("HOST");
	     // String mysql_user=System.getenv("MYSQL_USER");
	     // String mysql_password=System.getenv("MYSQL_PASSWORD");
	}

}
