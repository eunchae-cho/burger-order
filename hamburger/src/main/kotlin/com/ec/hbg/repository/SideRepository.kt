package com.ec.hbg.repository

import com.ec.hbg.model.Side
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.stereotype.Repository

@Repository
interface SideRepository: MongoRepository<Side, Long>