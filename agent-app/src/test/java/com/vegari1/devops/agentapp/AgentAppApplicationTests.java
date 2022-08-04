package com.vegari1.devops.agentapp;

import com.vegari1.devops.agentapp.dto.LoginRequest;
import com.vegari1.devops.agentapp.dto.RegisterRequest;
import com.vegari1.devops.agentapp.dto.RegisterResponse;
import com.vegari1.devops.agentapp.model.User;
import com.vegari1.devops.agentapp.repository.IUserRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.LinkedHashMap;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class AgentAppApplicationTests {

	@LocalServerPort
	private int port;

	@Autowired
	private TestRestTemplate restTemplate;

	@Autowired
	private IUserRepository userRepository;

	private static final String username = "john.smith";
	private static final String password = "pass";
	private static final String passwordHash = "$2a$12$s0F2SVOE0nNh8la8P6pQDulIJ9R5.DO8qUSNn/nH4qeG.9QfnMxry";
	private static final String name = "John";
	private static final String surname = "Smith";
	private static final String requestUsername = "pera.peric";
	private static final String requestName = "Pera";
	private static final String requestSurname = "Peric";
	private static final RegisterRequest registerRequest =
			new RegisterRequest(requestUsername, password, requestName, requestSurname);
	private static final RegisterRequest registerRequestExisting =
			new RegisterRequest(username, password, requestName, requestSurname);

	@BeforeEach
	public void setup() {
		userRepository.deleteAll();
		User existingUser = new User();
		existingUser.setUsername(username);
		existingUser.setPassword(passwordHash);
		existingUser.setName(name);
		existingUser.setSurname(surname);
		existingUser.setEnabled(true);
		userRepository.save(existingUser);
	}

	@Test
	public void loginCorrectDataShouldReturnToken() {
		ResponseEntity<String> response = this.restTemplate.postForEntity(
				"http://localhost:" + port + "/auth/login",
				new LoginRequest(username, password),
				String.class);
		assertEquals(HttpStatus.OK.value(), response.getStatusCode().value());
		String responseBody = response.getBody();
		assertThat(responseBody).isNotEmpty();
	}

	@Test
	public void registerCorrectDataShouldReturnRegisterResponse() {
		ResponseEntity<RegisterResponse> response = this.restTemplate.postForEntity(
				"http://localhost:" + port + "/auth/register",
				registerRequest,
				RegisterResponse.class);
		assertEquals(HttpStatus.CREATED.value(), response.getStatusCode().value());
		RegisterResponse responseBody = response.getBody();
		assertNotNull(responseBody);
		assertEquals(requestUsername, responseBody.getUsername());
		assertEquals(requestName, responseBody.getName());
		assertEquals(requestSurname, responseBody.getSurname());
	}

	@Test
	public void registerExistingUsernameShouldReturnConflict() throws Exception {
		ResponseEntity<Object> response = this.restTemplate.postForEntity(
				"http://localhost:" + port + "/auth/register",
				registerRequestExisting,
				Object.class);
		assertEquals(HttpStatus.CONFLICT.value(), response.getStatusCode().value());
		Object responseBody = response.getBody();
		assertNotNull(responseBody);
		assertInstanceOf(LinkedHashMap.class, responseBody);
		assertThat(((LinkedHashMap<?, ?>) responseBody).get("message"))
				.isEqualTo("User with given username already exists");
	}
}