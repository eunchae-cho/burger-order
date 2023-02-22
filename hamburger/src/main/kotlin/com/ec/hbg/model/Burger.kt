package com.ec.hbg.model

import com.ec.hbg.common.entity.Menu
import org.springframework.data.annotation.Transient
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "burger")
data class Burger(
    override var id: Long
) : Menu() {
    var ingredient: List<Ingredient>? = listOf()
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "burger_sequence"
    }

}