package com.ec.hbg.model

import org.springframework.data.annotation.Transient
/**
 * 버거 재료
 * */
data class Ingredient(
    val id: Long,
    val parentId: Long,
    var name: String,
    var addable: Boolean? = false,
    var exceptable: Boolean? = false

) {
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "ingredient_sequence"
    }
}
