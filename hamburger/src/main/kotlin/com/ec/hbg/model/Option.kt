package com.ec.hbg.model

import org.springframework.data.annotation.Transient

/**
 * 기타 옵션
 * */
data class Option(
    val id: Long,
    val parentId: Long,
    var name: String

) {
    companion object {
        @Transient
        const val SEQUENCE_NAME: String = "option_sequence"
    }
}
