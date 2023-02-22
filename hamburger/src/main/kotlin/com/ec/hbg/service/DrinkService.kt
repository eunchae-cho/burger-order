package com.ec.hbg.service

import com.ec.hbg.model.Drink
import com.ec.hbg.repository.DrinkRepository
import org.springframework.stereotype.Service

@Service
class DrinkService(
    private val drinkRepository: DrinkRepository
) {
    fun getAll(): List<Drink> {
        return drinkRepository.findAll()
    }

    fun save(drink: Drink) {
        drinkRepository.save(drink)
    }
}