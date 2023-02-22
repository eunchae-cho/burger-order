package com.ec.hbg.model

import org.springframework.data.annotation.Transient

data class Ingredient(
    val id: Long,
    val parentId: Long,
    var name: String

) {
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "ingredient_sequence"
    }
}
