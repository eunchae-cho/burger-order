package com.ec.hbg.controller.order

import com.ec.hbg.common.response.ApiResponse
import com.ec.hbg.entity.BurgerEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/order")
class OrderController {

    @GetMapping
    fun getAll(): ApiResponse<List<BurgerEntity>> {

    }
}