package com.ec.hbg.entity

import com.ec.hbg.common.entity.BaseEntity
import org.springframework.web.multipart.MultipartFile

data class BurgerEntity(
    override val id: String,
    val name: String? = null,
    val price: String? = null,
    val description: String? = null,
    val image: MultipartFile? = null
) : BaseEntity(id) {
}