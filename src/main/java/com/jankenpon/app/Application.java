package com.jankenpon.app;

import java.util.Arrays;
import java.util.concurrent.ThreadLocalRandom;
import java.util.stream.Stream;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import com.jankenpon.app.entities.MyPlayer;
import com.jankenpon.app.repositories.PlayerRepository;

@SpringBootApplication
public class Application {
	
	private static final Logger LOG = LoggerFactory.getLogger(Application.class);

	public static void main(String[] args) {
		ApplicationContext ctx = SpringApplication.run(Application.class, args);
	}
	
	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return args -> {
			String[] beanNames = ctx.getBeanDefinitionNames();
			Arrays.sort(beanNames);
			for (String beanName : beanNames) {
				LOG.debug(beanName);
			}

		};
	}
	
	@Bean
    CommandLineRunner init(PlayerRepository playerRepository) {
		
		LOG.info("Adding dummy players.");

        return args -> {
            Stream.of("Jorge", "Killua", "Gon").forEach(name -> {
                MyPlayer player = new MyPlayer(name, ThreadLocalRandom.current().nextInt(100, 200 + 1));
                playerRepository.save(player);
            });
            playerRepository.findAll().forEach(System.out::println);
        };
    }
}
