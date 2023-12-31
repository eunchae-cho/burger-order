package com.ec.order.controller

import com.ec.common.response.ApiResponse
import com.ec.order.dto.Requests
import com.ec.order.service.OrderService
import org.springframework.web.bind.annotation.PostMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/v2/orders")
class OrderController(
    private val orderService: OrderService
) {
    @PostMapping
    suspend fun create(request: Requests.CreateOrder): ApiResponse<String> = ApiResponse.ok(orderService.create(request.orderList))
}