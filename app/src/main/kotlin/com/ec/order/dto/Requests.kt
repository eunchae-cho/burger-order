package com.ec.order.dto

import jakarta.validation.constraints.NotEmpty

class Requests {

    data class CreateOrder(
        @NotEmpty
       val orderList: List<Order> = listOf()
    ) {
        companion object {
            data class Order (
                val menuId: Long,
                val amount: Int
            )
        }
    }

}