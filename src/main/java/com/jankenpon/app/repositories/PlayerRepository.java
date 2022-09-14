package com.jankenpon.app.repositories;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.jankenpon.app.entities.MyPlayer;

public interface PlayerRepository extends CrudRepository<MyPlayer, Long> {
    List<MyPlayer> findByName(String name /*, Pageable pageable*/);
}
