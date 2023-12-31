package com.ec.database.entity

import jakarta.persistence.*
import java.time.LocalDateTime

@Entity
@Table(name = "ec_order")
@SequenceGenerator(
    name = "order_no_gen",
    sequenceName = "order_no_seq"
)
data class OrderEntity(
    @Id
    @GeneratedValue
    val id: Long? = null,
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    val orderNo: Int? = null,
    @OneToOne
    @JoinColumn(name = "menu_id")
    val menu: MenuEntity,
    val amount: Int,
    val createdAt: LocalDateTime? = LocalDateTime.now()
)