package com.jankenpon.app.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.jankenpon.app.entities.MyPlayer;
import com.jankenpon.app.repositories.PlayerRepository;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PlayerController {
	
	private static final Logger LOG = LoggerFactory.getLogger(PlayerController.class);

    private final PlayerRepository playerRepository;
    
    public PlayerController(final PlayerRepository playerRepository) {
    	this.playerRepository = playerRepository;
	}

    @GetMapping("/players")
    public List<MyPlayer> getPlayers() {
    	LOG.info("getPlayers() called...");
        return (List<MyPlayer>) playerRepository.findAll();
    }

    @GetMapping("/player/{name}")
    public MyPlayer getPlayer(@PathVariable String name) {
    	LOG.info("getPlayer() called with '" + name + "'");
        final List<MyPlayer> aList = playerRepository.findByName(name);
        
        if (aList == null || aList.isEmpty()) {
        	System.out.println("no player found with name '" + name + "', adding player");

        	final MyPlayer player = new MyPlayer(name, 0);
            return playerRepository.save(player);
        }
        
        LOG.info("returning player '" + aList.get(0).getName() + "'");
        return aList.get(0);
    }
    
    @PostMapping("/players")
    void addPlayer(@RequestBody MyPlayer player) {
        LOG.info("storing player '" + player.getName() + "'");

        playerRepository.save(player);
    }
    
    @PutMapping("/players")
    void updatePlayer(@RequestBody MyPlayer player) {
        LOG.info("updating player '" + player.getName() + "'");

        playerRepository.save(player);
    }

}
