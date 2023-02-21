package com.ec.hbg.controller.order

import com.ec.hbg.common.response.ApiResponse
import com.ec.hbg.model.Burger
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

    @GetMapping
    fun getAll(): ApiResponse<List<Burger>> {
        return ApiResponse.ok(burgerService.getAll())
    }

    @PostMapping
    fun insertOne(): ApiResponse<Burger> {
        var burgerEntity = Burger(
            id = sequenceService.generateSequence(Burger.SEQUENCE_NAME),
            name = "테스트버거",
            image = null,
            description = "test",
            price = "8000")
        return ApiResponse.ok(burgerService.save(burgerEntity))
    }
}