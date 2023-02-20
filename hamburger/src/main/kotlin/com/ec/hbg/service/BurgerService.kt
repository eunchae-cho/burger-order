package com.ec.hbg.service

import com.ec.hbg.entity.BurgerEntity
import com.ec.hbg.repository.BurgerRepository
import org.springframework.stereotype.Service

@Service
class BurgerService (
 private val burgerRepository: BurgerRepository
) {
    fun getAll(): List<BurgerEntity> {
        return burgerRepository.findAll()
    }

    fun insert(burgerEntity: BurgerEntity) {
        burgerRepository.insert(burgerEntity)
    }
}