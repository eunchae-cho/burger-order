package com.ec.hbg.repository

import com.ec.hbg.entity.BurgerEntity
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface BurgerRepository: MongoRepository<BurgerEntity, Long>