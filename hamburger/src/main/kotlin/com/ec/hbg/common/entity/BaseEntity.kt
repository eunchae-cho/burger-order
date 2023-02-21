package com.ec.hbg.common.entity

import org.springframework.data.annotation.Id

abstract class BaseEntity {
    @Id
    val id: String? = null
}