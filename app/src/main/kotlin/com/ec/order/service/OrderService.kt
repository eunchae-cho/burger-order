package com.ec.order.service

import com.ec.common.enums.ErrorCode
import com.ec.common.exception.CustomException
import com.ec.database.entity.OrderEntity
import com.ec.database.repository.MenuRepository
import com.ec.database.repository.OrderRepository
import com.ec.order.consts.ErrorMessage.NOT_FOUND_MENU
import com.ec.order.dto.Requests
import org.springframework.stereotype.Service
import kotlin.jvm.optionals.getOrNull

@Service
class OrderService(
    private val orderRepository: OrderRepository,
    private val menuRepository: MenuRepository
) {
    suspend fun getAll(orderNo: Int): List<OrderEntity> = orderRepository.findAllByOrderNo(orderNo)

    suspend fun create(orderList: List<Requests.CreateOrder.Companion.Order>) {
        return orderList.forEach {
            orderRepository.save(
                OrderEntity(
                    menu = menuRepository.findById(it.menuId).getOrNull() ?: throw CustomException(ErrorCode.RESOURCE_NOT_FOUND, NOT_FOUND_MENU),
                    amount = it.amount
                )
            )
        }
    }

}