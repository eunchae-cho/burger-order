package com.ec.hbg.controller.order

import com.ec.hbg.common.response.ApiResponse
import com.ec.hbg.model.Burger
import com.ec.hbg.model.Option
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
    fun save(): ApiResponse<Burger> {
        var burger = Burger(
            id = sequenceService.generateSequence(Burger.SEQUENCE_NAME)!!)
        burger.name = "테스트"
        burger.price = "9000"
        var option1 = Option(
            id = sequenceService.generateSequence(Option.SEQUENCE_NAME)!!,
            parentId = burger.id,
            name = ""
        )

//        burger.options
        return ApiResponse.ok(burgerService.save(burger))
    }
}