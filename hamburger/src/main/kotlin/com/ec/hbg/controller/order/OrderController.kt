package com.ec.hbg.controller.order

import com.ec.hbg.common.response.ApiResponse
import com.ec.hbg.model.Burger
import com.ec.hbg.model.Ingredient
import com.ec.hbg.service.BurgerService
import com.ec.hbg.service.SequenceService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/order")
class OrderController(
    private val burgerService: BurgerService,
    private val sequenceService: SequenceService
) {

}