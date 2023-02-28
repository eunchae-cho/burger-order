package com.ec.hbg.model

import com.ec.hbg.common.entity.Menu
import org.springframework.data.annotation.Transient
import org.springframework.data.mongodb.core.mapping.Document
/**
 * 버거
 * */
@Document(collection = "burger")
data class Burger(
    override var id: Long
) : Menu() {
    var ingredient: List<Ingredient>? = listOf()
    var others: List<Option>? = listOf()
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "burger_sequence"
    }

}