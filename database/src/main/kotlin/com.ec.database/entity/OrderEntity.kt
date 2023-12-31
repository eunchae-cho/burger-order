package com.ec.database.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "order")
@SequenceGenerator(
    name = "order_no_gen",
    sequenceName = "order_no_seq"
)
data class OrderEntity (
    @Id
    @GeneratedValue
    val id: Long? = null,
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "order_no_gen")
    val orderNo: Int? = null,
    @OneToOne
    val menu: MenuEntity,
    val amount: Int,
    val createdAt: LocalDateTime? = LocalDateTime.now()
) {
}