package com.ec.hbg.repository

import com.ec.hbg.model.Burger
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface BurgerRepository: MongoRepository<Burger, Long>