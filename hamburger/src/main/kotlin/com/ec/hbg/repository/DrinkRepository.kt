package com.ec.hbg.repository

import com.ec.hbg.model.Drink
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface DrinkRepository: MongoRepository<Drink, Long>