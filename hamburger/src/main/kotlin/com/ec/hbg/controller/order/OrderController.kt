package com.ec.hbg.controller.order

import com.ec.hbg.common.response.ApiResponse
import com.ec.hbg.entity.BurgerEntity
import com.ec.hbg.service.BurgerService
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/order")
class OrderController(
    private val burgerService: BurgerService
) {

    @GetMapping
    fun getAll(): ApiResponse<List<BurgerEntity>> {
        return ApiResponse.ok(burgerService.getAll())
    }

    @PostMapping
    fun insertOne(): ApiResponse<BurgerEntity> {
        var burgerEntity = BurgerEntity(
            id = null,
            name = "테스트버거",
            image = null,
            description = "test",
            price = "8000")

        return ApiResponse.ok(burgerService.insert(burgerEntity))
    }
}