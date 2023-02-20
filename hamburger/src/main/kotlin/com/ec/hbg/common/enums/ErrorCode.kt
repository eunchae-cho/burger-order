package com.shoplive.task.common.enums

import com.ec.hbg.common.enums.EnumModel

enum class ErrorCode(
    val code: String,
    val message: String
) : EnumModel {
    OK("200", "success"),
    BAD_REQUEST("400", "bad request"),
    RESOURCE_NOT_FOUND("404", "resource not found"),
    METHOD_NOT_ALLOWED("405", "method not allowed"),
    INTERNAL_SERVER_ERROR("500", "internal server error");

    override fun getKey(): String {
        return code
    }

    override fun getValue(): String {
       return message
    }
}