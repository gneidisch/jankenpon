package com.jankenpon.app.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class MyPlayer {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private final String name;
    private final Integer score;
    
    public MyPlayer() {
    	name = "";
    	score = 0;
	}
    
    public MyPlayer(final String name, final Integer score) {
    	this.name = name;
    	this.score = score;
    }

    public long getId() {
		return id;
	}
    
    public String getName() {
		return name;
	}
    
    public Integer getScore() {
		return score;
	}

	@Override
	public String toString() {
		return "MyPlayer [id=" + id + ", name=" + name + ", score=" + score + "]";
	}
}