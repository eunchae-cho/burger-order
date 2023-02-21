package com.ec.hbg.model

import com.ec.hbg.common.entity.Menu
import org.springframework.data.annotation.Transient
import org.springframework.data.mongodb.core.mapping.Document

@Document(collection = "drink")
data class Drink(
    override var id: Long
) : Menu() {

    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "drink_sequence"
    }

}