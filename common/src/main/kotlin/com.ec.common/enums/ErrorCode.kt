package com.ec.common.enums

import com.ec.common.enums.EnumModel

enum class ErrorCode(
    private val code: String,
    private val message: String
) : EnumModel {
    OK("20000", "success"),
    BAD_REQUEST("40000", "bad request"),
    RESOURCE_NOT_FOUND("40400", "resource not found"),
    METHOD_NOT_ALLOWED("40500", "method not allowed"),
    INTERNAL_SERVER_ERROR("50000", "internal server error");

    override fun getKey(): String {
        return code
    }

    override fun getValue(): String {
        return message
    }
}