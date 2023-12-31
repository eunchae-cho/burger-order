package com.ec.database.repository

import com.ec.database.entity.OrderEntity
import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository

@Repository
interface OrderRepository: JpaRepository<OrderEntity, Long> {
    suspend fun findAllByOrderNo(orderNo: Int): List<OrderEntity>
}