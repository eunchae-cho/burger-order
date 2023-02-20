package com.ec.hbg.entity

import com.ec.hbg.common.entity.BaseEntity
import lombok.NoArgsConstructor
import org.springframework.data.mongodb.core.mapping.Document
import org.springframework.web.multipart.MultipartFile
@NoArgsConstructor
@Document(collation = "burger")
data class BurgerEntity(
    override val id: Long,
    var name: String? = null,
    var price: String? = null,
    var description: String? = null,
    var image: MultipartFile? = null
) : BaseEntity(id) {
}