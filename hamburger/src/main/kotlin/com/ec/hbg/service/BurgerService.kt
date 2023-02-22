package com.ec.hbg.service

import com.ec.hbg.model.Burger
import com.ec.hbg.repository.BurgerRepository
import org.springframework.stereotype.Service

@Service
class BurgerService (
 private val burgerRepository: BurgerRepository
) {
    fun getAll(): List<Burger> {
        return burgerRepository.findAll()
    }

    fun save(burger: Burger) {
        burgerRepository.save(burger)
    }
}