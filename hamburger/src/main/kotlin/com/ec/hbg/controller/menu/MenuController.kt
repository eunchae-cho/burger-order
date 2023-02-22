package com.ec.hbg.controller.menu

import com.ec.hbg.common.response.ApiResponse
import com.ec.hbg.model.Burger
import com.ec.hbg.model.Drink
import com.ec.hbg.model.Ingredient
import com.ec.hbg.model.Side
import com.ec.hbg.service.BurgerService
import com.ec.hbg.service.DrinkService
import com.ec.hbg.service.SequenceService
import com.ec.hbg.service.SideService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@RestController
class MenuController(
    private val burgerService: BurgerService,
    private val sideService: SideService,
    private val drinkService: DrinkService,
    private val sequenceService: SequenceService
) {

    @GetMapping("/burger")
    fun getAllBurgers(): ApiResponse<List<Burger>> {
        return ApiResponse.ok(burgerService.getAll())
    }

    @GetMapping("/side")
    fun getAllSides(): ApiResponse<List<Side>> {
        return ApiResponse.ok(sideService.getAll())
    }

    @GetMapping("/drink")
    fun getAllDrinks(): ApiResponse<List<Drink>> {
        return ApiResponse.ok(drinkService.getAll())
    }

}