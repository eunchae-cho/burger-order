package com.ec.hbg.model

import org.springframework.data.annotation.Transient

data class Ingredient(
    val id: Long,
    val parentId: Long,
    var name: String,
    var addOption: Boolean? = false,
    var exceptOption: Boolean? = false

) {
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "ingredient_sequence"
    }
}
