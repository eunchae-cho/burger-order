package com.ec.database.entity

import com.ec.common.enums.MenuType
import jakarta.persistence.*

@Entity
@Table(name = "ec_menu")
data class MenuEntity(
    @Id
    @GeneratedValue
    val id: Long? = null,
    val name: String,
    @Enumerated(EnumType.STRING)
    val type: MenuType,
    val description: String? = null
)
