package com.ec.hbg.model

import org.springframework.data.annotation.Id
import org.springframework.data.annotation.Transient
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.web.multipart.MultipartFile

@Document(collection = "burger")
data class Burger(
    @Id
    var id: Long? = null,
    var name: String? = null,
    var price: String? = null,
    var description: String? = null,
    var image: MultipartFile? = null
) {
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "burger_sequence"
    }

}