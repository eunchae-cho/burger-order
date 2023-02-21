package com.ec.hbg.common.entity

import org.springframework.web.multipart.MultipartFile

abstract class Menu {
    abstract val id: Long
    var name: String? = null
    var price: String? = null
    var description: String? = null
    var image: MultipartFile? = null
}