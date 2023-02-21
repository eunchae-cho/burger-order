package com.ec.hbg.model

import org.springframework.data.annotation.Transient

data class Option(
    val id: Long,
    val parentId: Long,
    var name: String

) {
    var addable: Boolean? = false
    var exceptional: Boolean? = false
    var requested: Boolean? = false
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "option_sequence"
    }
}
